const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold text-blue-700">SMART SHOPPER DEAL</div>
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <nav className="bg-blue-800 text-white">
        <ul className="flex flex-wrap px-4 py-2 space-x-6 text-sm font-medium">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#disclosures" className="hover:underline">Disclosures</a></li>
          <li><a href="#terms" className="hover:underline">Terms</a></li>
          <li><a href="#privacy" className="hover:underline">Privacy</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
