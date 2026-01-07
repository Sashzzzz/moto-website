import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';
import { STORES } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-black py-4 border-b-4 border-primary shadow-lg">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group gap-3">
          <div className="w-12 h-12 relative">
             <img src="/assets/logo.png" alt="MoTo Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-heading font-bold text-xl leading-none uppercase tracking-wide text-white">
              MoTo
            </span>
            <span className="text-[10px] tracking-widest uppercase text-primary font-bold">Mobile, IT & Electronics</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-wide transition-colors duration-300 relative group ${location.pathname === link.path ? 'text-primary' : 'text-white hover:text-primary'}`}
            >
              {link.label}
              <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
          <Link to="/contact">
            <Button className="ml-4 py-2 px-6 text-xs">Contact Us</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-heading font-bold uppercase tracking-wider ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="mt-4">
            <Button>Contact Us</Button>
          </Link>
          <div className="mt-8 flex items-center text-white">
            <Phone size={16} className="mr-2" />
            <span>{STORES[0].phone}</span>
          </div>
        </nav>
      </div>
    </header>
  );
};
