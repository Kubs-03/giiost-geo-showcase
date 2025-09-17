import React, { useState } from 'react';
import { Zap, Users, Leaf } from 'lucide-react';

const valueProps = [
  {
    id: 'efficiency',
    icon: Zap,
    title: 'Unlock Efficiency',
    description: 'Streamline your operations with cutting-edge geospatial technology that reduces project timelines and maximizes accuracy.',
    image: '/api/placeholder/600/400'
  },
  {
    id: 'decisions',
    icon: Users,
    title: 'Empowering Decision Makers',
    description: 'Transform raw data into actionable insights that drive strategic decisions and accelerate project success.',
    image: '/api/placeholder/600/400'
  },
  {
    id: 'sustainability',
    icon: Leaf,
    title: 'Sustainability',
    description: 'Promote environmental responsibility through precise mapping that minimizes ecological impact and supports green initiatives.',
    image: '/api/placeholder/600/400'
  }
];

const WhyChooseUs = () => {
  const [activeValue, setActiveValue] = useState('efficiency');

  const activeValueProp = valueProps.find(prop => prop.id === activeValue);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Value Propositions */}
          <div className="space-y-8">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose GIIOST?
              </h2>
              <p className="text-grey-600 text-lg">
                Leading the industry with innovative solutions and unmatched expertise.
              </p>
            </div>

            <div className="space-y-6">
              {valueProps.map((prop) => (
                <div
                  key={prop.id}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    activeValue === prop.id
                      ? 'border-primary bg-primary/5'
                      : 'border-grey-200 hover:border-grey-300'
                  }`}
                  onMouseEnter={() => setActiveValue(prop.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      activeValue === prop.id ? 'bg-gradient-primary' : 'bg-grey-100'
                    }`}>
                      <prop.icon className={`h-6 w-6 ${
                        activeValue === prop.id ? 'text-white' : 'text-grey-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 ${
                        activeValue === prop.id ? 'text-primary' : 'text-foreground'
                      }`}>
                        {prop.title}
                      </h3>
                      <p className="text-grey-600">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dynamic Image */}
          <div className="relative">
            <div className="aspect-video bg-grey-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-primary opacity-20 flex items-center justify-center">
                <div className="text-center text-white">
                  <activeValueProp.icon className="h-24 w-24 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">{activeValueProp.title}</h3>
                </div>
              </div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-card p-6 border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-grey-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;