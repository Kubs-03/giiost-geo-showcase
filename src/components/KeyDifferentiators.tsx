import React from 'react';
import { Award, Users, Globe, Shield, Clock, Target } from 'lucide-react';

const differentiators = [
  {
    icon: Award,
    title: 'Comprehensive In-House Solutions',
    description: 'End-to-end geospatial services under one roof, from data acquisition to analysis and delivery.'
  },
  {
    icon: Users,
    title: '25+ Years of Expertise',
    description: 'Decades of industry experience with a proven track record of successful project delivery.'
  },
  {
    icon: Globe,
    title: 'Global Work Experience',
    description: 'International project portfolio spanning multiple continents and diverse geographical challenges.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'ISO certified processes ensuring highest standards of accuracy and reliability in all deliverables.'
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description: 'Quick project mobilization with advanced technology and experienced field teams.'
  },
  {
    icon: Target,
    title: 'Precision Technology',
    description: 'State-of-the-art equipment and cutting-edge software for unmatched accuracy and efficiency.'
  }
];

const KeyDifferentiators = () => {
  return (
    <section className="section-padding bg-grey-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-video bg-gradient-primary rounded-lg overflow-hidden">
              <div className="w-full h-full bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="h-24 w-24 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
                  <p className="text-lg">Technology & Collaboration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Differentiators */}
          <div className="space-y-8">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Industry Leaders Choose GIIOST
              </h2>
              <p className="text-grey-600 text-lg">
                Our unique combination of experience, technology, and commitment sets us apart in the geospatial industry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg hover:bg-white hover:shadow-card transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-grey-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyDifferentiators;