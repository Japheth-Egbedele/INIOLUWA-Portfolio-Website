import { motion, AnimatePresence } from 'framer-motion';
import { Play, Clock } from 'lucide-react';

export default function PortfolioGrid({ content }) {
  if (!content) return null;

  return (
    <div className="w-full max-w-6xl mx-auto px-2 md:px-4 py-4 md:py-8">
      {/* Section Title */}
      <motion.div
        className="mb-4 md:mb-6 flex items-center space-x-2 md:space-x-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        key={content.id}
      >
        <div className={`w-1 h-6 md:h-8 rounded-full bg-gradient-to-b ${content.color}`} />
        <h2 className="text-lg md:text-2xl font-bold text-white text-shadow">
          {content.label}
        </h2>
        <span className="text-white/70 text-xs md:text-sm">
          {content.items.length} videos
        </span>
      </motion.div>

      {/* Video Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4"
        layout
      >
        <AnimatePresence mode="popLayout">
          {content.items.map((item, index) => (
            <VideoCard
              key={`${content.id}-${item.id}`}
              item={item}
              index={index}
              color={content.color}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function VideoCard({ item, index, color }) {
  return (
    <motion.div
      className="video-card glass rounded-xl overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ y: -8 }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <motion.div
            className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-4 h-4 md:w-6 md:h-6 text-gray-800 ml-0.5 md:ml-1" fill="currentColor" />
          </motion.div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center space-x-1">
          <Clock size={10} />
          <span>{item.duration}</span>
        </div>

        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      {/* Title */}
      <div className="p-2 md:p-3">
        <h3 className="text-white font-medium text-xs md:text-sm truncate text-shadow">
          {item.title}
        </h3>
        <div className={`mt-1.5 md:mt-2 h-0.5 md:h-1 rounded-full bg-gradient-to-r ${color} w-2/3`} />
      </div>
    </motion.div>
  );
}
