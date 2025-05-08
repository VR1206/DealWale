const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 mt-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section id="disclosures">
            <h2 className="font-bold mb-2">Affiliate Disclosure</h2>
            <p className="text-sm">
              We participate in Amazon's affiliate program, earning fees on qualifying purchases.
            </p>
          </section>
          <section id="terms">
            <h2 className="font-bold mb-2">Terms</h2>
            <p className="text-sm">
              By using our site, you agree to our terms of service.
            </p>
          </section>
          <section id="privacy">
            <h2 className="font-bold mb-2">Privacy</h2>
            <p className="text-sm">
              Your privacy is important to us. Read our policy for details.
            </p>
          </section>
        </div>
        
        <section id="contact" className="pt-4 border-t border-gray-700">
          <h2 className="font-bold mb-2">Contact Us</h2>
          <p className="text-sm">Email: support@smartshopperdeal.in</p>
        </section>
        
        <div className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Smart Shopper Deal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
