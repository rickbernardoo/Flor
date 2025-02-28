import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative bg-pink-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4">
            Flores que encantam e emocionam
          </h1>
          <p className="text-lg text-pink-700 mb-8">
            Arranjos exclusivos para todas as ocasiões. Entregamos amor e beleza em cada detalhe.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a 
              href="#" 
              className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md text-center transition-colors"
            >
              Ver Produtos
            </a>
            <a 
              href="#" 
              className="bg-white hover:bg-pink-50 text-pink-600 font-medium py-3 px-6 rounded-md border border-pink-200 text-center transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 z-[-1] opacity-20 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" 
        }}
      ></div>
    </div>
  );
};

export default Banner;