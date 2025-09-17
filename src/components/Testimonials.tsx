import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    title: 'Project Director',
    company: 'Indian Railways',
    image: '/api/placeholder/80/80',
    quote: 'GIIOST\'s precision mapping for our high-speed rail project exceeded all expectations. Their innovative approach and timely delivery were instrumental in our project success.',
    rating: 5
  },
  {
    id: 2,
    name: 'Dr. Anita Singh',
    title: 'Chief Engineer',
    company: 'NHAI',
    image: '/api/placeholder/80/80',
    quote: 'The level of detail and accuracy in their road infrastructure mapping is unparalleled. GIIOST has become our trusted partner for all geospatial requirements.',
    rating: 5
  },
  {
    id: 3,
    name: 'Vikram Patel',
    title: 'Operations Manager',
    company: 'Adani Group',
    image: '/api/placeholder/80/80',
    quote: 'Their drone-based surveying solutions have revolutionized our mining operations. Cost-effective, accurate, and delivered with exceptional professionalism.',
    rating: 5
  },
  {
    id: 4,
    name: 'Meera Joshi',
    title: 'Heritage Conservation Officer',
    company: 'Archaeological Survey of India',
    image: '/api/placeholder/80/80',
    quote: 'GIIOST\'s heritage documentation work is remarkable. Their 3D mapping technology has helped us preserve our cultural landmarks for future generations.',
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding relative bg-gradient-primary">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Discover why industry leaders trust GIIOST for their most critical geospatial projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-card relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 bg-secondary rounded-full p-4">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.438c0-4.338 3.472-7.938 7.75-7.938c4.278 0 7.75 3.6 7.75 7.938c0 1.562-.553 2.789-1.583 3.883C15.944 18.398 14.556 19 12.75 19H4.583z"/>
              </svg>
            </div>

            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-grey-700 text-center leading-relaxed mb-8 italic">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-grey-200 rounded-full flex items-center justify-center">
                <div className="text-grey-600 font-semibold text-xl">
                  {currentTestimonial.name.charAt(0)}
                </div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="text-grey-600">
                  {currentTestimonial.title}, {currentTestimonial.company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;