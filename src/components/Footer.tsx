import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-pink-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Сладкие Мечты</h3>
            <p className="text-gray-600">
              Создаем незабываемые десерты для ваших особенных моментов
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+74951234567" className="hover:text-pink-600">
                  +7 (495) 123-45-67
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@sweetdreams.ru" className="hover:text-pink-600">
                  info@sweetdreams.ru
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>© 2024 Сладкие Мечты. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}