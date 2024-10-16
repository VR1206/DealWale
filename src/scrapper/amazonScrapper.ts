// Import required libraries
import axios from 'axios';
import * as cheerio from 'cheerio';

// Function to generate a random user agent from a list
function getRandomUserAgent(): string {
    const userAgents: string[] = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Safari/605.1.15",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.864.41 Safari/537.36 Edg/91.0.864.41",
        "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL Build/QP1A); AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.xxxx.xx Mobile Safari/537.x",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.x.x (KHTML, like Gecko) Version/x.x Mobile/x"
    ];
    return userAgents[Math.floor(Math.random() * userAgents.length)];
}

interface Review {
    rating: string | null;
    numRatings: string | null;
    recentSale?: string | null;
}

interface ProductData {
    title: string;
    imgUrl: string;
    price: string;
    review: Review | null;
}

// Function to scrape Amazon based on a search query
async function amazonScraper(searchQuery: string): Promise<ProductData[]> {
    const data: ProductData[] = [];

    try {
        const url = `https://www.amazon.in/s?k=${searchQuery.replace(/ /g, '+')}`;
        
        // Making a GET request to fetch the page content
        const response = await axios.get(url, {
          headers: {
            "User-Agent": getRandomUserAgent(),
            "Accept-Language": "en-US,en;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            Connection: "keep-alive",
            Referer: "https://www.amazon.in/",
            DNT: "1", // Do Not Track
            "Upgrade-Insecure-Requests": "1",
          },
        });
        
        const $ = cheerio.load(response.data);

        // Select all products that match the search results
        const products = $('[data-component-type="s-search-result"]').not('.AdHolder');
        
        products.each((_, product) => {
            const title = $(product).find('span.a-size-medium.a-color-base.a-text-normal').text();
            const imgUrl = $(product).find('img.s-image').attr('src');
            const price = $(product).find('span.a-price-whole').text().replace(',', '');
            const rating = $(product).find('[aria-label*="out of 5 stars"]').text();
            const numRatings = $(product).find('[aria-label*="ratings"]').text();
            
            // Adding product data to the array
            data.push({
                title: title || 'No title available',
                imgUrl: imgUrl || 'No image available',
                price: price || 'No price available',
                review: {
                    rating: rating || 'No rating available',
                    numRatings: numRatings || 'No number of ratings available'
                }
            });
        });

    } catch (error) {
        console.error(`Error while scraping Amazon: ${(error as Error).message}`);
    }

    console.log(data);
    return data;
}

export default amazonScraper;