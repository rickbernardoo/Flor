import React from 'react';
import { Flower2, Phone, Clock, MapPin, Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Flower2 className="mr-2" size={24} />
              <h3 className="text-xl font-bold">Andreia Flores</h3>
            </div>
            <p className="text-pink-100 mb-4">
              Trazendo beleza e alegria através das mais belas flores desde 2010. 
              Arranjos exclusivos para todas as ocasiões.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pink-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-pink-200">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-pink-100">
              <li className="flex items-start">
                <Phone className="mr-2 mt-1 flex-shrink-0" size={16} />
                <span>(74) 98835-6980</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 mt-1 flex-shrink-0" size={16} />
                <span>dea.ec@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={16} />
                <span>AV. Joel Modesto - Centro</span>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2 text-pink-100">
              <li className="flex items-start">
                <Clock className="mr-2 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p>Segunda a Quinta</p>
                  <p>8:30 - 12:00 | 14:00 - 17:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p>Sexta</p>
                  <p>8:30 - 17:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p>Sábado</p>
                  <p>8:30 - 12:00</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-pink-100">
              <li><a href="#" className="hover:text-white">Início</a></li>
              <li><a href="#" className="hover:text-white">Produtos</a></li>
              <li><a href="#" className="hover:text-white">Ocasiões</a></li>
              <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white">Contato</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-pink-900 py-4">
        <div className="container mx-auto px-4 text-center text-pink-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Andreia Flores. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;