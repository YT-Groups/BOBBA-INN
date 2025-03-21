
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define our drink types and their associated gradient classes
const drinkTypes = [
  { name: 'Milky Series', gradient: 'drink-gradient-milky', color: 'boba-milky' },
  { name: 'Fruity Series', gradient: 'drink-gradient-fruity', color: 'boba-fruity' },
  { name: 'Tea Series', gradient: 'drink-gradient-tea', color: 'boba-tea' },
  { name: 'Taro Special', gradient: 'drink-gradient-taro', color: 'boba-taro' },
  { name: 'Matcha Delight', gradient: 'drink-gradient-matcha', color: 'boba-matcha' },
];

// Sample carousel images for each type of drink
const carouselImages = [
  '/lovable-uploads/47538500-5207-4397-af00-b7bb1e5c678a.png', // Use uploaded images
  '/lovable-uploads/b9b11b92-8f10-4e1f-ad60-907e79e2bd82.png',
  // We'll use placeholders for the other images for now
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
];

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDrink, setActiveDrink] = useState(drinkTypes[0]);
  
  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    setActiveDrink(drinkTypes[(activeIndex + 1) % drinkTypes.length]);
  }, [activeIndex]);
  
  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section 
      className={cn(
        "min-h-screen flex items-center transition-all-slow pt-20",
        activeDrink.gradient
      )}
    >
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-${activeDrink.color}/20 text-${activeDrink.color} mb-4`}>
            The Boba Inn Experience
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 hero-text-shadow leading-tight">
            It's not just Boba<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              It's an Experience
            </span>
          </h1>
          <p className="text-lg mb-8 max-w-lg opacity-80">
            Handcrafted with premium ingredients, our boba drinks are more than refreshments—they're moments of joy in every sip.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#menu" 
              className="order-button"
            >
              Explore Menu
            </a>
            <a 
              href="/gallery" 
              className="flex items-center text-foreground/80 hover:text-foreground transition-colors"
            >
              View Gallery <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative h-80 md:h-[500px]">
          <div className="relative w-full h-full">
            {carouselImages.map((image, index) => (
              <div 
                key={index}
                className={cn(
                  "hero-carousel-item rounded-3xl overflow-hidden",
                  index === activeIndex && "active"
                )}
              >
                <img 
                  src={image} 
                  alt={`${drinkTypes[index % drinkTypes.length].name} Boba Drink`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="absolute -bottom-4 -right-4 rotate-12 animate-float">
            <img 
              src="/lovable-uploads/b9b11b92-8f10-4e1f-ad60-907e79e2bd82.png" 
              alt="Boba Bubble" 
              className="w-24 h-24 animate-pulse-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
