import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  addToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
        <button className="absolute top-2 left-2 bg-white p-1.5 rounded-full text-pink-500 hover:text-pink-700 transition-colors">
          <Heart size={18} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="text-xs text-pink-500 font-medium mb-1">{product.category}</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex-1">
            {product.discount > 0 ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-pink-600">
                  R$ {(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  R$ {product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-pink-600">
                R$ {product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        
        <button 
          onClick={addToCart}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors"
        >
          <ShoppingCart size={18} className="mr-2" />
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;