
import Card from './card';
interface BrandList {
  id: number;
  imageUrl: string;
  link: string;
}
function OurServices() {

  const brands: BrandList[] = [
    {
      id: 1,
      imageUrl: 'https://img-prd-pim.poorvika.com/prodvarval/apple-macbook-air-m1-chip-with-8-core-cpu-and-7-core-gpu-mac-os-laptop-gold.png',
      link: 'https://amzn.to/4dMc8xC'
    },
    {
      id: 2,
      imageUrl: 'https://in.store.asus.com/media/catalog/product/1/_/1_fa507u_1.png',
      link: 'https://amzn.to/3A2ZZ9F'

    },
    {
      id: 3,
      imageUrl: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721213672/Croma%20Assets/Computers%20Peripherals/Laptop/Images/304863_0_orao7x.png',
      link: 'https://amzn.to/486pFyA'

    },
    {
      id: 4,
      imageUrl: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722284289/Croma%20Assets/Entertainment/Television/Images/267334_0_gveqbv.png?tr=w-600',
      link: 'https://amzn.to/4h3PrYz'

    },
    {
      id: 5,
      imageUrl: 'https://theitgear.com/wp-content/uploads/2022/03/Cosmic-Byte-CB-GK-25-Pandora-Tkl-Mechanical-Keyboard-With-Outemu-Blue-Switches-And-Rainbow-Led.webp',
      link: 'https://amzn.to/48792TE'

    },
    {
      id: 6,
      imageUrl: 'https://antesports.com/wp-content/uploads/2023/04/51ZpCKyxMWL.png',
      link: 'https://amzn.to/3YazCXc'

    },
    {
      id: 7,
      imageUrl: 'https://www.gonoise.com/cdn/shop/products/4_2.png?v=1676439601',
      link: 'https://amzn.to/485RcjV'

    },
    {
      id: 8,
      imageUrl: 'https://image01-in.oneplus.net/media/202406/19/9c9806ee60643ab92c71db1da6d55c2c.png',
      link: 'https://amzn.to/3U9wpWO'

    },
    {
      id: 9,
      imageUrl: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724776643/Croma%20Assets/Large%20Appliances/Dryers/Images/260605_0_yrwbow.png',
      link: 'https://amzn.to/3zXDZwU'
    },
    {
      id: 10,
      imageUrl: 'https://www.bigbasket.com/media/uploads/p/xl/40066432_6-pintola-chocolate-peanut-butter-creamy.jpg',
      link: 'https://amzn.to/4f00qjG'

    },
    {
      id: 11,
      imageUrl: 'https://theitgear.com/wp-content/uploads/2024/03/Cosmic-Byte-CB-GK-39-Wireless-Trinity-Optical-Latest-Swappable-Switch-Keyboard-1-430x430.webp',
      link: 'https://amzn.to/3ZZPmPw'

    },
    {
      id: 12,
      imageUrl: 'https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/a/p/apple_20w_usb-c_power_adapter-removebg-preview.png',
      link: 'https://amzn.to/405gnBa'
    },
    {
      id: 13,
      imageUrl: 'https://m.media-amazon.com/images/I/61Le0NNy8FL._AC_UF1000,1000_QL80_.jpg',
      link: 'https://amzn.to/4f6jlcN'
    },
    {
      id: 14,
      imageUrl: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710228259/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/304474_0_uggihm.png',
      link: 'https://amzn.to/3U5EZWn'
    },
    {
      id: 15,
      imageUrl: 'https://www.sathya.store/img/product/mMlB9LgIot43rEA5.png',
      link: 'https://amzn.to/4hbkotZ'
    },


  ];
  return (
    <div className='flex justify-center'>
      <div className='md:h-auto md:w-[85vw] sm:h-[100vh] sm:w-[100vw] h-auto w-[98%] mt-10 sm:mt-16 md:mt-12'>
        <h1 className='text-3xl font-bold md:mx-5 sm:mx-10 mx-2'>Top Deals</h1>
        <div className='flex gap-3 m-1 flex-wrap justify-center  mt-4 md:gap-4'>
          {brands.map(({ id, imageUrl, link }) => (
            <Card key={id} className='transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
              <img
                src={imageUrl}
                alt="Brand"
                className='h-[100%] w-[100%] p-3 object-cover rounded-lg overflow-hidden'
                onClick={() => window.location.href = link}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>


  );
}

export default OurServices;
