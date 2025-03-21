
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

// For a real app, we would have actual gallery images
// Here we're using placeholder images for demonstration
const galleryItems = [
  { 
    id: 1, 
    src: '/placeholder.svg', 
    alt: 'Happy customers enjoying boba tea', 
    layout: 'standard',
    category: 'people'
  },
  { 
    id: 2, 
    src: '/placeholder.svg', 
    alt: 'Colorful boba drinks lineup', 
    layout: 'wide',
    category: 'drinks'
  },
  { 
    id: 3, 
    src: '/placeholder.svg', 
    alt: 'Bubble tea making process', 
    layout: 'tall',
    category: 'process'
  },
  { 
    id: 4, 
    src: '/placeholder.svg', 
    alt: 'Friends sharing boba experience', 
    layout: 'standard',
    category: 'people'
  },
  { 
    id: 5, 
    src: '/placeholder.svg', 
    alt: 'Artistic boba presentation', 
    layout: 'tall',
    category: 'drinks'
  },
  { 
    id: 6, 
    src: '/placeholder.svg', 
    alt: 'Boba shop interior', 
    layout: 'standard',
    category: 'store'
  },
  { 
    id: 7, 
    src: '/placeholder.svg', 
    alt: 'Closeup of boba pearls', 
    layout: 'wide',
    category: 'process'
  },
  { 
    id: 8, 
    src: '/placeholder.svg', 
    alt: 'Customer enjoying their drink', 
    layout: 'standard',
    category: 'people'
  },
  { 
    id: 9, 
    src: '/placeholder.svg', 
    alt: 'Drink preparation station', 
    layout: 'standard',
    category: 'process'
  },
  { 
    id: 10, 
    src: '/placeholder.svg', 
    alt: 'Store front at night', 
    layout: 'wide',
    category: 'store'
  },
  { 
    id: 11, 
    src: '/placeholder.svg', 
    alt: 'Customers on a date sharing boba', 
    layout: 'tall',
    category: 'people'
  },
  { 
    id: 12, 
    src: '/placeholder.svg', 
    alt: 'Rainbow of different boba flavors', 
    layout: 'standard',
    category: 'drinks'
  },
  { 
    id: 13, 
    src: '/placeholder.svg', 
    alt: 'Staff member making drinks', 
    layout: 'standard',
    category: 'process'
  },
  { 
    id: 14, 
    src: '/placeholder.svg', 
    alt: 'Special seasonal drink', 
    layout: 'tall',
    category: 'drinks'
  },
  { 
    id: 15, 
    src: '/placeholder.svg', 
    alt: 'Outdoor seating area', 
    layout: 'standard',
    category: 'store'
  },
];

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'people', name: 'People' },
  { id: 'drinks', name: 'Drinks' },
  { id: 'process', name: 'Making Process' },
  { id: 'store', name: 'Our Store' },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-white">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 inline-block">
              Photo Gallery
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Boba Moments
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Capturing the joy and delight of the Boba Inn experience. Browse through our collection of memorable moments.
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-white/60 hover:bg-white/80"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid with Animation */}
          <div 
            className="gallery-grid"
            style={{
              opacity: 0,
              animation: 'fadeIn 0.5s ease-out forwards',
              animationDelay: '0.2s'
            }}
          >
            {filteredItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div 
                    className={cn(
                      "gallery-item overflow-hidden rounded-xl cursor-pointer",
                      item.layout === 'wide' ? "gallery-item-wide" : "",
                      item.layout === 'tall' ? "gallery-item-tall" : "",
                      "relative group animate-fade-in"
                    )}
                    style={{
                      animationDelay: `${(Math.random() * 0.5).toFixed(2)}s`
                    }}
                    onClick={() => setSelectedImage(item)}
                  >
                    <img 
                      src={item.src} 
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white font-medium px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg">
                        View
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
          
          {/* Customer Cards Section */}
          <div className="mt-20">
            <h2 className="font-display text-3xl font-bold mb-8 text-center">
              Customer Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Customer Testimonial Cards */}
              <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 mr-4"></div>
                  <div>
                    <h3 className="font-bold">Sarah M.</h3>
                    <p className="text-sm text-foreground/70">Boba Enthusiast</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  "The Vanilla Latte Milk is absolutely divine! I come here at least twice a week for my boba fix. The staff are always so friendly too!"
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 mr-4"></div>
                  <div>
                    <h3 className="font-bold">David K.</h3>
                    <p className="text-sm text-foreground/70">Regular Customer</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  "Boba Inn has the best brown sugar milk tea in town. The pearls are always perfectly chewy and the tea is never too sweet. Absolutely recommend!"
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 mr-4"></div>
                  <div>
                    <h3 className="font-bold">Ama T.</h3>
                    <p className="text-sm text-foreground/70">First-time Visitor</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  "My first time trying the Veda Biscoff Lotus and it was life-changing! The flavor combination is incredible. Can't wait to bring my friends here!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default GalleryPage;
