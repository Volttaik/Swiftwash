import { ShoppingCart, Search } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function Header({ cartCount, onCartClick, searchTerm, onSearchChange }: HeaderProps) {
  return (
    <header className="bg-green-600 text-white sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6 mb-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-white text-green-600 p-2 rounded-lg font-bold">SW</div>
            <h1 className="text-2xl font-bold">Swift wash</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-green-700 rounded-lg transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-900 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-green-700 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-8 py-2 text-sm">
          <a href="#" className="hover:text-green-100 transition-colors">
            Laundry
          </a>
          <a href="#" className="hover:text-green-100 transition-colors">
            Kitchen
          </a>
          <a href="#" className="hover:text-green-100 transition-colors">
            Bathroom
          </a>
          <a href="#" className="hover:text-green-100 transition-colors">
            All Cleaning
          </a>
        </div>
      </nav>
    </header>
  );
}
