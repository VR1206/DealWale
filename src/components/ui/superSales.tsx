
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
    ]


    return (
        <>
            <div className='flex justify-center'>
                <div className='md:h-auto md:w-[85vw] sm:h-[100vh] sm:w-[100vw] h-auto w-[98%] mt-10 sm:mt-16 md:mt-12'>
                    <h1 className='text-3xl font-bold md:mx-5 sm:mx-10 mx-2'>Super Sales</h1>
                    <div className='flex gap-2 m-1 flex-wrap justify-center   mt-4 md:gap-4'>
                        {
                            Seller.map((item) => (
                                <SuperSellerCards key={item.id}>
                                    <img src={item.imageUrl} alt=""
                                        className="h-full w-full rounded-lg overflow-hidden cursor-pointer "
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
