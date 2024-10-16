import { useEffect, useRef } from "react";

const ImageCarousel = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth; // Scroll by the width of one image

      const interval = setInterval(() => {
        if (carouselRef.current) {
          if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
            // Reset the scroll position to the start of the original images when reaching the duplicate
            carouselRef.current.scrollTo({
              left: 0,
              behavior: "smooth", // Instantly jump back without smooth transition
            });
          } else {
            // Scroll forward smoothly
            carouselRef.current.scrollBy({
              left: scrollAmount,
              behavior: "smooth", // Smooth scroll to the next image
            });
          }
        }
      }, 3000); // Scroll every 3 seconds

      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, []);

  return (
    <div
      ref={carouselRef}
      className="md:h-[50vh] md:w-[85vw] flex overflow-x-auto snap-x snap-mandatory sm:h-[30vh] h-[20vh] cursor-pointer rounded-2xl w-[97%] sm:w-[100vw] bg-slate-300 mt-6 no-scrollbar"
      onClick={() => window.location.href = 'https://amzn.to/3BOGWAw'}
    >
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/Primefridayphase4/headers/prime-friday_product-man_eng.jpg"
        alt="Banner 1"
        className="h-full w-full flex-shrink-0 snap-start mx-2"
      />
      <img
        src="banner.png"
        alt="Banner 2"
        className="h-full w-full flex-shrink-0 snap-start mx-2"
      />
      <img
        src="https://static-assets.business.amazon.com/assets/in/10th-jan/WbsiteCreatives_2880_960_1601.jpg.transform/2880x960/image.jpg"
        alt="Banner 1"
        className="h-full w-full flex-shrink-0 snap-start mx-2"
      />
  
    </div>
  );
};

function Banner() {
  return (
    <div className="flex justify-center h-auto">
      <ImageCarousel />
    </div>
  );
}

export default Banner;
