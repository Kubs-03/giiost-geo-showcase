import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Download, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Mapping the Future of High-Speed Rail',
    description: 'Comprehensive LiDAR and drone survey for 200km high-speed rail corridor, delivering precision mapping for infrastructure development.',
    image: '/api/placeholder/400/300',
    sector: 'Railways',
    duration: '6 months',
    results: '99.8% accuracy achieved'
  },
  {
    id: 2,
    title: 'Smart Highway Monitoring System',
    description: 'Advanced GPR and aerial surveying for national highway expansion project, ensuring optimal route planning and safety standards.',
    image: '/api/placeholder/400/300',
    sector: 'Roads',
    duration: '4 months',
    results: '30% cost reduction'
  },
  {
    id: 3,
    title: 'Archaeological Heritage Preservation',
    description: '3D documentation and mapping of historical monuments using cutting-edge photogrammetry and laser scanning technology.',
    image: '/api/placeholder/400/300',
    sector: 'Archaeology',
    duration: '8 months',
    results: 'UNESCO certification'
  }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-grey-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-grey-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Company</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-grey-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input
          type="tel"
          className="w-full px-3 py-2 border border-grey-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 text-white">
        Download PDF
      </Button>
    </form>
  );
};

const CaseStudies = () => {
  return (
    <section className="section-padding bg-gradient-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-grey-200 text-lg max-w-3xl mx-auto">
            Discover how GIIOST has transformed projects across diverse industries with precision and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-lg overflow-hidden shadow-card hover-lift group"
            >
              {/* Image */}
              <div className="aspect-video bg-grey-100 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-primary opacity-30 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-2">{study.sector}</div>
                    <div className="text-sm">Case Study</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-secondary text-white px-2 py-1 rounded text-xs font-medium">
                  {study.sector}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-grey-600 mb-4 leading-relaxed">
                  {study.description}
                </p>

                {/* Stats */}
                <div className="flex justify-between text-sm text-grey-500 mb-4">
                  <span>Duration: {study.duration}</span>
                  <span>{study.results}</span>
                </div>

                {/* Download Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Download Case Study</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-grey-600 mb-4">
                        Please provide your contact information to download the case study PDF.
                      </p>
                      <ContactForm />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="bg-white text-primary hover:bg-grey-50 px-8 py-3">
            View All Case Studies
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;