
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 inline-block">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have questions, suggestions or want to collaborate? We'd love to hear from you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-display font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      required 
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      required 
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?" 
                    required 
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    required 
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl shadow-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold">Our Location</h3>
                      <p className="text-foreground/70">KWAME NKRUMAH UNIVERSITY OF SCIENCE AND TECHNOLOGY</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold">Phone Number</h3>
                      <p className="text-foreground/70">054 123 7516</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold">Email Address</h3>
                      <p className="text-foreground/70">hello@bobainn.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-foreground/70">Monday-Friday: 9:00 AM - 10:00 PM</p>
                      <p className="text-foreground/70">Saturday: 10:00 AM - 11:00 PM</p>
                      <p className="text-foreground/70">Sunday: 10:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="glass-card p-4 rounded-xl overflow-hidden h-[300px] shadow-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
                  <p className="text-center text-foreground/60">
                    Map will be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-bold mb-2">Do you offer delivery?</h3>
                <p className="text-foreground/80">
                  Yes, we offer delivery within a 5km radius of our store. Orders can be placed through our website or by calling our store directly.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold mb-2">Can I customize my drink?</h3>
                <p className="text-foreground/80">
                  Absolutely! You can customize the sweetness level, ice level, and add extra toppings to any of our drinks.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-bold mb-2">Do you have dairy-free options?</h3>
                <p className="text-foreground/80">
                  Yes, we offer almond milk, oat milk, and coconut milk as alternatives for many of our drinks.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-bold mb-2">Do you cater for events?</h3>
                <p className="text-foreground/80">
                  Yes, we offer catering services for events of all sizes. Please contact us for more details and pricing.
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

export default ContactPage;
