import React, { useState } from 'react';
import { Flower2, Phone, Clock, MapPin, ShoppingCart, Search, Menu, X, Instagram, Facebook, Heart } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import Banner from './components/Banner';
import CategoryFilter from './components/CategoryFilter';

function App() {
  const [cart, setCart] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <Header 
        cart={cart} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main className="flex-grow">
        <Banner />
        
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-pink-800 mb-4 md:mb-0">Nossos Produtos</h2>
            <CategoryFilter 
              categories={categories} 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={() => addToCart(product.id)} 
              />
            ))}
          </div>
        </section>
        
        <section className="bg-pink-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-pink-800 text-center mb-8">Por que escolher Andreia Flores?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flower2 className="text-pink-700" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-pink-800 mb-2">Flores Frescas</h3>
                <p className="text-gray-600">Trabalhamos apenas com flores frescas e de alta qualidade para garantir a beleza e durabilidade dos nossos arranjos.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-pink-700" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-pink-800 mb-2">Entrega Rápida</h3>
                <p className="text-gray-600">Entregamos em toda a cidade com agilidade e cuidado para que suas flores cheguem perfeitas ao destino.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-pink-700" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-pink-800 mb-2">Arranjos Exclusivos</h3>
                <p className="text-gray-600">Criamos arranjos personalizados para todas as ocasiões, com o carinho e dedicação que você merece.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;