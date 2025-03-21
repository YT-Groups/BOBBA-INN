import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/', active: true },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Save scroll position and prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      setScrollPosition(window.scrollY);
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition);
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen, scrollPosition]);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 relative">
              <img src="/images/BOBZY4.jpg" alt="Boba Inn Logo" className="object-contain w-full h-full" />
            </div>
            <span className="font-display font-bold text-xl sm:text-2xl tracking-tight">Boba Inn</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                to={item.href} 
                className={cn("nav-item", item.active && "nav-item-active")}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/cart" 
              className="ml-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5" />
            </Link>
          </nav>
          
          {/* Mobile Navigation Trigger */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors relative z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation Menu - Completely separate from header */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden flex flex-col">
          <div className="h-20"></div> {/* Spacer for header */}
          <div className="flex-1 flex flex-col px-6 pb-6 overflow-y-auto">
            <nav className="flex flex-col space-y-6 text-center pt-4">
              {navItems.map((item) => (
                <Link 
                  key={item.label} 
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-6">
              <Link 
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-3 bg-primary text-primary-foreground rounded-full"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>View Cart</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
