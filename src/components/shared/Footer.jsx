import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Stay Updated Section */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <h3 className="text-2xl md:text-3xl font-light">
              Stay updated with <span className="font-semibold">Rise news</span>
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your Email Address"
                className="bg-transparent border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#ff3366] transition-all duration-300 w-full sm:w-80"
              />
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-[#ff3366] hover:text-white transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links Grid - Exact as image */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            {/* No sub-items shown in image */}
          </div>

          {/* Work */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Work</h4>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">About</h4>
          </div>

          {/* Culture */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Culture</h4>
          </div>

          {/* Meet The Risers */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Meet The Risers</h4>
          </div>

          {/* Testimonials */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Testimonials</h4>
          </div>

          {/* Blog */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Blog</h4>
          </div>

          {/* Webinars */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Webinars</h4>
          </div>

          {/* Careers */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Careers</h4>
          </div>

          {/* Sheffield */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Sheffield</h4>
          </div>

          {/* Manchester */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Manchester</h4>
          </div>

          {/* London */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">London</h4>
          </div>

          {/* New York */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">New York</h4>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Contact</h4>
          </div>
        </div>

        {/* Bottom Section - Exactly as image */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <div>
              <span className="text-xl font-semibold tracking-tight text-white">
                Rise at Seven<sup>®</sup>
              </span>
            </div>
            
            <div className="text-center">
              © 2025 Rise at Seven Ltd. All rights reserved. • Company Number 11955187 • VAT Registered GB 322402945 • 
              <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> • 
              <a href="#" className="hover:text-white transition-colors ml-1">Terms & conditions</a>
            </div>
            
            <div>
              <a href="#" className="hover:text-white transition-colors">Website MadeByShape</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;