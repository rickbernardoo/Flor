import React from 'react';
import { Flower2, Phone, ShoppingCart, Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  cart: number[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cart, 
  searchTerm, 
  setSearchTerm, 
  isMenuOpen, 
  setIsMenuOpen 
}) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="py-2 border-b border-pink-100 flex justify-between items-center">
          <div className="flex items-center text-pink-800">
            <Phone size={16} className="mr-2" />
            <span className="text-sm">WhatsApp: (74) 98835-6980</span>
          </div>
          <div className="text-sm text-pink-800">
            <span>dea.ec@gmail.com</span>
          </div>
        </div>
        
        {/* Main header */}
        <div className="py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Flower2 className="text-pink-600 mr-2" size={32} />
            <h1 className="text-2xl font-bold text-pink-800">Andreia Flores</h1>
          </div>
          
          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex items-center relative flex-grow mx-8">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full py-2 px-4 pr-10 rounded-full border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 text-pink-400" size={20} />
          </div>
          
          {/* Cart and mobile menu */}
          <div className="flex items-center">
            <div className="relative mr-4">
              <ShoppingCart className="text-pink-700" size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-pink-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:block py-3 border-t border-pink-100">
          <ul className="flex space-x-8 justify-center">
            <li><a href="#" className="text-pink-800 hover:text-pink-600 font-medium">Início</a></li>
            <li><a href="#" className="text-pink-800 hover:text-pink-600 font-medium">Produtos</a></li>
            <li><a href="#" className="text-pink-800 hover:text-pink-600 font-medium">Ocasiões</a></li>
            <li><a href="#" className="text-pink-800 hover:text-pink-600 font-medium">Sobre Nós</a></li>
            <li><a href="#" className="text-pink-800 hover:text-pink-600 font-medium">Contato</a></li>
          </ul>
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-100">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full py-2 px-4 pr-10 rounded-full border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <ul className="space-y-3">
              <li><a href="#" className="block text-pink-800 hover:text-pink-600 font-medium">Início</a></li>
              <li><a href="#" className="block text-pink-800 hover:text-pink-600 font-medium">Produtos</a></li>
              <li><a href="#" className="block text-pink-800 hover:text-pink-600 font-medium">Ocasiões</a></li>
              <li><a href="#" className="block text-pink-800 hover:text-pink-600 font-medium">Sobre Nós</a></li>
              <li><a href="#" className="block text-pink-800 hover:text-pink-600 font-medium">Contato</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;