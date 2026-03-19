export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-600 text-white p-2 rounded-lg font-bold">SW</div>
              <h3 className="text-white font-bold text-lg">Swift wash</h3>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted online store for premium cleaning and washing products.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">Laundry</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Kitchen</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Bathroom</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">All Products</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              © 2026 Swift wash. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
