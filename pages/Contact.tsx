import React, { useState } from 'react';
import { STORES, COMPANY_INFO } from '../constants';
import { Phone, MapPin, Clock, Send, Facebook, Store } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', inquiry: 'General Inquiry', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="animate-fadeIn pt-20">
      {/* Page Header */}
      <div className="bg-darkGray py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">CONTACT <span className="text-primary">US</span></h1>
          <p className="text-gray-300 mx-auto text-lg whitespace-nowrap">
            Visit our stores or send us a message. We're here to help you find what you need.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-8 text-black">Our Stores</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Come in, say hello, and let us help you find what you need. Our team is ready to guide you through our products and services.
              </p>

              <div className="space-y-8">
                {/* Store 1 */}
                <div className="bg-lightGray p-6 rounded-sm border-l-4 border-primary">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-sm shrink-0 mr-6">
                      <Store className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-1 text-black">{STORES[0].name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{STORES[0].address}</p>
                      <p className="text-gray-600 text-sm flex items-center">
                        <Phone size={14} className="mr-2 text-primary" />
                        <a href={`tel:${STORES[0].phone}`} className="hover:text-primary transition-colors">{STORES[0].phone}</a>
                      </p>
                      <p className="text-xs text-gray-400 mt-2">Established {STORES[0].established}</p>
                    </div>
                  </div>
                </div>

                {/* Store 2 */}
                <div className="bg-lightGray p-6 rounded-sm border-l-4 border-primary">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-sm shrink-0 mr-6">
                      <Store className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-1 text-black">{STORES[1].name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{STORES[1].address}</p>
                      <p className="text-gray-600 text-sm flex items-center">
                        <Phone size={14} className="mr-2 text-primary" />
                        <a href={`tel:${STORES[1].phone}`} className="hover:text-primary transition-colors">{STORES[1].phone}</a>
                      </p>
                      <p className="text-xs text-gray-400 mt-2">Opened {STORES[1].established}</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-lightGray p-6 rounded-sm border-l-4 border-primary">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-sm shrink-0 mr-6">
                      <Clock className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-1 text-black">Business Hours</h3>
                      <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-lightGray p-6 rounded-sm border-l-4 border-primary">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-sm shrink-0 mr-6">
                      <Facebook className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-1 text-black">Follow Us</h3>
                      <a
                        href={`https://${COMPANY_INFO.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 text-sm hover:text-primary transition-colors"
                      >
                        {COMPANY_INFO.facebook}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form - Black Card */}
            <div className="bg-black p-8 md:p-12 rounded-sm shadow-lg border-t-4 border-primary">
              <h3 className="text-2xl font-heading font-bold mb-6 text-white">Send Us a Message</h3>
              {success ? (
                <div className="bg-green-900/20 border border-green-500 text-green-400 px-4 py-3 rounded relative mb-6">
                  <strong className="font-bold">Thank you!</strong>
                  <span className="block sm:inline"> Your message has been sent. We will contact you shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2" htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-white rounded-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-white/50"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2" htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-white rounded-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-white/50"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-primary mb-2" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-white rounded-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-white/50"
                      placeholder="email@example.com (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-primary mb-2" htmlFor="inquiry">Inquiry Type</label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-white rounded-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    >
                      <option className="bg-black text-white">General Inquiry</option>
                      <option className="bg-black text-white">Mobile Phones</option>
                      <option className="bg-black text-white">Laptops & IT Products</option>
                      <option className="bg-black text-white">Home Appliances</option>
                      <option className="bg-black text-white">Accessories</option>
                      <option className="bg-black text-white">Installation Service</option>
                      <option className="bg-black text-white">After-Sales Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-primary mb-2" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-white rounded-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-white/50"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Map Embed */}
          <div className="mt-20 h-96 bg-gray-200 w-full rounded-sm overflow-hidden relative border-2 border-gray-100">
             <iframe
               src="https://maps.google.com/maps?q=Aungban+Town,+Shan+State,+Myanmar&t=&z=14&ie=UTF8&iwloc=&output=embed"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               allowFullScreen
               loading="lazy"
               title="Map Location"
             ></iframe>
             <div className="absolute bottom-4 left-4 bg-white p-4 shadow-lg rounded-sm max-w-xs hidden md:block border-l-4 border-primary">
               <p className="font-bold text-sm">MoTo Company Limited</p>
               <p className="text-xs text-gray-600">Aungban Town, Myanmar</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
