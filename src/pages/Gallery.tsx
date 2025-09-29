import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
}

const Gallery: React.FC = () => {
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);

  const galleries: GalleryItem[] = [
    {
      id: 'natural-flowers',
      title: 'Natural Flower Decorations',
      description: 'Beautiful natural flower arrangements for all occasions',
      thumbnail: 'https://images.pexels.com/photos/1071081/pexels-photo-1071081.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      images: [
        'https://images.pexels.com/photos/1071081/pexels-photo-1071081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444443/pexels-photo-1444443.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444444/pexels-photo-1444444.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444445/pexels-photo-1444445.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444446/pexels-photo-1444446.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444447/pexels-photo-1444447.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444448/pexels-photo-1444448.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444449/pexels-photo-1444449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444450/pexels-photo-1444450.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444451/pexels-photo-1444451.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444452/pexels-photo-1444452.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444453/pexels-photo-1444453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444454/pexels-photo-1444454.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444455/pexels-photo-1444455.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444456/pexels-photo-1444456.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444457/pexels-photo-1444457.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444458/pexels-photo-1444458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444459/pexels-photo-1444459.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444460/pexels-photo-1444460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444461/pexels-photo-1444461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444462/pexels-photo-1444462.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444463/pexels-photo-1444463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444464/pexels-photo-1444464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444465/pexels-photo-1444465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444466/pexels-photo-1444466.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444467/pexels-photo-1444467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444468/pexels-photo-1444468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444469/pexels-photo-1444469.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444470/pexels-photo-1444470.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444471/pexels-photo-1444471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444472/pexels-photo-1444472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444473/pexels-photo-1444473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444474/pexels-photo-1444474.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444475/pexels-photo-1444475.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444476/pexels-photo-1444476.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444477/pexels-photo-1444477.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444478/pexels-photo-1444478.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444479/pexels-photo-1444479.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444480/pexels-photo-1444480.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444481/pexels-photo-1444481.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444482/pexels-photo-1444482.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ]
    },
    {
      id: 'plastic-flowers',
      title: 'Plastic Flower Decorations',
      description: 'Durable and beautiful artificial flower arrangements',
      thumbnail: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      images: [
        'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1071081/pexels-photo-1071081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      ]
    },
    {
      id: 'night-lightings',
      title: 'Night Lightings',
      description: 'Stunning lighting arrangements for evening celebrations',
      thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      images: [
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1071081/pexels-photo-1071081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      ]
    },
    {
      id: 'haldi-events',
      title: 'Haldi Events',
      description: 'Traditional decorations for haldi ceremonies',
      thumbnail: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      images: [
        'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1071081/pexels-photo-1071081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      ]
    },
  ];

  const GalleryCard = ({ gallery, index }: { gallery: GalleryItem; index: number }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
        onClick={() => setSelectedGallery(gallery)}
      >
        <div className="relative overflow-hidden">
          <img
            src={gallery.thumbnail}
            alt={gallery.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{gallery.title}</h3>
          <p className="text-gray-600">{gallery.description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Gallery</h1>
          <p className="text-xl text-gray-600">Explore our beautiful decoration collections</p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleries.map((gallery, index) => (
            <GalleryCard key={gallery.id} gallery={gallery} index={index} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedGallery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedGallery(null)}
        >
          <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setSelectedGallery(null)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <h2 className="text-2xl font-bold text-white">{selectedGallery.title}</h2>
              <button
                onClick={() => setSelectedGallery(null)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedGallery.images.map((image, index) => (
                <motion.img
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  src={image}
                  alt={`${selectedGallery.title} ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={(e) => e.stopPropagation()}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/1071081/pexels-photo-1071081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop';
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;