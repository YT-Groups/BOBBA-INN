
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import MenuSection from '@/components/MenuSection';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.getElementById(href.substring(1));
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <div className="relative z-10 bg-white">
        <MenuSection />
        <Gallery />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
