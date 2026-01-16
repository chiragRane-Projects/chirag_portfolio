'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workType: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Business Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Work Required:* ${formData.workType}%0A%0APlease contact me for further discussion.`;
    
    const whatsappURL = `https://wa.me/+918591307204?text=${message}`;
    
    window.open(whatsappURL, '_blank');
    
    setFormData({ name: '', email: '', phone: '', workType: '' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Contact Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gold-600 hover:bg-gold-500 text-white shadow-2xl border-2 border-gold-400 group"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </Button>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-stone-950 border-2 border-gold-600/30 p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-stone-500 mb-2">
                  Make an Offer
                </h3>
                <p className="text-stone-400 text-sm">
                  State your business. We'll discuss terms.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-stone-300 text-sm uppercase tracking-wider">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 bg-transparent border-stone-700 text-white focus:border-gold-500 rounded-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-stone-300 text-sm uppercase tracking-wider">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 bg-transparent border-stone-700 text-white focus:border-gold-500 rounded-none"
                    placeholder="your.email@domain.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-stone-300 text-sm uppercase tracking-wider">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-2 bg-transparent border-stone-700 text-white focus:border-gold-500 rounded-none"
                    placeholder="+91 85913 07204"
                  />
                </div>

                <div>
                  <Label htmlFor="workType" className="text-stone-300 text-sm uppercase tracking-wider">
                    What Work Do You Need?
                  </Label>
                  <Input
                    id="workType"
                    name="workType"
                    value={formData.workType}
                    onChange={handleInputChange}
                    required
                    className="mt-2 bg-transparent border-stone-700 text-white focus:border-gold-500 rounded-none"
                    placeholder="Web development, mobile app, etc."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold-600 hover:bg-gold-500 text-slate-300 font-bold uppercase tracking-wider py-3 rounded-none border-2 border-gold-400 transition-all duration-300"
                >
                  Send Message via WhatsApp
                </Button>
              </form>

              {/* Footer Note */}
              <p className="text-stone-500 text-xs text-center mt-6">
                This will open WhatsApp with your message pre-filled
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}