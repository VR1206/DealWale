import { useState } from "react";
import SuperSellerCards from "./superSalesCards";

interface SellerList {
    id: number;
    imageUrl: string;
    link: string;
}

function SuperSellers() {
    const Seller: SellerList[] = [
        {
            id: 1,
            imageUrl: 'https://asset20.ckassets.com/resources/image/category/best-deals-today-4221-1727286269.png',
            link: 'https://amzn.to/4eYdaHM'
        },
        {
            id: 2,
            imageUrl: 'https://www.91-cdn.com/hub/wp-content/uploads/2023/10/amazon-best-phone-deals.png?tr=w-781',
            link: 'https://amzn.to/3YrHyVs'
        },
        {
            id: 3,
            imageUrl: 'https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/Wave_3/ClearanceIngress/V2/clearance-1400x800-AF._CB418110735_.gif',
            link: 'https://amzn.to/4f74Rcz'
        },
        {
            id: 4,
            imageUrl: 'https://feeds.abplive.com/onecms/images/uploaded-images/2021/10/14/642f9361881837495ab0f54a53e6f855_original.png',
            link: 'https://amzn.to/3NuONWs'
        },
    ];

    const Accessories: SellerList[] = [
        {
            id: 1,
            imageUrl: 'https://asset20.ckassets.com/resources/image/category/all-sunglasses-3363-1607090104.png',
            link: 'https://amzn.to/4dQiz2o'
        },
        {
            id: 2,
            imageUrl: 'https://asset20.ckassets.com/resources/image/category/watches-3364-1607090111.png',
            link: 'https://amzn.to/4dPiI6k'
        },
        {
            id: 3,
            imageUrl: 'https://asset20.ckassets.com/resources/image/category/jewellery-3365-1607090120.png',
            link: 'https://amzn.to/403yyHp'
        },
        {
            id: 4,
            imageUrl: 'https://asset20.ckassets.com/resources/image/category/handbags-3366-1607090128.png',
            link: 'https://amzn.to/4f6ajg2'
        },
    ];

    const Electronics: SellerList[] = [
        {
            id: 1,
            imageUrl: 'https://asset20.ckassets.com/resources/image/category/headphones-headsets-996-1607082997.png',
            link: 'https://amzn.to/409eTWG'
        },
        {
            id: 2,
            imageUrl: 'https://asset20.ckassets.com/resources/image/category/power-banks-2933-1607083221.png',
            link: 'https://amzn.to/4eYmgnU'
        },
        {
            id: 3,
            imageUrl: 'https://asset20.ckassets.com/resources/image/category/best-speakers-539-1618816108.jpg',
            link: 'https://amzn.to/3Ue0zbk'
        },
        {
            id: 4,
            imageUrl: 'https://asset20.ckassets.com/resources/image/category/handbags-3366-1607090128.png',
            link: 'https://amzn.to/4f6ajg2'
        },
    ];

    const MenFashion: SellerList[] = [
        {
            id: 1,
            imageUrl: 'https://asset20.ckassets.com/resources/image/category/men-tshirt-2889-1607086734.png',
            link: 'https://amzn.to/3Y3TT0G'
        },
        {
            id: 2,
            imageUrl: 'https://asset20.ckassets.com/resources/image/category/men-jeans-2820-1607086744.png',
            link: 'https://amzn.to/4hkgnU6'
        },
        {
            id: 3,
            imageUrl: 'https://asset20.ckassets.com/resources/image/category/men-shirts-2819-1607086751.png',
            link: 'https://amzn.to/4dRorZi'
        },
        {
            id: 4,
            imageUrl: 'https://asset20.ckassets.com/resources/image/category/men-trousers-2821-1607086759.png',
            link: 'https://amzn.to/3UcKxyp'
        },
    ];

    const [item, setItem] = useState<SellerList[]>(Seller);
    const [activeCategory, setActiveCategory] = useState<string>('SuperSales');

    const showCategory = (category: string, items: SellerList[]) => {
        setItem(items);
        setActiveCategory(category);
    };

    return (
        <>
            <div className='flex justify-center'>
                <div className='md:h-auto md:w-[85vw] sm:h-[100vh] sm:w-[100vw] h-auto w-[98%] mt-10 sm:mt-16 md:mt-12 cursor-pointer'>
                    <div className="bg-[#f0f4f3] md:h-[5vh] sm:h-10 w-full h-10 shadow-2xl rounded-lg justify-evenly flex items-center">
                        <button
                            onClick={() => showCategory('SuperSales', Seller)}
                            className={`md:text-lg sm:text-sm text-sm font-semibold md:mx-5 sm:mx-10 mx-2  ${activeCategory === 'SuperSales' ? 'underline' : ''}`}>
                            SuperSales
                        </button>
                        <button
                            onClick={() => showCategory('Accessories', Accessories)}
                            className={`md:text-lg sm:text-sm text-sm font-semibold md:mx-5 sm:mx-10 mx-2  ${activeCategory === 'Accessories' ? 'underline' : ''}`}>
                            Accessories
                        </button>
                        <button
                            onClick={() => showCategory('Electronics', Electronics)}
                            className={`md:text-lg sm:text-sm text-sm font-semibold md:mx-5 sm:mx-10 mx-2  ${activeCategory === 'Electronics' ? 'underline' : ''}`}>
                            Electronics
                        </button>
                        <button
                            onClick={() => showCategory('MenFashion', MenFashion)}
                            className={`md:text-lg sm:text-sm text-sm font-semibold md:mx-5 sm:mx-10 mx-2  ${activeCategory === 'MenFashion' ? 'underline' : ''}`}>
                            Men's Fashion
                        </button>
                    </div>

                    <div className='flex gap-2 m-1 flex-wrap justify-center mt-4 md:gap-4'>
                        {
                            item.map((item) => (
                                <SuperSellerCards key={item.id}>
                                    <img src={item.imageUrl} alt=""
                                        className="h-full w-full rounded-lg overflow-hidden cursor-pointer"
                                        onClick={() => window.location.href = item.link}
                                    />
                                </SuperSellerCards>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default SuperSellers;
