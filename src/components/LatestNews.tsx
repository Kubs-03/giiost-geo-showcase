import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, User } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'GIIOST Pioneers AI-Powered Geospatial Analytics',
    excerpt: 'Revolutionary machine learning algorithms now enhance our mapping precision by 40%, setting new industry standards for accuracy and efficiency.',
    author: 'Dr. Raj Patel',
    date: '2024-01-15',
    category: 'Technology',
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: 'Successful Completion of Mega Railway Project',
    excerpt: 'Our team successfully mapped 500km of high-speed rail corridor using advanced LiDAR technology, delivering critical infrastructure data ahead of schedule.',
    author: 'Priya Sharma',
    date: '2024-01-10',
    category: 'Projects',
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'Sustainable Mapping Practices for Environmental Conservation',
    excerpt: 'GIIOST leads the industry in eco-friendly surveying methods, reducing carbon footprint while maintaining the highest standards of data quality.',
    author: 'Arjun Mehta',
    date: '2024-01-05',
    category: 'Sustainability',
    image: '/api/placeholder/400/250'
  }
];

const LatestNews = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Read the Latest News
          </h2>
          <p className="text-grey-600 text-lg max-w-3xl mx-auto">
            Stay informed with the latest developments, insights, and innovations from GIIOST and the geospatial industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-card hover-lift group overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-video bg-grey-100 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-primary opacity-30 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-xl font-bold mb-2">{article.category}</div>
                    <div className="text-sm">Latest News</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded text-sm font-medium">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-grey-600 mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-grey-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;