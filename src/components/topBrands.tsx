
import Blocks from './blocks';

interface BrandList {
    id: number;
    imageUrl: string;
}

function TopBrands() {
    const brands: BrandList[] = [
        {
            id: 1,
            imageUrl: 'https://s3no.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg?p=default&s=lg',
        },
        {
            id: 2,
            imageUrl: 'https://s3no.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg?p=default&s=lg',
        },
        {
            id: 3,
            imageUrl: 'https://s3no.cashify.in/cashify/brand/img/xhdpi/20922c34-8afc.jpg?p=default&s=lg',
        },
        {
            id: 4,
            imageUrl: 'https://s3no.cashify.in/cashify/brand/img/xhdpi/dfb6c340-010f.jpg?p=default&s=lg',
        },
        {
            id: 5,
            imageUrl: 'https://s3no.cashify.in/cashify/brand/img/xhdpi/ac5c9a7b-76b5.jpg?p=default&s=lg',
        },
        {
            id: 6,
            imageUrl: 'https://s3no.cashify.in/cashify/brand/img/xhdpi/1dcd7fda-0141.jpg?p=default&s=lg',
        },
        {
            id: 7,
            imageUrl: 'https://s3no.cashify.in/cashify/brand/img/xhdpi/0124cc45-3a6c.jpg?p=default&s=lg',
        },
        {
            id: 8,
            imageUrl: 'https://s3no.cashify.in/cashify/brand/img/xhdpi/fef4e5ae-6507.jpg?p=default&s=lg',
        },
        {
            id: 9,
            imageUrl: 'https://s3no.cashify.in/cashify/brand/img/xhdpi/cfeaabff-69bf.jpg?p=default&s=lg',
        },
        {
            id: 10,
            imageUrl: 'https://s3no.cashify.in/cashify/brand/img/xhdpi/bf25222a-a2a7.jpg?p=default&s=lg',
        },
        {
            id: 11,
            imageUrl: 'https://s3no.cashify.in/cashify/brand/img/xhdpi/dacc50a2-77a9.jpg?p=default&s=lg',
        },
        {
            id: 12,
            imageUrl: 'https://s3no.cashify.in/cashify/brand/img/xhdpi/06bc74db-4d38.jpg?p=default&s=lg',
        },
    ];

    return (
        <div className='flex md:justify-center'>
            <div className='md:h-[45vh] md:w-[80vw] sm:h-[100vh] sm:w-[100vw] mt-16 sm:mt-16 md:mt-8'>
                <h1 className='text-3xl font-bold md:mx-2 sm:mx-10 mx-2'>Top Brands</h1>
                <div className='flex justify-center flex-wrap md:gap-4 sm:gap-10 gap-10 py-3'>
                    {brands.map(({ id, imageUrl }) => (
                        <Blocks key={id}>
                            <img
                                src={imageUrl}
                                alt="Brand"
                                className='h-[100%] w-[100%] overflow-hidden rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'
                            />
                        </Blocks>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default TopBrands;
