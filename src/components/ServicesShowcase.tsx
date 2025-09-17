import React from 'react';
import { Plane, Radar, MapPin, Search, Satellite, Database } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Drone Based Survey',
    description: 'High-precision aerial surveying with advanced drone technology for comprehensive data collection.'
  },
  {
    icon: Radar,
    title: 'LiDAR Scanning',
    description: 'Light Detection and Ranging technology for accurate 3D mapping and terrain analysis.'
  },
  {
    icon: Search,
    title: 'GPR Survey',
    description: 'Ground Penetrating Radar for subsurface investigation and utility detection.'
  },
  {
    icon: Plane,
    title: 'Drone Inspection',
    description: 'Asset monitoring and inspection services using cutting-edge drone technology.'
  },
  {
    icon: Satellite,
    title: 'GIS & Remote Sensing',
    description: 'Geographic Information Systems and satellite data analysis for informed decision-making.'
  },
  {
    icon: Database,
    title: 'BIM Services',
    description: 'Building Information Modeling for enhanced project visualization and management.'
  }
];

const ServicesShowcase = () => {
  return (
    <section className="section-padding bg-grey-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Elevate Business from Guesswork to Great Work with Technology
          </h2>
          <p className="text-grey-600 text-lg max-w-3xl mx-auto">
            Comprehensive geospatial solutions designed to transform your project outcomes and drive success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-card hover-lift group cursor-pointer"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-grey-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;