const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-2xl p-4 shadow-md flex flex-col items-center bg-white hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.title}
        className="h-40 object-contain mb-4"
        loading="lazy"
      />
      <h2 className="text-center font-semibold text-lg mb-1">{product.title}</h2>
      <div className="text-center text-green-600 font-bold">{product.price}</div>
      <div className="text-sm line-through text-gray-500">{product.mrp}</div>
      <div className="text-red-500 text-sm font-semibold">{product.discount}</div>
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded-lg transition-colors"
      >
        Buy Now
      </a>
    </div>
  );
};

export default ProductCard;
