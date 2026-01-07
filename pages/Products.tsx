import React from 'react';
import { Smartphone, Laptop, Tv, Headphones, Wrench, Shield, CheckCircle2 } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../constants';

export const Products: React.FC = () => {
  // Icons for product categories
  const categoryIcons: { [key: string]: React.ReactNode } = {
    mobile: <Smartphone size={48} className="text-primary" />,
    it: <Laptop size={48} className="text-primary" />,
    appliances: <Tv size={48} className="text-primary" />,
    accessories: <Headphones size={48} className="text-primary" />,
  };

  return (
    <div className="animate-fadeIn pt-20">

      {/* Page Header */}
      <div className="bg-darkGray py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">OUR <span className="text-primary">PRODUCTS</span></h1>
          <p className="text-white max-w-2xl mx-auto text-lg">
            Genuine mobile phones, laptops, home appliances, and accessories from 30+ international brands you trust.
          </p>
        </div>
      </div>

      {/* Product Categories */}
      {PRODUCT_CATEGORIES.map((category, idx) => (
        <section
          key={category.id}
          className={`py-12 md:py-16 ${idx % 2 === 0 ? 'bg-white' : 'bg-lightGray'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={idx % 2 !== 0 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  {categoryIcons[category.id]}
                  <h2 className="text-4xl font-heading font-bold text-black">{category.title.toUpperCase()}</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Brands */}
                <div className="mb-6">
                  <h4 className="font-bold text-sm uppercase text-black mb-3">Brands We Carry:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.brands.map((brand, i) => (
                      <span key={i} className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-sm">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Items */}
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] text-primary mr-2 shrink-0">
                        <circle cx="12" cy="12" r="10" fill="black" stroke="currentColor" strokeWidth="2"/>
                        <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category Image */}
              <div className={idx % 2 !== 0 ? 'md:order-1' : ''}>
                <div className="relative rounded-sm shadow-lg w-full bg-black flex items-center justify-center group overflow-hidden">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-center py-20">
                      {categoryIcons[category.id]}
                      <span className="block text-gray-400 text-sm mt-2">{category.title}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-darkGray text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">OUR <span className="text-primary">SERVICES</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              More than just products. We're here to help you get the most out of your purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-black p-8 rounded-sm border border-gray-800 hover:border-primary transition-all text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-white">Installation Services</h3>
              <p className="text-gray-400 text-sm">
                Need help setting things up? Our team provides installation services for electronic and IT equipment, so you can enjoy your new products without the hassle.
              </p>
            </div>

            <div className="bg-black p-8 rounded-sm border border-gray-800 hover:border-primary transition-all text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-white">After-Sales Support</h3>
              <p className="text-gray-400 text-sm">
                Your purchase is just the beginning. We're here for installation and support whenever you need assistance with your products.
              </p>
            </div>

            <div className="bg-black p-8 rounded-sm border border-gray-800 hover:border-primary transition-all text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-white">Repairs & Technical Help</h3>
              <p className="text-gray-400 text-sm">
                Our expanding technical team handles repairs, installations, and after-sales requests to take care of you after your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl font-heading font-bold text-black mb-4">BRANDS WE <span className="text-primary">CARRY</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We stock only brand-new products from leading international names you trust.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Apple", "Samsung", "Vivo", "Oppo", "Realme", "Redmi",
                "Infinix", "Acer", "Dell", "MSI", "Sharp", "LG",
                "Panasonic", "Remax", "Onikuma", "Tecno", "Xiaomi", "Lenovo"
              ].map((brand, i) => (
                <div
                  key={i}
                  className="bg-lightGray p-4 rounded-sm text-center hover:bg-primary hover:text-black transition-all cursor-default border border-gray-200"
                >
                  <span className="font-bold text-sm">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">FIND THE RIGHT PRODUCT FOR YOU</h2>
          <p className="text-black/80 text-xl mb-6 max-w-2xl mx-auto font-medium">
            Our team is here to help you find the right product for your needs and budget. Visit us today!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-black text-white px-4 py-2 rounded-sm font-bold">30+ International Brands</span>
            <span className="bg-black text-white px-4 py-2 rounded-sm font-bold">Thousands of Products</span>
            <span className="bg-black text-white px-4 py-2 rounded-sm font-bold">100% Genuine</span>
            <span className="bg-black text-white px-4 py-2 rounded-sm font-bold">Expert Assistance</span>
          </div>
        </div>
      </section>
    </div>
  );
};
