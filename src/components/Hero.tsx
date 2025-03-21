
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
  'https://i.pinimg.com/736x/05/12/27/05122726ef4b12a619a08bfe2acd4bbd.jpg', 
  'https://i.pinimg.com/736x/d8/25/a3/d825a3dea21b4c1e41b56aec343a308f.jpg',
  // We'll use placeholders for the other images for now
  'https://i.pinimg.com/736x/17/bf/ac/17bfacdd0e7fb9ee3a6c51e24fdd1b05.jpg',
  'https://i.pinimg.com/736x/5b/a2/4b/5ba24bf7f89e3aadee27eea63824c87e.jpg',
  'https://i.pinimg.com/736x/6d/db/85/6ddb8545ae2f3358eceb7ddff71c4f17.jpg',
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
              src="public\images\BOBZY6.jpg" 
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
