import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Instagram, Facebook, MessageCircle, Phone, MapPin } from 'lucide-react';
import ReligionSymbols from '../components/ReligionSymbols';

const Home: React.FC = () => {
  const socialLinks = [
    { icon: Globe, label: 'Website', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: MessageCircle, label: 'WhatsApp', href: '#' },
    { icon: Phone, label: 'Call', href: 'tel:9010791332' },
    { icon: MapPin, label: 'Location', href: '#' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      <div className="relative z-10 flex flex-col min-h-screen pt-20">
        {/* Religion Symbols */}
        <div className="flex-shrink-0 px-4 pt-8">
          <ReligionSymbols />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col items-center space-y-4">
              <img 
                src="/src/assets/images/image.png" 
                alt="SSS Events Logo"
                className="w-80 h-80 object-contain bg-white/10 backdrop-blur-sm rounded-full p-8 shadow-2xl"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                SSS Events
              </h1>
              <p className="text-xl text-white/90 text-center font-light">
                Decorations & Lightings
              </p>
            </div>
          </motion.div>

          {/* Proprietor Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Badam Sudhakar Reddy"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Badam Sudhakar Reddy</h2>
            <p className="text-white/80">Proprietor</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8"
          >
            {socialLinks.map(({ icon: Icon, label, href }, index) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Icon size={24} className="text-white mb-2" />
                <span className="text-xs text-white/80">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Designer Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-shrink-0 text-center pb-4"
        >
          <p className="text-white/60 text-sm italic">Designed by Srinu Badam</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;