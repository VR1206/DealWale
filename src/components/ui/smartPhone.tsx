
import Card from '../ui/card';
interface BrandList {
    id: number;
    imageUrl: string;
    link: string;
}
function SmartPhone() {

    const brands: BrandList[] = [
        {
            id: 1,
            imageUrl: 'https://inventstore.in/wp-content/uploads/2023/04/iPhone_13_Starlight_Pure_.webp',
            link: 'https://amzn.to/3BIzHtL'
        },
        {
            id: 2,
            imageUrl: 'https://img-prd-pim.poorvika.com/product/Apple-iphone-15-pro-max-black-titanium-256gb-Back-Front-Back-Side-View-Image.png',
            link: 'https://amzn.to/405CtTR'
        },
        {
            id: 3,
            imageUrl: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/global/product/larry/specs/product-black.png',
            link: 'https://amzn.to/407EeAg'

        },
        {
            id: 4,
            imageUrl: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1706790940/Croma%20Assets/Communication/Mobiles/Images/304698_hagerl.png',
            link: 'https://amzn.to/4f7dzrd'

        },
        {
            id: 5,
            imageUrl: 'https://media.croma.com/image/upload/v1714478878/Croma%20Assets/Communication/Mobiles/Images/306595_7_qlmvcg.png',
            link: 'https://amzn.to/4eJY9JU'

        },
        {
            id: 6,
            imageUrl: 'https://i0.wp.com/www.93mobiles.com/wp-content/uploads/2024/08/301917_4_ypz4lq.webp?fit=640%2C640&ssl=1',
            link: 'https://amzn.to/484FFkV'

        },
        {
            id: 7,
            imageUrl: 'https://nothing.tech/cdn/shop/files/2048x1352BuyPage-BlackPhone-1.png?v=1720093601',
            link: 'https://amzn.to/3U78CGY'

        },
        {
            id: 8,
            imageUrl: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1704270661/Croma%20Assets/Communication/Mobiles/Images/303570_lzunu9.png',
            link: 'https://amzn.to/486QXFe'

        },
        {
            id: 8,
            imageUrl: 'https://rrmobiles.in/wp-content/uploads/2024/07/157780-800-auto.png',
            link: 'https://amzn.to/4eKOLFJ'

        },
        {
            id: 9,
            imageUrl: 'https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/samsung-galaxy-s23-fe-5g-mint-128gb-8gb-ram-front-back-view.png',
            link: 'https://amzn.to/4h3ctib'

        },
        {
            id: 10,
            imageUrl: 'https://assets.beebom.com/mobile/2024/08/Untitled-design-2024-08-22T112829.177.png',
            link: 'https://amzn.to/48cBofk'
        },
        {
            id: 11,
            imageUrl: 'https://media.croma.com/image/upload/v1713460765/Croma%20Assets/Communication/Mobiles/Images/305330_7_jkth49.png',
            link: 'https://amzn.to/4dS1llk'

        },
        {
            id: 12,
            imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-m156bdbdins/gallery/in-galaxy-m15-5g-sm-m156-sm-m156bdbdins-541575158?$650_519_PNG$',
            link: 'https://amzn.to/3UaIAmk'

        },
        {
            id: 13,
            imageUrl: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721048340/Croma%20Assets/Communication/Mobiles/Images/308175_0_marq4l.png',
            link: 'https://amzn.to/48aQAcK'

        },
        {
            id: 14,
            imageUrl: 'https://image01-in.oneplus.net/media/202406/19/ad3a7ab482ea9ba7fa0975c775769e7c.png',
            link: 'https://amzn.to/4082B0y'

        },

    ];
    return (
        <div className='flex justify-center'>
            <div className='md:h-[60vh] md:w-[85vw] sm:h-[100vh]  sm:w-[100vw] h-auto w-[98%] mt-5 sm:mt-16 md:mt-8'>
                <h1 className='text-3xl font-bold md:mx-5 sm:mx-10 mx-2'>Smart Phone </h1>
                <div className='flex gap-3 m-1 mt-4 md:gap-2 flex-nowrap overflow-x-auto scroll-smooth'>
                    {brands.map(({ id, imageUrl, link }) => (
                        <Card key={id} className='transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden'>
                            <img
                                src={imageUrl}
                                alt="Device"
                                className='h-full  p-2  w-full object-cover rounded-lg cursor-pointer'
                                onClick={() => window.location.href = link}
                            />

                        </Card>
                    ))}
                </div>
            </div>
        </div>


    );
}

export default SmartPhone;
