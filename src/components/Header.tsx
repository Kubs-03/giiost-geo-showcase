import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Mail, Users, Facebook, Instagram, Linkedin } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectors = [
    'Railways', 'Roads & Highways', 'Mining', 'Water Resources',
    'Archaeology', 'Urban Planning', 'Oil & Gas', 'Power & Energy'
  ];

  const services = {
    'Drone-as-a-Service': ['Aerial Survey', 'Asset Inspection', 'Progress Monitoring'],
    'Geospatial Consultancy': ['LiDAR Mapping', 'GPR Survey', 'GIS Analysis'],
    'Engineering Services': ['BIM Modeling', 'Digital Twin', 'CAD Services']
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-grey-800 text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>hr@giiost.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <a href="#careers" className="hover:text-primary transition-colors">We are Hiring</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
            <Instagram className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
            <Linkedin className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-card' : 'bg-white'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="GIIOST Logo" className="h-8 w-auto" />
              <div className="text-3xl font-bold text-black">
                GIIOST
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              
              {/* Sectors Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-foreground hover:text-primary transition-colors font-medium">
                  Sectors <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-card border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {sectors.map((sector, index) => (
                      <a key={index} href={`#${sector.toLowerCase().replace(/\s+/g, '-')}`} 
                         className="block px-4 py-2 text-sm text-foreground hover:bg-grey-50 hover:text-primary transition-colors">
                        {sector}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-foreground hover:text-primary transition-colors font-medium">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-card border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-4">
                    {Object.entries(services).map(([category, items], index) => (
                      <div key={index} className="mb-4 last:mb-0">
                        <div className="px-4 py-2 font-semibold text-primary border-b border-grey-100">
                          {category}
                        </div>
                        {items.map((item, itemIndex) => (
                          <a key={itemIndex} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                             className="block px-4 py-2 text-sm text-foreground hover:bg-grey-50 hover:text-primary transition-colors">
                            {item}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#investor" className="text-foreground hover:text-primary transition-colors font-medium">
                Investor Relations
              </a>
              <a href="#company" className="text-foreground hover:text-primary transition-colors font-medium">
                Company
              </a>
            </nav>

            {/* Contact Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-primary hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium hidden md:inline-flex">
                Contact Us
              </Button>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-grey-100">
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
                <a href="#sectors" className="text-foreground hover:text-primary transition-colors font-medium">Sectors</a>
                <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
                <a href="#investor" className="text-foreground hover:text-primary transition-colors font-medium">Investor Relations</a>
                <a href="#company" className="text-foreground hover:text-primary transition-colors font-medium">Company</a>
                <Button className="bg-gradient-primary hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium w-full mt-4">
                  Contact Us
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
