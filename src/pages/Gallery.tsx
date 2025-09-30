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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleries: GalleryItem[] = [
    {
      id: 'natural-flowers',
      title: 'Natural Flower Decorations',
      description: 'Beautiful natural flower arrangements for all occasions',
      thumbnail: '/1.jpg',
      images: [
        '/1.jpg',
        '/2.jpg',
        '/3.jpg',
        '/4.jpg',
        '/5.jpg',
        '/6.jpg',
        '/7.jpg',
        '/8.jpg',
        '/9.jpg',
        '/10.jpg',
        '/11.jpg',
        '/12.jpg',
        '/13.jpg',
        '/14.jpg',
        '/15.jpeg',
        '/16.jpg',
        '/17.jpg',
        '/18.jpg',
        '/19.jpg',
        '/20.jpg',
        '/21.jpg',
        '/22.jpg',
        '/23.jpg',
        '/24.jpg',
        '/25.jpg',
        '/26.jpg',
        '/27.jpg',
        '/28.jpg',
        '/29.jpg',
        '/30.jpg',
        '/31.jpg',
        '/32.jpg',
        '/33.jpg',
        '/34.jpg',
        '/35.jpg',
        '/36.jpg',
        '/37.jpg',
        '/38.jpg',
        '/39.jpg',
        '/40.jpg',
        '/41.jpg',
        '/42.jpg',
        '/43.jpg',
        '/44.jpg',
        '/45.jpg',
        '/46.jpg',
        '/47.jpg',
        '/48.jpg',
        '/49.jpg',
        '/50.jpg',
        '/51.jpg',
        '/52.jpg',
        '/53.jpg',
        '/54.jpg',
        '/55.jpg',
        '/56.jpg',
        '/57.jpg',
        '/58.jpg',
        '/59.jpg',
        '/60.jpg',
        '/61.jpg',
        '/62.jpg'
      ]
    },
  
    {
      id: 'night-lightings',
      title: 'Night Lightings',
      description: 'Stunning lighting arrangements for evening celebrations',
      thumbnail: '/light.jpg',
      images: [
       'data:image/webp;base64,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',
      ]
    },
    {
      id: 'haldi-events',
      title: 'Haldi Events',
      description: 'Traditional decorations for haldi ceremonies',
      thumbnail: '/haldii.jpg',
      images: [
        'https://th.bing.com/th/id/OIP.dsR_LGNQQd5ApYtap4BEkAHaHa?w=186&h=186&c=7&r=0&o=7&pid=1.7&rm=3',
        'https://th.bing.com/th/id/OIP.1Cc6FohhO2almixGNdYJ8AHaJP?w=156&h=194&c=7&r=0&o=5&pid=1.7',
        'https://th.bing.com/th/id/OIP.Ly509Zx7Lp2cYNJLaH-C9QHaHa?w=158&h=180&c=7&r=0&o=5&pid=1.7',
        'https://th.bing.com/th/id/OIP.hZHejjhaMFs9XgwyrsXK5gHaJQ?w=172&h=214&c=7&r=0&o=5&pid=1.7',
        'https://tse3.mm.bing.net/th/id/OIP.JnCcPd92TGe69NZUBPVtPQHaIv?pid=ImgDet&w=191&h=225&c=7&o=7&rm=3',
        'https://tse3.mm.bing.net/th/id/OIP.1qEumV6OLYUBJfF771yUugHaHp?pid=ImgDet&w=191&h=197&c=7&o=7&rm=3',
        'https://tse3.mm.bing.net/th/id/OIP.BQL_4Jmy-n0OrqjoQxSefgHaHa?pid=ImgDet&w=191&h=191&c=7&o=7&rm=3',
        'https://tse4.mm.bing.net/th/id/OIP.MRMlCCdLuzQTyYa-NpUNwgHaNK?pid=ImgDet&w=188&h=333&c=7&o=7&rm=3',
        'https://tse2.mm.bing.net/th/id/OIP.lRJ7JNtuj9L3L2TQU5rPhAHaJJ?pid=ImgDet&w=191&h=235&c=7&o=7&rm=3',
        'https://tse1.mm.bing.net/th/id/OIP.t796sGlztpdv22LFlDhWHgHaJQ?pid=ImgDet&w=191&h=238&c=7&o=7&rm=3',
        'https://tse4.mm.bing.net/th/id/OIP.05xXX5PkBf20LHI1wJqoNAHaJ3?pid=ImgDet&w=191&h=254&c=7&o=7&rm=3',
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