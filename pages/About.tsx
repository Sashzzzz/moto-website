import React from 'react';
import { Target, Eye, CheckCircle2, Users, Award, TrendingUp } from 'lucide-react';
import { LEADERSHIP, VALUES, PROMISES, MISSION, VISION } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="animate-fadeIn pt-20">

      {/* Page Header */}
      <div className="bg-darkGray py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">ABOUT <span className="text-primary">US</span></h1>
          <p className="text-white max-w-2xl mx-auto text-lg">
            One of Myanmar's trusted names in electronics retail. Built on a simple promise: genuine products, fair prices, and service you can count on.
          </p>
        </div>
      </div>

      {/* Company Overview - Who We Are */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
             {/* Desktop image - hidden on mobile */}
             <div className="relative group hidden md:block">
               <img
                 src="/Images/About/storeimageabout.webp"
                 alt="MoTo Store Interior"
                 className="w-full rounded-sm shadow-lg transition-transform duration-700 group-hover:scale-105"
               />
             </div>
             <div>
               <h2 className="text-4xl font-heading font-bold text-black mb-4">WHO WE <span className="text-primary">ARE</span></h2>
               <h3 className="text-xl font-bold mb-4 md:mb-6 uppercase text-black">YOUR ONE-STOP ELECTRONICS DESTINATION</h3>
               {/* Mobile image - shown only on mobile, after title/subtitle */}
               <div className="md:hidden mb-6">
                 <img
                   src="/Images/About/storeimageabout.webp"
                   alt="MoTo Store Interior"
                   className="w-full rounded-sm shadow-lg"
                 />
               </div>
               <p className="text-gray-600 mb-4 leading-relaxed">
                 MoTo Company Limited is one of Myanmar's trusted names in electronics retail. Based in Aungban Town, we've built our reputation on a simple promise: genuine products, fair prices, and service you can count on.
               </p>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 We stock only brand-new products from leading names like Apple, Samsung, Vivo, Oppo, Realme, Redmi, Infinix, Acer, Dell, MSI, Sharp, Remax, and more. And when you need help setting things up, we offer installation services for electronic and IT equipment.
               </p>
               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-black p-4 rounded-sm border-l-4 border-primary">
                   <span className="block font-bold text-2xl text-white">10+</span>
                   <span className="text-xs uppercase text-gray-400">Years in Business</span>
                 </div>
                 <div className="bg-black p-4 rounded-sm border-l-4 border-primary">
                   <span className="block font-bold text-2xl text-white">50+</span>
                   <span className="text-xs uppercase text-gray-400">Team Members</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-black mb-8">OUR <span className="text-primary">STORY</span></h2>
            <div className="text-left space-y-6 text-gray-600 leading-relaxed">
              <p>
                In 2015, MoTo Company Limited opened its doors in Aungban Town with one goal: give customers a place they could trust for genuine electronics. From day one, we focused on authentic products, honest prices, and building trust through reliable service.
              </p>
              <p>
                Word spread. Customers kept coming back and bringing their friends and family. By 2022, demand had grown beyond what one location could handle, and in July of that year, we proudly opened our second store.
              </p>
              <p>
                Today, we celebrate 10 years in business. What began as a single shop has grown into a team of 50+ dedicated staff across two locations, all committed to the same values we started with.
              </p>
            </div>
            {/* Timeline */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-sm shadow-md border-t-4 border-primary">
                <h3 className="text-3xl font-heading font-bold text-black mb-2">2015</h3>
                <p className="text-gray-600 text-sm">Founded in Aungban Town with a single store</p>
              </div>
              <div className="bg-white p-6 rounded-sm shadow-md border-t-4 border-primary">
                <h3 className="text-3xl font-heading font-bold text-black mb-2">2022</h3>
                <p className="text-gray-600 text-sm">Opened second store due to growing demand</p>
              </div>
              <div className="bg-white p-6 rounded-sm shadow-md border-t-4 border-primary">
                <h3 className="text-3xl font-heading font-bold text-black mb-2">2025</h3>
                <p className="text-gray-600 text-sm">Celebrating 10 years with 50+ team members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-16 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-sm border-l-4 border-primary hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6">
                <Eye className="text-black" size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-white">OUR VISION</h3>
              <p className="text-gray-300 leading-relaxed">
                {VISION}
              </p>
            </div>
            <div className="bg-black p-8 rounded-sm border-l-4 border-primary hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6">
                <Target className="text-black" size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-white">OUR MISSION</h3>
              <p className="text-gray-300 leading-relaxed">
                {MISSION}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl font-heading font-bold text-black mb-4">OUR <span className="text-primary">VALUES</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {VALUES.map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-sm shadow-md border-l-4 border-primary hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary shrink-0 mt-1 mr-3">
                    <circle cx="12" cy="12" r="10" fill="black" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2 text-black">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl font-heading font-bold text-black mb-4">OUR <span className="text-primary">PROMISE</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">What you can always expect from MoTo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PROMISES.map((promise, idx) => (
              <div key={idx} className="bg-black p-6 rounded-sm border border-gray-800 hover:border-primary transition-all">
                <h3 className="font-heading font-bold text-lg mb-2 text-primary">{promise.title}</h3>
                <p className="text-gray-300 text-sm">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 md:py-16 bg-darkGray text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">OUR <span className="text-primary">LEADERSHIP</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The vision and dedication behind MoTo's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {LEADERSHIP.map((member, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative w-full aspect-square bg-black border-4 border-primary rounded-sm mb-6 overflow-hidden max-w-xs mx-auto">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-700">
                      <Users size={64} className="text-gray-500" />
                    </div>
                  )}
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="text-primary text-xs font-bold uppercase tracking-wider bg-black/80 py-1 px-2 rounded inline-block">{member.role}</p>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-white">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-black mb-4">OUR <span className="text-primary">TEAM</span></h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Behind MoTo's success is a team of 50+ dedicated staff across two locations. From sales and customer support to technical installation services, our people are the reason customers keep coming back.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Every team member is trained to understand the products we sell, from smartphones and laptops to home appliances. Whether you need help choosing the right phone for your budget, setting up a new laptop, or installing electronic equipment, our staff are ready to guide you.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe great service starts with great people. That's why we invest in our team, making sure they have the knowledge and skills to serve you better every day.
              </p>
            </div>
            {/* Team images */}
            <div className="grid grid-cols-2 gap-x-4">
              <div className="rounded-sm shadow-md w-full h-48 overflow-hidden">
                <img
                  src="/Images/About/team1.webp"
                  alt="MoTo Team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-sm shadow-md w-full h-48 overflow-hidden">
                <img
                  src="/Images/About/team2.webp"
                  alt="MoTo Team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-sm shadow-md w-full h-[296px] overflow-hidden col-span-2 -mt-2">
                <img
                  src="/Images/About/award.webp"
                  alt="MoTo Award Ceremony"
                  className="w-full h-full object-cover object-[center_0%] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
