import React from 'react';

const clients = [
  { name: 'Indian Railways', logo: 'IR' },
  { name: 'Archaeological Survey of India', logo: 'ASI' },
  { name: 'NHAI', logo: 'NHAI' },
  { name: 'RITES', logo: 'RITES' },
  { name: 'DRDO', logo: 'DRDO' },
  { name: 'Adani Group', logo: 'Adani' },
  { name: 'L&T', logo: 'L&T' },
  { name: 'NTPC', logo: 'NTPC' },
  { name: 'Coal India', logo: 'CIL' },
  { name: 'ONGC', logo: 'ONGC' }
];

const ClientCarousel = () => {
  return (
    <section className="py-16 bg-grey-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-grey-600 text-lg max-w-2xl mx-auto">
            JOIN THE 500+ COMPANIES TRUSTING GIIOST
          </p>
        </div>
        
        {/* Auto-scrolling carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-x space-x-12">
            {/* First set */}
            {clients.map((client, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-card p-4 w-full h-full flex items-center justify-center hover-lift">
                  <div className="text-lg font-bold text-grey-600 text-center">
                    {client.logo}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless scroll */}
            {clients.map((client, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-card p-4 w-full h-full flex items-center justify-center hover-lift">
                  <div className="text-lg font-bold text-grey-600 text-center">
                    {client.logo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientCarousel;