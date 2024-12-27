import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { ContactForm } from '../components/contacts/ContactForm';

export function Contacts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-playfair font-bold mb-8">Контакты</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Наш адрес</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-600 mt-1" />
                <div>
                  <p className="font-medium">Москва, ул. Пушкина, д. 10</p>
                  <p className="text-gray-600">м. Пушкинская</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-pink-600 mt-1" />
                <div>
                  <p className="font-medium">Часы работы</p>
                  <p className="text-gray-600">Пн-Вс: 9:00 - 21:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-pink-600 mt-1" />
                <div>
                  <p className="font-medium">Телефон</p>
                  <a href="tel:+74951234567" className="text-gray-600 hover:text-pink-600">
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-pink-600 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@sweetdreams.ru" className="text-gray-600 hover:text-pink-600">
                    info@sweetdreams.ru
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Карта</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.397087990802!2d37.60351431593!3d55.76538998055641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0KLQstC10YDRgdC60LDRjyDRg9C7LiwgMTAsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMjcwMDY!5e0!3m2!1sru!2s!4v1635000000000!5m2!1sru!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Напишите нам</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}