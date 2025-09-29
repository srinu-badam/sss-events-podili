import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Heart, Star, Award } from 'lucide-react';

const About: React.FC = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: iconsRef, inView: iconsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Sparkles,
      title: 'Creative Designs',
      description: 'Unique and innovative decoration concepts for every occasion'
    },
    {
      icon: Heart,
      title: 'Passionate Service',
      description: 'We pour our heart into every decoration project we undertake'
    },
    {
      icon: Star,
      title: 'Quality Materials',
      description: 'Only the finest flowers and decorative materials for your events'
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'Years of experience delivering exceptional decoration services'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Works</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto mb-6"></div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: -20 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome to SSS Events</h2>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                At SSS Events, we transform your special moments into unforgettable memories. 
                With years of experience in the decoration industry, we specialize in creating breathtaking environments 
                that perfectly capture the essence of your celebrations.
              </p>
              
              <p>
                Our expertise spans across various event types, from traditional ceremonies to modern celebrations. 
                Whether you're planning a wedding, festival, corporate event, or any special occasion, we bring 
                creativity, professionalism, and attention to detail to every project.
              </p>
              
              <p>
                Under the leadership of <strong>Badam Sudhakar Reddy</strong>, our team is committed to delivering 
                exceptional service that exceeds your expectations. We believe that every celebration deserves to be 
                beautiful, and we're here to make that vision a reality.
              </p>
              
              <p>
                From elegant natural flower arrangements to stunning lighting setups, we handle every aspect of 
                decoration with care and precision. Our goal is to create an atmosphere that not only looks beautiful 
                but also feels magical for you and your guests.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          ref={iconsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={iconsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">Why Choose Us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={iconsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <feature.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;