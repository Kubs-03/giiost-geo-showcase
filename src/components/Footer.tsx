import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-grey-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              GIIOST
            </div>
            <p className="text-grey-300 leading-relaxed">
              Leading geospatial solutions provider with 25+ years of expertise in 
              surveying, mapping, and advanced analytics for diverse industries.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-grey-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-grey-400 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-grey-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Column 2 - Page Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Page Links</h3>
            <ul className="space-y-2">
              <li><a href="#company" className="text-grey-300 hover:text-primary transition-colors">Company</a></li>
              <li><a href="#sectors" className="text-grey-300 hover:text-primary transition-colors">Sectors</a></li>
              <li><a href="#services" className="text-grey-300 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#careers" className="text-grey-300 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#news" className="text-grey-300 hover:text-primary transition-colors">News & Insights</a></li>
              <li><a href="#contact" className="text-grey-300 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#privacy" className="text-grey-300 hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3 - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
            <p className="text-grey-300 mb-4">
              Stay updated with the latest industry insights and GIIOST innovations.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-grey-800 border border-grey-700 rounded-md text-white placeholder-grey-400 focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 text-white">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Our Office</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-grey-300">
                    123 Geospatial Park <br />
                    Visakhapatnam, Andhra Pradesh 530001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-grey-300">+91 97009****</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-grey-300">info@giiost.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-grey-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-grey-400 text-sm mb-4 md:mb-0">
              © 2025 GIIOST. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#terms" className="text-grey-400 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#privacy" className="text-grey-400 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#cookies" className="text-grey-400 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-gradient-primary text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-opacity z-50"
        aria-label="Scroll to top"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
