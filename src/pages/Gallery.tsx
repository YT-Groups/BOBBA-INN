
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

// For a real app, we would have actual gallery images
// Here we're using placeholder images for demonstration
const galleryItems = [
  { 
    id: 1, 
    src: '/images/BOBZY2.jpg', 
    alt: 'Happy customers enjoying boba tea', 
    layout: 'standard' 
  },
  { 
    id: 2, 
    src: '/images/BOBZY8NEW.jpg', 
    alt: 'Colorful boba drinks lineup', 
    layout: 'wide' 
  },
  { 
    id: 3, 
    src: '/images/DAVECUP.jpg', 
    alt: 'Bubble tea making process', 
    layout: 'tall' 
  },
  { 
    id: 4, 
    src: '/images/DAVHOLDINGCUP.jpg', 
    alt: 'Friends sharing boba experience', 
    layout: 'standard' 
  },
  { 
    id: 5, 
    src: '/images/DAVEHOLDINGCUPWHITE.jpg', 
    alt: 'Artistic boba presentation', 
    layout: 'tall' 
  },
  { 
    id: 6, 
    src: '/images//DAVHOLDINGCUP.jpg', 
    alt: 'Boba shop interior', 
    layout: 'standard' 
  },
  { 
    id: 7, 
    src: '/images/BOBZY5.jpg', 
    alt: 'Closeup of boba pearls', 
    layout: 'wide' 
  },
  { 
    id: 8, 
    src: '/images/BOBZY4.jpg', 
    alt: 'Customer enjoying their drink', 
    layout: 'standard' 
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 inline-block">
            Our Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Boba Moments
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore the joy and delight that our boba tea brings to our customers. Every sip creates a moment worth sharing.
          </p>
        </div>
        
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div 
                  className={cn(
                    "gallery-item overflow-hidden rounded-xl cursor-pointer",
                    item.layout === 'wide' ? "gallery-item-wide" : "",
                    item.layout === 'tall' ? "gallery-item-tall" : "",
                    "relative group"
                  )}
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
      </div>
    </section>
  );
};

export default Gallery;
