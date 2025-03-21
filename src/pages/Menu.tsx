
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

// Define our drink categories with gradients
const drinkCategories = [
  { id: 'milky', name: 'Milky Series', gradient: 'drink-gradient-milky', color: 'boba-milky' },
  { id: 'fruity', name: 'Fruity Series', gradient: 'drink-gradient-fruity', color: 'boba-fruity' },
  { id: 'tea', name: 'Tea Series', gradient: 'drink-gradient-tea', color: 'boba-tea' },
  { id: 'biscuit', name: 'Biscuit Series', gradient: 'drink-gradient-taro', color: 'boba-taro' },
  { id: 'special', name: 'Boba Inn Specials', gradient: 'drink-gradient-blueberry', color: 'boba-blueberry' },
  { id: 'sides', name: 'Sides', gradient: 'drink-gradient-matcha', color: 'boba-matcha' },
  { id: 'toppings', name: 'Toppings', gradient: 'drink-gradient-strawberry', color: 'boba-strawberry' },
];

// Define complete menu items
const menuItems = [
  // Milky Series
  { 
    id: 1, 
    name: 'Caramel Milk Tea', 
    price: 'GH₵35', 
    largePrice: 'GH₵45',
    image: '/placeholder.svg', 
    description: 'Rich caramel flavor blended with premium milk tea and chewy tapioca pearls',
    category: 'milky'
  },
  { 
    id: 2, 
    name: 'Salted Caramel Milk Tea', 
    price: 'GH₵38', 
    largePrice: 'GH₵48',
    image: '/placeholder.svg', 
    description: 'A perfect balance of sweet and salty with our signature milk tea base',
    category: 'milky'
  },
  { 
    id: 3, 
    name: 'Brown Sugar Milk Tea', 
    price: 'GH₵40', 
    largePrice: 'GH₵50',
    image: '/placeholder.svg', 
    description: 'Caramelized brown sugar syrup with creamy milk tea and extra boba pearls',
    category: 'milky'
  },
  { 
    id: 4, 
    name: 'Vanilla Latte Milk', 
    price: 'GH₵35', 
    largePrice: 'GH₵45',
    image: '/placeholder.svg', 
    description: 'Smooth vanilla flavor with a coffee kick and our classic boba pearls',
    category: 'milky'
  },
  { 
    id: 5, 
    name: 'Chocolatey Milk', 
    price: 'GH₵35', 
    largePrice: 'GH₵45',
    image: '/placeholder.svg', 
    description: 'Decadent chocolate milk with tapioca pearls for the chocolate lovers',
    category: 'milky'
  },
  
  // Fruity Series
  { 
    id: 6, 
    name: 'Strawberry Milk', 
    price: 'GH₵35', 
    largePrice: 'GH₵45',
    image: '/placeholder.svg', 
    description: 'The best strawberry in town! Fresh strawberry flavor with creamy milk',
    category: 'fruity'
  },
  { 
    id: 7, 
    name: 'Mango Milk', 
    price: 'GH₵35', 
    largePrice: 'GH₵45',
    image: '/placeholder.svg', 
    description: 'Tropical mango puree blended with milk and chewy boba pearls',
    category: 'fruity'
  },
  { 
    id: 8, 
    name: 'Banana Milk', 
    price: 'GH₵35', 
    largePrice: 'GH₵45',
    image: '/placeholder.svg', 
    description: 'Creamy banana milk with a hint of sweetness and tapioca pearls',
    category: 'fruity'
  },
  { 
    id: 9, 
    name: 'Coconut', 
    price: 'GH₵35', 
    largePrice: 'GH₵45',
    image: '/placeholder.svg', 
    description: 'Refreshing coconut milk with tropical flavors and boba pearls',
    category: 'fruity'
  },
  { 
    id: 10, 
    name: 'Lemonade', 
    price: 'GH₵30', 
    largePrice: 'GH₵40',
    image: '/placeholder.svg', 
    description: 'Zesty lemonade with popping boba pearls for a refreshing experience',
    category: 'fruity'
  },
  
  // Tea Series
  { 
    id: 11, 
    name: 'Coffee', 
    price: 'GH₵35', 
    largePrice: 'GH₵45',
    image: '/placeholder.svg', 
    description: 'Premium coffee with our signature boba pearls for coffee lovers',
    category: 'tea'
  },
  { 
    id: 12, 
    name: 'Taro (Coming Soon)', 
    price: 'GH₵40', 
    largePrice: 'GH₵50',
    image: '/placeholder.svg', 
    description: 'Smooth taro flavor with milk and boba pearls - launching soon!',
    category: 'tea',
    comingSoon: true
  },
  { 
    id: 13, 
    name: 'Matcha Tea (Coming Soon)', 
    price: 'GH₵40', 
    largePrice: 'GH₵50',
    image: '/placeholder.svg', 
    description: 'Authentic matcha green tea with milk and tapioca pearls - coming soon!',
    category: 'tea',
    comingSoon: true
  },
  
  // Biscuit Series
  { 
    id: 14, 
    name: 'Oreo Milk', 
    price: 'GH₵40', 
    largePrice: 'GH₵50',
    image: '/placeholder.svg', 
    description: 'Creamy milk blended with crushed Oreo cookies and boba pearls',
    category: 'biscuit'
  },
  { 
    id: 15, 
    name: 'Veda Biscoff Lotus', 
    price: 'GH₵45', 
    largePrice: 'GH₵55',
    image: '/placeholder.svg', 
    description: 'You won\'t regret it! Caramelized biscuit flavor with our signature milk tea',
    category: 'biscuit'
  },
  
  // Specials
  { 
    id: 16, 
    name: 'Blueberry Cheesecake', 
    price: 'GH₵45', 
    largePrice: 'GH₵55',
    image: '/placeholder.svg', 
    description: 'Creamy cheesecake flavor with blueberry swirls and tapioca pearls',
    category: 'special'
  },
  { 
    id: 17, 
    name: 'Strawberry Matcha (Coming Soon)', 
    price: 'GH₵45', 
    largePrice: 'GH₵55',
    image: '/placeholder.svg', 
    description: 'A unique blend of strawberry and matcha flavors - coming soon!',
    category: 'special',
    comingSoon: true
  },
  
  // Sides
  { 
    id: 18, 
    name: 'Waffles', 
    price: 'GH₵25', 
    image: '/placeholder.svg', 
    description: 'Freshly made waffles - perfect companion for your boba drink',
    category: 'sides'
  },
  { 
    id: 19, 
    name: 'Cookies', 
    price: 'GH₵15', 
    image: '/placeholder.svg', 
    description: 'Homemade cookies that pair perfectly with our milk teas',
    category: 'sides'
  },
  { 
    id: 20, 
    name: 'Chocolate Chip Cookies', 
    price: 'GH₵18', 
    image: '/placeholder.svg', 
    description: 'Soft cookies loaded with chocolate chips - a customer favorite',
    category: 'sides'
  },
  { 
    id: 21, 
    name: 'Muffins', 
    price: 'GH₵20', 
    image: '/placeholder.svg', 
    description: 'Freshly baked muffins in various flavors',
    category: 'sides'
  },
  { 
    id: 22, 
    name: 'Chocolate Muffins', 
    price: 'GH₵22', 
    image: '/placeholder.svg', 
    description: 'Rich chocolate muffins with a gooey center',
    category: 'sides'
  },
  { 
    id: 23, 
    name: 'Mini Pancakes', 
    price: 'GH₵25', 
    image: '/placeholder.svg', 
    description: 'Stack of fluffy mini pancakes with maple syrup',
    category: 'sides'
  },
  { 
    id: 24, 
    name: 'Banana Muffins', 
    price: 'GH₵20', 
    image: '/placeholder.svg', 
    description: 'Moist banana muffins made with fresh bananas',
    category: 'sides'
  },
  { 
    id: 25, 
    name: 'Cupcakes', 
    price: 'GH₵18', 
    image: '/placeholder.svg', 
    description: 'Delightful cupcakes with various frosting options',
    category: 'sides'
  },
  
  // Toppings
  { 
    id: 26, 
    name: 'Extra Boba', 
    price: 'GH₵5', 
    image: '/placeholder.svg', 
    description: 'Additional serving of our chewy tapioca pearls',
    category: 'toppings'
  },
  { 
    id: 27, 
    name: 'Oreo Crumbs', 
    price: 'GH₵5', 
    image: '/placeholder.svg', 
    description: 'Crushed Oreo cookies to top your drink',
    category: 'toppings'
  },
  { 
    id: 28, 
    name: 'Biscoff Crumbs', 
    price: 'GH₵5', 
    image: '/placeholder.svg', 
    description: 'Caramelized biscuit crumbs to enhance your boba experience',
    category: 'toppings'
  },
  { 
    id: 29, 
    name: 'Whipped Cream', 
    price: 'GH₵5', 
    image: '/placeholder.svg', 
    description: 'Fresh whipped cream topping for your drink',
    category: 'toppings'
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(drinkCategories[0]);
  const [selectedSize, setSelectedSize] = useState<'regular' | 'large'>('regular');
  
  const filteredItems = menuItems.filter(item => item.category === activeCategory.id);
  
  const handleOrderClick = (item: typeof menuItems[0]) => {
    const price = selectedSize === 'large' && item.largePrice ? item.largePrice : item.price;
    toast({
      title: "Added to cart",
      description: `${item.name} (${selectedSize}) - ${price} has been added to your cart`,
    });
  };

  return (
    <div className={cn(
      "min-h-screen transition-all duration-500",
      activeCategory.gradient
    )}>
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 inline-block">
              Our Menu
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Explore Our Drinks
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover our full range of handcrafted drinks and sides. Each item is made with premium ingredients and prepared with care.
            </p>
          </div>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {drinkCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory.id === category.id
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-white/60 hover:bg-white/80"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Size Selection */}
          <div className="glass-card max-w-xs mx-auto mb-10 p-4 rounded-xl">
            <h3 className="font-medium mb-3 text-center">Select Size</h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setSelectedSize('regular')}
                className={cn(
                  "flex flex-col items-center p-3 rounded-lg transition-all",
                  selectedSize === 'regular' 
                    ? "bg-primary/10 shadow-sm" 
                    : "hover:bg-white/80"
                )}
              >
                <div className="w-8 h-12 relative mb-1">
                  <div className="absolute inset-0 bg-current/10 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">500ml</span>
              </button>
              
              <button
                onClick={() => setSelectedSize('large')}
                className={cn(
                  "flex flex-col items-center p-3 rounded-lg transition-all",
                  selectedSize === 'large' 
                    ? "bg-primary/10 shadow-sm" 
                    : "hover:bg-white/80"
                )}
              >
                <div className="w-10 h-16 relative mb-1">
                  <div className="absolute inset-0 bg-current/10 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">700ml</span>
              </button>
            </div>
          </div>
          
          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className={cn(
                  "menu-item-card group",
                  item.comingSoon && "opacity-70"
                )}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {item.largePrice && (
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                      {selectedSize === 'large' ? item.largePrice : item.price}
                    </div>
                  )}
                  {!item.largePrice && (
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                      {item.price}
                    </div>
                  )}
                  {item.comingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-foreground/70 mb-4">{item.description}</p>
                {!item.comingSoon && (
                  <button 
                    onClick={() => handleOrderClick(item)}
                    className="order-button w-full flex items-center justify-center"
                    disabled={item.comingSoon}
                  >
                    <Plus className="w-4 h-4 mr-2" /> Order Now
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Menu;
