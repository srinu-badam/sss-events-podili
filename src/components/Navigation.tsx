import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Gallery', path: 'gallery' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-teal-950/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="SSS Events Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-white ">SSS Events</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => scrollToSection(item.path)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.path
                      ? 'bg-teal-600 text-white'
                      : 'text-white hover:bg-teal-600 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-teal-300 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => scrollToSection(item.path)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  activeSection === item.path
                    ? 'bg-teal-100 text-teal-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;