import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Heart, Star, Award, Home, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: iconsRef, inView: iconsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Home,
      title: 'Best Tenthouse in Podili for Weddings & Events',
      tagline: 'Elegant, spacious, and beautifully designed tenthouses in Podili to make your special day unforgettable.',
      description: 'Looking for the best tenthouse in Podili? We provide stylish and comfortable tent setups for weddings, receptions, birthdays, and all types of events. Our tenthouse Podili services are designed to give your special occasion a grand and elegant look with modern as well as traditional touches.'
    },
    {
      icon: Sparkles,
      title: 'Stunning Decorations in Podili for Every Occasion',
      tagline: 'From weddings to birthdays, our creative decoration services in Podili bring your dream celebrations to life.',
      description: 'Make your celebrations unforgettable with our decorations in Podili. From weddings and engagements to birthdays and corporate events, we bring creative ideas to life. Our team specializes in flower decorations, stage decorations, and custom theme setups to make your event unique.'
    },
    {
      icon: Heart,
      title: 'Colorful & Traditional Haldi Decorations in Podili',
      tagline: 'Celebrate your Haldi in style with floral backdrops, marigold setups, and vibrant decorations in Podili.',
      description: 'The Haldi ceremony is one of the most colorful and fun parts of a wedding. We offer exclusive haldi decorations in Podili, including floral backdrops, marigold arrangements, traditional setups, and unique lighting effects to add joy and charm to your Haldi event.'
    },
    {
      icon: Lightbulb,
      title: 'Event Lighting Services in Podili That Brighten Every Moment',
      tagline: 'Transform your venue with fairy lights, LED effects, and decorative lighting setups in Podili.',
      description: 'Good lighting can transform any event! Our event lighting services in Podili include fairy lights, LED stage lights, decorative chandeliers, and outdoor ambient setups. We ensure your event shines bright and creates the perfect atmosphere for your guests.'
    },
    {
      icon: Award,
      title: 'Complete Wedding & Event Services in Podili',
      tagline: 'From mandap decorations to modern event setups, we are Podili\'s trusted event planners.',
      description: 'From marriage mandap decorations in Podili to birthday parties and modern event setups, we are your one-stop solution. Our event planners in Podili bring creativity, quality, and affordability together to make every occasion memorable.'
    },
    {
      icon: Star,
      title: 'Beautiful Flower & Stage Decorations in Podili',
      tagline: 'Add elegance to your event with premium floral arrangements and customized stage setups in Podili.',
      description: 'Transform your venue with our exquisite flower decorations Podili and professional stage decoration Podili services. We create stunning floral arrangements and customized stage setups that perfectly complement your celebration theme.'
    }
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'Creative Designs',
      description: 'Unique and innovative decoration concepts for every occasion in Podili'
    },
    {
      icon: Heart,
      title: 'Passionate Service',
      description: 'We pour our heart into every decoration project we undertake in Podili'
    },
    {
      icon: Star,
      title: 'Quality Materials',
      description: 'Only the finest flowers and decorative materials for your events in Podili'
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'Years of experience delivering exceptional decoration services in Podili'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About SSS Events - Premier Event Planners Podili</h1>
          <p className="text-xl text-gray-600">Your trusted partner for wedding decorations, tenthouse, and lighting services in Podili</p>
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome to SSS Events - Leading Decorations Podili</h2>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                At SSS Events, we are Podili's most trusted event planners, transforming your special moments into unforgettable memories. 
                With years of experience in wedding decorations Podili, tenthouse Podili, and lighting services, we specialize in creating breathtaking environments 
                that perfectly capture the essence of your celebrations.
              </p>
              
              <p>
                Our expertise spans across various event types in Podili, from traditional ceremonies to modern celebrations. 
                Whether you're planning wedding decorations Podili, haldi decorations Podili, birthday decorations Podili, or any special occasion, we bring 
                creativity, professionalism, and attention to detail to every project in Podili and surrounding areas.
              </p>
              
              <p>
                Under the leadership of <strong>Badam Sudhakar Reddy</strong>, our team is committed to delivering 
                exceptional decoration services that exceed your expectations. We believe that every celebration in Podili deserves to be 
                beautiful, and we're here to make that vision a reality with our comprehensive event planning services.
              </p>
              
              <p>
                From elegant flower decorations Podili to stunning stage decoration Podili and modern event setups Podili, we handle every aspect of 
                decoration with care and precision. Our goal is to create an atmosphere that not only looks beautiful 
                but also feels magical for you and your guests throughout Podili and Prakasam District.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Premium Services in Podili</h3>
          
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <service.icon size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h4>
                    <p className="text-teal-600 font-medium mb-3 italic">{service.tagline}</p>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          ref={iconsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={iconsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">Why Choose SSS Events for Your Celebrations in Podili</h3>
          
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