import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook } from 'lucide-react';
import { COMPANY_INFO, STORES, PRODUCT_CATEGORIES } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white border-t-4 border-primary">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr] gap-8">

          {/* Brand Column */}
          <div className="-mt-1">
            <div className="flex items-center mb-5 gap-3">
              <div className="w-8 h-8 relative">
                 <img src="/assets/logo.png" alt="MoTo Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-bold text-xl uppercase leading-none mt-1 tracking-wide">MoTo</span>
            </div>
            <p className="text-white text-sm mb-6 leading-relaxed">
              {COMPANY_INFO.tagline}. Genuine iPhones, MacBooks, Windows laptops, Android phones, and home electronics from the brands you trust.
            </p>
            <div className="flex gap-4">
              <a href={`https://${COMPANY_INFO.facebook}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-white transition-all">
                <Facebook size={18} className="text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg text-primary mb-3 md:mb-6 uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-white hover:text-primary text-sm transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-bold text-lg text-primary mb-3 md:mb-6 uppercase">Our Products</h3>
            <ul className="space-y-3">
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link to="/products" className="text-white hover:text-primary text-sm transition-colors block">
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg text-primary mb-3 md:mb-6 uppercase">Contact Us</h3>
            <ul className="space-y-4">
              {/* Store 1 */}
              <li className="flex items-start">
                <MapPin className="text-primary shrink-0 mt-1 mr-3" size={18} />
                <span className="text-white text-sm leading-relaxed">{STORES[0].address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary shrink-0 mr-3" size={18} />
                <span className="text-white text-sm">{STORES[0].phone}</span>
              </li>
              {/* Store 2 */}
              <li className="flex items-start mt-4">
                <MapPin className="text-primary shrink-0 mt-1 mr-3" size={18} />
                <span className="text-white text-sm leading-relaxed">{STORES[1].address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary shrink-0 mr-3" size={18} />
                <span className="text-white text-sm">{STORES[1].phone}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} MoTo Company Limited. <br className="block md:hidden" />All Rights Reserved.
          </p>
          <p className="text-white text-xs mt-2 md:mt-0">
            Established {COMPANY_INFO.founded} | Aungban Town, Myanmar
          </p>
        </div>
      </div>
    </footer>
  );
};
