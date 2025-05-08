// pages/index.js
import React, { useState, useEffect } from "react";
import Head from 'next/head';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold text-blue-700">SMART SHOPPER DEAL</div>
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <nav className="bg-blue-800 text-white">
        <ul className="flex flex-wrap px-4 py-2 space-x-6 text-sm font-medium">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#disclosures" className="hover:underline">Affiliate Disclosures</a></li>
          <li><a href="#terms" className="hover:underline">Terms and Conditions</a></li>
          <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#amazon" className="hover:underline">Amazon Affiliate Agreement</a></li>
          <li><a href="#contact" className="hover:underline">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

const ProductCard = ({ product }) => (
  <div className="border rounded-2xl p-4 shadow-md flex flex-col items-center bg-white">
    <img src={product.image} alt={`Image of ${product.title}`} className="h-40 object-contain mb-4" />
    <h2 className="text-center font-semibold text-lg mb-1">{product.title}</h2>
    <div className="text-center text-green-600 font-bold">{product.price}</div>
    <div className="text-sm line-through text-gray-500">{product.mrp}</div>
    <div className="text-red-500 text-sm font-semibold">{product.discount}</div>
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 bg-yellow-400 text-black font-semibold py-1 px-4 rounded-lg"
    >
      Buy Now
    </a>
  </div>
);

export default function Home({ products }) {
  const [visible, setVisible] = useState(4);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 50 >=
      document.documentElement.offsetHeight
    ) {
      setVisible((prev) => Math.min(prev + 4, products.length));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Smart Shopper Deal - Best Discounts on Amazon Products</title>
        <meta name="description" content="Find the best deals and discounts on Amazon products" />
      </Head>

      <Header />

      <section id="home" className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, visible).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <footer className="bg-black text-white mt-10 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div id="disclosures">
            <h2 className="font-bold mb-2">Affiliate Disclosures</h2>
            <p className="text-sm">
              SmartShopperDeal is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program to earn fees by linking to amazon.in.
            </p>
          </div>

          <div id="terms">
            <h2 className="font-bold mb-2">Terms and Conditions</h2>
            <p className="text-sm">
              By using SmartShopperDeal, you agree to our terms and understand we share affiliate links.
            </p>
          </div>

          <div id="privacy">
            <h2 className="font-bold mb-2">Privacy Policy</h2>
            <p className="text-sm">
              We respect your privacy. Read our full policy for more details.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
          <div id="amazon">
            <h2 className="font-bold mb-2">Amazon Affiliate Agreement</h2>
            <p className="text-sm">
              This site uses Amazon affiliate links to earn commissions.
            </p>
          </div>

          <div id="contact">
            <h2 className="font-bold mb-2">Contact Us</h2>
            <p className="text-sm">
              For any queries, email us at support@smartshopperdeal.in
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} SmartShopperDeal — All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL || ''}/products.json`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
