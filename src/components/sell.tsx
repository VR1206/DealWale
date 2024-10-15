
import Card from './card';
interface BrandList {
    id: number;
    imageUrl: string;
}
function Sell() {

    const brands: BrandList[] = [
        {
            id: 1,
            imageUrl: 'https://s3no.cashify.in/builder/cd13764b153e46e19f9c6551ee52b5e6.webp?p=default&s=lg',
        },
        {
            id: 2,
            imageUrl: 'https://s3no.cashify.in/builder/caa3a1efa51541a5aa37fd292790ea81.webp?p=default&s=lg',
        },
        {
            id: 3,
            imageUrl: 'https://s3no.cashify.in/builder/3e1f26febd3f4056a7ac5104a122aa94.webp?p=default&s=lg',
        },
        {
            id: 4,
            imageUrl: 'https://s3no.cashify.in/builder/b35c134330e5422699aed92d1254789d.webp?p=default&s=lg',
        },
        {
            id: 5,
            imageUrl: 'https://s3no.cashify.in/builder/4060695bca3447c2b7296aa5ba9ce827.webp?p=default&s=lg',
        },
        {
            id: 6,
            imageUrl: 'https://s3no.cashify.in/builder/522d89598f594f0ca6f9d22e40517db6.webp?p=default&s=lg',
        },
        {
            id: 7,
            imageUrl: 'https://s3no.cashify.in/builder/ed7d743ec18f40f6b0cbb58bc6783d5b.webp?p=default&s=lg',
        },
        {
            id: 8,
            imageUrl: 'https://s3no.cashify.in/builder/f1f0df2917bd410b8da95675c63be2d1.webp?p=default&s=lg',
        },
        {
            id: 8,
            imageUrl: 'https://s3no.cashify.in/builder/f1f0df2917bd410b8da95675c63be2d1.webp?p=default&s=lg',
        },
        {
            id: 8,
            imageUrl: 'https://s3no.cashify.in/builder/f1f0df2917bd410b8da95675c63be2d1.webp?p=default&s=lg',
        },
        {
            id: 8,
            imageUrl: 'https://s3no.cashify.in/builder/f1f0df2917bd410b8da95675c63be2d1.webp?p=default&s=lg',
        },
        {
            id: 8,
            imageUrl: 'https://s3no.cashify.in/builder/f1f0df2917bd410b8da95675c63be2d1.webp?p=default&s=lg',
        },

    ];
    return (
        <div className='flex justify-center'>
            <div className='md:h-auto md:w-[85vw] sm:h-[100vh] sm:w-[100vw] h-auto w-[98%] mt-5 sm:mt-16 md:mt-8'>
                <h1 className='text-3xl font-bold md:mx-5 sm:mx-10 mx-2'>Sell Your Old Device</h1>
                <div className='flex gap-2 flex-wrap justify-center mt-4 md:gap-4'>
                    {brands.map(({ id, imageUrl }) => (
                        <Card key={id} className='transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden'>
                            <img
                                src={imageUrl}
                                alt="Device"
                                className='h-full w-full object-cover rounded-lg'
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </div>


    );
}

export default Sell;
