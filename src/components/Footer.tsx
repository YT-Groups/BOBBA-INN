
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/b9b11b92-8f10-4e1f-ad60-907e79e2bd82.png" alt="Boba Inn Logo" className="w-10 h-10 bg-white rounded-full p-1" />
              <span className="font-display text-xl font-bold">Boba Inn</span>
            </Link>
            <p className="text-primary-foreground/80 max-w-xs">
              Crafting premium boba tea experiences with passion and quality. Every cup is a journey of flavor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  123 Boba Street, Tea District, Accra, Ghana
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-primary-foreground/70">+233 12 345 6789</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-primary-foreground/70">hello@bobainn.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-primary-foreground/70">Monday-Friday</span>
                <span>9:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-primary-foreground/70">Saturday</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-primary-foreground/70">Sunday</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Boba Inn. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
