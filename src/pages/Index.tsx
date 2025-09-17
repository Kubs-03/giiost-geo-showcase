import React from 'react';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import ClientCarousel from '@/components/ClientCarousel';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesShowcase from '@/components/ServicesShowcase';
import AboutStats from '@/components/AboutStats';
import SectorsGrid from '@/components/SectorsGrid';
import CaseStudies from '@/components/CaseStudies';
import KeyDifferentiators from '@/components/KeyDifferentiators';
import LatestNews from '@/components/LatestNews';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <ClientCarousel />
        <WhyChooseUs />
        <ServicesShowcase />
        <AboutStats />
        <SectorsGrid />
        <CaseStudies />
        <KeyDifferentiators />
        <LatestNews />
        <Testimonials />
      </main>
      <Footer />
      
      {/* Live Chat Widget Placeholder */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-gradient-primary text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Index;