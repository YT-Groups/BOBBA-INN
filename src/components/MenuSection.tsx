
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

// Define our drink categories
const drinkCategories = [
  { id: 'milky', name: 'Milky Series', gradient: 'drink-gradient-milky' },
  { id: 'fruity', name: 'Fruity Series', gradient: 'drink-gradient-fruity' },
  { id: 'tea', name: 'Tea Series', gradient: 'drink-gradient-tea' },
  { id: 'biscuit', name: 'Biscuit Series', gradient: 'drink-gradient-taro' },
  { id: 'special', name: 'Boba Inn Specials', gradient: 'drink-gradient-blueberry' },
];

// Define our menu items
const menuItems = [
  // Milky Series
  { 
    id: 1, 
    name: 'Caramel Milk Tea', 
    price: 'GH₵35', 
    image: '/placeholder.svg', 
    description: 'Rich caramel flavor blended with premium milk tea and chewy tapioca pearls',
    category: 'milky'
  },
  { 
    id: 2, 
    name: 'Salted Caramel Milk Tea', 
    price: 'GH₵38', 
    image: '/placeholder.svg', 
    description: 'A perfect balance of sweet and salty with our signature milk tea base',
    category: 'milky'
  },
  { 
    id: 3, 
    name: 'Brown Sugar Milk Tea', 
    price: 'GH₵40', 
    image: '/placeholder.svg', 
    description: 'Caramelized brown sugar syrup with creamy milk tea and extra boba pearls',
    category: 'milky'
  },
  { 
    id: 4, 
    name: 'Vanilla Latte Milk', 
    price: 'GH₵35', 
    image: '/placeholder.svg', 
    description: 'Smooth vanilla flavor with a coffee kick and our classic boba pearls',
    category: 'milky'
  },
  { 
    id: 5, 
    name: 'Chocolatey Milk', 
    price: 'GH₵35', 
    image: '/placeholder.svg', 
    description: 'Decadent chocolate milk with tapioca pearls for the chocolate lovers',
    category: 'milky'
  },
  
  // Fruity Series
  { 
    id: 6, 
    name: 'Strawberry Milk', 
    price: 'GH₵35', 
    image: '/placeholder.svg', 
    description: 'The best strawberry in town! Fresh strawberry flavor with creamy milk',
    category: 'fruity'
  },
  { 
    id: 7, 
    name: 'Mango Milk', 
    price: 'GH₵35', 
    image: '/placeholder.svg', 
    description: 'Tropical mango puree blended with milk and chewy boba pearls',
    category: 'fruity'
  },
  { 
    id: 8, 
    name: 'Banana Milk', 
    price: 'GH₵35', 
    image: '/placeholder.svg', 
    description: 'Creamy banana milk with a hint of sweetness and tapioca pearls',
    category: 'fruity'
  },
  { 
    id: 9, 
    name: 'Coconut', 
    price: 'GH₵35', 
    image: '/placeholder.svg', 
    description: 'Refreshing coconut milk with tropical flavors and boba pearls',
    category: 'fruity'
  },
  { 
    id: 10, 
    name: 'Lemonade', 
    price: 'GH₵30', 
    image: '/placeholder.svg', 
    description: 'Zesty lemonade with popping boba pearls for a refreshing experience',
    category: 'fruity'
  },
  
  // Tea Series
  { 
    id: 11, 
    name: 'Coffee', 
    price: 'GH₵35', 
    image: '/placeholder.svg', 
    description: 'Premium coffee with our signature boba pearls for coffee lovers',
    category: 'tea'
  },
  { 
    id: 12, 
    name: 'Taro (Coming Soon)', 
    price: 'GH₵40', 
    image: '/placeholder.svg', 
    description: 'Smooth taro flavor with milk and boba pearls - launching soon!',
    category: 'tea'
  },
  { 
    id: 13, 
    name: 'Matcha Tea (Coming Soon)', 
    price: 'GH₵40', 
    image: '/placeholder.svg', 
    description: 'Authentic matcha green tea with milk and tapioca pearls - coming soon!',
    category: 'tea'
  },
  
  // Biscuit Series
  { 
    id: 14, 
    name: 'Oreo Milk', 
    price: 'GH₵40', 
    image: '/placeholder.svg', 
    description: 'Creamy milk blended with crushed Oreo cookies and boba pearls',
    category: 'biscuit'
  },
  { 
    id: 15, 
    name: 'Veda Biscoff Lotus', 
    price: 'GH₵45', 
    image: '/placeholder.svg', 
    description: 'You won\'t regret it! Caramelized biscuit flavor with our signature milk tea',
    category: 'biscuit'
  },
  
  // Specials
  { 
    id: 16, 
    name: 'Blueberry Cheesecake', 
    price: 'GH₵45', 
    image: '/placeholder.svg', 
    description: 'Creamy cheesecake flavor with blueberry swirls and tapioca pearls',
    category: 'special'
  },
  { 
    id: 17, 
    name: 'Strawberry Matcha (Coming Soon)', 
    price: 'GH₵45', 
    image: '/placeholder.svg', 
    description: 'A unique blend of strawberry and matcha flavors - coming soon!',
    category: 'special'
  },
];

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(drinkCategories[0]);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const filteredItems = menuItems.filter(item => item.category === activeCategory.id);
  
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollLeft += scrollAmount;
    }
  };
  
  const handleOrderClick = (item: typeof menuItems[0]) => {
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
    });
  };

  return (
    <section id="menu" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 inline-block">
            Our Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Discover Your Perfect Boba
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From classic milk teas to fruity refreshments, we craft each drink with premium ingredients and a passion for perfection.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {drinkCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory.id === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white/60 hover:bg-white/80"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Slider Navigation */}
        <div className="flex items-center justify-end mb-4 gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Menu Items Slider */}
        <div 
          ref={sliderRef}
          className={cn(
            "menu-slider flex overflow-x-auto gap-6 pb-6 transition-all duration-500",
            activeCategory.gradient
          )}
        >
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item-card flex-shrink-0 w-[280px]">
              <div className="relative">
                <img 
                  src={item.image || '/placeholder.svg'} 
                  alt={item.name}
                  className="menu-item-image"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                  {item.price}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{item.description}</p>
              <button 
                onClick={() => handleOrderClick(item)}
                className="order-button w-full flex items-center justify-center"
              >
                <Plus className="w-4 h-4 mr-2" /> Order Now
              </button>
            </div>
          ))}
        </div>
        
        {/* Size options */}
        <div className="mt-16 text-center glass-card max-w-2xl mx-auto p-6 rounded-xl">
          <h3 className="font-display text-2xl font-bold mb-4">Choose Your Size</h3>
          <div className="flex justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="w-16 h-24 relative mx-auto mb-2 opacity-70">
                <div className="absolute inset-0 bg-boba-milky/20 rounded-full transform scale-90"></div>
                <div className="absolute bottom-1 left-1 right-1 h-4 bg-boba-milky/40 rounded-full"></div>
              </div>
              <span className="font-medium">500ml</span>
              <p className="text-sm text-foreground/70">GH₵35</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-32 relative mx-auto mb-2">
                <div className="absolute inset-0 bg-boba-fruity/20 rounded-full transform scale-90"></div>
                <div className="absolute bottom-1 left-1 right-1 h-5 bg-boba-fruity/40 rounded-full"></div>
              </div>
              <span className="font-medium">700ml</span>
              <p className="text-sm text-foreground/70">GH₵45</p>
            </div>
          </div>
          <p className="text-sm text-foreground/60">
            Indecisive? Try our best selling flavors:<br/>
            Vanilla Milk • Strawberry Milk • Veda Biscoff Lotus
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
