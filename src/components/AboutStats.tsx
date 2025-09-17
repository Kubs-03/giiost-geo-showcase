import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AboutStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        let startTime: number;
        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [isVisible, end, duration]);

    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  return (
    <section ref={sectionRef} className="section-padding relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image with Experience Badge */}
          <div className="relative">
            <div className="aspect-square bg-grey-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-primary opacity-30 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl font-bold mb-4">GIIOST</div>
                  <div className="text-xl">Geospatial Excellence</div>
                </div>
              </div>
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-secondary rounded-lg shadow-card p-6 border-4 border-white">
              <div className="text-center text-white">
                <div className="text-3xl font-bold">25</div>
                <div className="text-sm font-medium">Years of Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-white">
            <div className="mb-8">
              <p className="text-primary font-semibold mb-2">ABOUT COMPANY</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                GIIOST: Fast & Reliable Geospatial Solutions
              </h2>
              <p className="text-grey-200 text-lg leading-relaxed mb-8">
                With over 25 years of industry leadership, GIIOST delivers cutting-edge geospatial 
                solutions that transform data into actionable insights. Our comprehensive services 
                span from aerial surveys to advanced BIM modeling, serving diverse industries 
                with precision and innovation.
              </p>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="vision" className="mb-8">
              <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-sm">
                <TabsTrigger value="vision" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
                  Our Vision
                </TabsTrigger>
                <TabsTrigger value="mission" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
                  Our Mission
                </TabsTrigger>
                <TabsTrigger value="objective" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
                  Our Objective
                </TabsTrigger>
              </TabsList>
              <TabsContent value="vision" className="mt-4 text-grey-200">
                To be the global leader in geospatial technology, pioneering innovative solutions 
                that shape the future of infrastructure development and environmental stewardship.
              </TabsContent>
              <TabsContent value="mission" className="mt-4 text-grey-200">
                Empowering organizations with precise geospatial data and advanced analytics to 
                make informed decisions that drive sustainable growth and operational excellence.
              </TabsContent>
              <TabsContent value="objective" className="mt-4 text-grey-200">
                To deliver unparalleled geospatial services that exceed client expectations while 
                fostering innovation, sustainability, and technological advancement in our industry.
              </TabsContent>
            </Tabs>

            <Button className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3">
              More About Us
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="relative z-10 mt-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary counter">
                  <Counter end={4} suffix="M+" />
                </div>
                <div className="text-grey-600 font-medium">Land Mapped (hectare)</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary counter">
                  <Counter end={25} suffix="K+" />
                </div>
                <div className="text-grey-600 font-medium">Professionals Trained</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary counter">
                  <Counter end={100} suffix="+" />
                </div>
                <div className="text-grey-600 font-medium">Clients & Partners</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary counter">
                  <Counter end={1000} suffix="+" />
                </div>
                <div className="text-grey-600 font-medium">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;