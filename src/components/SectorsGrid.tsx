import React from 'react';
import { Train, Car, Mountain, Droplets, Castle, Building, Fuel, Zap } from 'lucide-react';

const sectors = [
  {
    icon: Train,
    title: 'Railways',
    description: 'Comprehensive rail infrastructure mapping and monitoring solutions for enhanced safety and efficiency.'
  },
  {
    icon: Car,
    title: 'Roads & Highways',
    description: 'Advanced surveying for road construction, maintenance, and traffic management systems.'
  },
  {
    icon: Mountain,
    title: 'Mining',
    description: 'Precise geological surveys and resource mapping for sustainable mining operations.'
  },
  {
    icon: Droplets,
    title: 'Water Resources',
    description: 'Water body mapping, watershed analysis, and hydro-infrastructure development.'
  },
  {
    icon: Castle,
    title: 'Archaeology',
    description: 'Heritage site documentation and cultural landscape preservation through advanced mapping.'
  },
  {
    icon: Building,
    title: 'Urban Planning',
    description: 'Smart city development through comprehensive urban mapping and spatial analysis.'
  },
  {
    icon: Fuel,
    title: 'Oil & Gas',
    description: 'Pipeline mapping, facility monitoring, and environmental impact assessment.'
  },
  {
    icon: Zap,
    title: 'Power & Energy',
    description: 'Transmission line surveys, renewable energy site assessment, and grid optimization.'
  }
];

const SectorsGrid = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Geo-Spatial Solutions for Diverse Sectors
          </h2>
          <p className="text-grey-600 text-lg max-w-3xl mx-auto">
            Delivering specialized geospatial services across multiple industries with precision and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-primary opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center text-white">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <sector.icon className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {sector.title}
                </h3>
                <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {sector.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsGrid;