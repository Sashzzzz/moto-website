import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Smartphone, Laptop, Tv, Headphones } from 'lucide-react';
import { Button } from '../components/Button';
import { COMPANY_INFO, STORES, PRODUCT_CATEGORIES, STATS } from '../constants';

// Hero carousel slides - each slide has 4 images in a 2x2 grid
const HERO_CAROUSEL_SLIDES = [
  {
    id: 1,
    label: 'iPhones',
    images: [
      { src: '/assets/carousel/phones/iphone1.png', alt: 'iPhone Model 1' },
      { src: '/assets/carousel/phones/iphone2.png', alt: 'iPhone Model 2' },
      { src: '/assets/carousel/phones/iphone3.png', alt: 'iPhone Model 3' },
      { src: '/assets/carousel/phones/iphone4.png', alt: 'iPhone Model 4' },
    ]
  },
  {
    id: 2,
    label: 'MacBooks',
    images: [
      { src: '/assets/carousel/macbooks/macbook1.png', alt: 'MacBook Model 1' },
      { src: '/assets/carousel/macbooks/macbook2.png', alt: 'MacBook Model 2' },
      { src: '/assets/carousel/macbooks/macbook3.png', alt: 'MacBook Model 3' },
      { src: '/assets/carousel/macbooks/macbook4.png', alt: 'MacBook Model 4' },
    ]
  },
  {
    id: 3,
    label: 'iPads',
    images: [
      { src: '/assets/carousel/ipads/ipad1.png', alt: 'iPad Model 1' },
      { src: '/assets/carousel/ipads/ipad2.png', alt: 'iPad Model 2' },
      { src: '/assets/carousel/ipads/ipad3.png', alt: 'iPad Model 3' },
      { src: '/assets/carousel/ipads/ipad4.png', alt: 'iPad Model 4' },
    ]
  },
  {
    id: 4,
    label: 'Accessories',
    images: [
      { src: '/assets/carousel/watchespods/watch1.png', alt: 'Apple Watch 1' },
      { src: '/assets/carousel/watchespods/watch2.png', alt: 'Apple Watch 2' },
      { src: '/assets/carousel/watchespods/pod1.png', alt: 'AirPods 1' },
      { src: '/assets/carousel/watchespods/pod2.png', alt: 'AirPods 2' },
    ]
  },
];

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate carousel every 4 seconds
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_CAROUSEL_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Icons for product categories
  const categoryIcons: { [key: string]: React.ReactNode } = {
    mobile: <Smartphone size={32} className="text-primary" />,
    it: <Laptop size={32} className="text-primary" />,
    appliances: <Tv size={32} className="text-primary" />,
    accessories: <Headphones size={32} className="text-primary" />,
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-darkGray pt-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-4 animate-slideInLeft">
                <div className="h-[2px] w-8 md:w-12 bg-primary shrink-0 shadow-sm"></div>
                <span className="text-primary font-bold tracking-widest uppercase text-lg sm:text-xl md:text-2xl whitespace-nowrap">Welcome to MoTo</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                YOUR TRUSTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200 filter brightness-110">ELECTRONICS</span><br />
                PARTNER
              </h1>
              <p className="text-white text-lg mb-10 max-w-xl leading-relaxed font-light">
                Genuine iPhones, MacBooks, Windows laptops, Android phones, and home electronics from the brands you trust. Serving Myanmar since 2015.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link to="/products">
                  <Button variant="primary" className="w-full max-w-[200px] sm:w-auto sm:max-w-none shadow-lg">View Products</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full max-w-[200px] sm:w-auto sm:max-w-none shadow-lg">Visit Our Stores</Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Image Carousel */}
            <div
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative w-full max-w-[500px] lg:max-w-[550px]">
                {/* Carousel Container */}
                <div className="relative aspect-square rounded-sm overflow-hidden bg-gradient-to-br from-darkGray to-black border-2 border-primary shadow-2xl p-4">
                  {/* Slides */}
                  {HERO_CAROUSEL_SLIDES.map((slide, slideIndex) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-4 transition-all duration-700 ease-in-out ${
                        slideIndex === currentSlide
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-95'
                      }`}
                    >
                      {/* 2x2 Grid */}
                      <div className="grid grid-cols-2 gap-3 h-full">
                        {slide.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="relative bg-black/30 rounded-sm overflow-hidden flex items-center justify-center group"
                          >
                            {image.src ? (
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                              />
                            ) : (
                              /* Placeholder for missing images */
                              <div className="flex flex-col items-center justify-center text-center p-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                                  {slideIndex === 0 && <Smartphone size={24} className="text-primary" />}
                                  {slideIndex === 1 && <Laptop size={24} className="text-primary" />}
                                  {slideIndex === 2 && <Tv size={24} className="text-primary" />}
                                  {slideIndex === 3 && <Headphones size={24} className="text-primary" />}
                                </div>
                                <span className="text-gray-500 text-xs">{image.alt}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Label Badge */}
                  <div className="absolute bottom-6 left-6 bg-primary px-4 py-2 rounded-sm z-10">
                    <span className="font-bold text-black text-sm uppercase tracking-wide">
                      {HERO_CAROUSEL_SLIDES[currentSlide].label}
                    </span>
                  </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {HERO_CAROUSEL_SLIDES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-primary w-8'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section className="bg-primary py-8 relative z-20 -mt-4 mx-4 rounded-sm shadow-lg md:mx-12 lg:mx-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-black/10">
            {STATS.map((stat, idx) => (
              <div key={idx}>
                <h3 className="text-3xl font-heading font-bold text-black">{stat.value}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-black/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-black mb-4">OUR <span className="text-primary">PRODUCTS</span></h2>
            <p className="text-gray-600">Your one-stop destination for mobile phones, laptops, home appliances, and accessories from leading international brands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCT_CATEGORIES.map((category) => (
              <Link
                to="/products"
                key={category.id}
                className="bg-black rounded-sm shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-800 block"
              >
                {/* Category Image */}
                <div className="relative overflow-hidden h-48 bg-darkGray flex items-center justify-center">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    categoryIcons[category.id]
                  )}
                </div>

                <div className="p-6 bg-black">
                  <h3 className="text-xl font-heading font-bold mb-2 text-white group-hover:text-primary transition-colors">{category.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{category.description}</p>
                  <div className="border-t border-gray-800 pt-4">
                    <div className="flex items-center text-sm font-bold text-primary uppercase tracking-wide">
                      Explore <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-darkGray text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-6">WHY CHOOSE <span className="text-primary">MOTO?</span></h2>
            <p className="text-white mb-10 text-lg leading-relaxed">
              We've built our reputation on a simple promise: genuine products, fair prices, and service you can count on. 10 years of trust, 50+ dedicated staff, and thousands of satisfied customers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full text-left">
              {[
                "100% Genuine Products",
                "Fair & Transparent Pricing",
                "Expert Team of 50+",
                "After-Sales Support",
                "Installation Services",
                "10 Years of Trust"
              ].map((item, i) => (
                <div key={i} className="flex items-center bg-black p-4 rounded-sm border border-primary">
                  <CheckCircle2 className="text-primary mr-3 shrink-0" size={24} />
                  <span className="font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="mt-12">
              <Button variant="primary">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Snippet */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Store Image */}
            <div className="relative group">
              <img
                src="/Images/Home/storeimagehome.webp"
                alt="MoTo Store"
                className="w-full rounded-sm shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold text-black mb-4">OUR <span className="text-primary">STORY</span></h2>
              <h3 className="text-xl font-bold mb-6 uppercase text-black">10 YEARS OF TRUST SINCE 2015</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                In 2015, MoTo Company Limited opened its doors in Aungban Town with one goal: give customers a place they could trust for genuine electronics. From day one, we focused on authentic products, honest prices, and building trust through reliable service.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Word spread. Customers kept coming back and bringing their friends and family. By 2022, demand had grown beyond what one location could handle, and we proudly opened our second store.
              </p>
              <Link to="/about">
                <Button variant="dark">Read Our Full Story</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">VISIT OUR STORES TODAY</h2>
          <p className="text-black/80 text-xl mb-10 max-w-2xl mx-auto font-medium">
            Come in, say hello, and let us help you find what you need. Two locations in Aungban Town ready to serve you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contact">
              <Button variant="dark" className="w-auto">Find Our Stores</Button>
            </Link>
            <Button variant="dark" className="w-auto cursor-default">
              Call {STORES[0].phone}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
