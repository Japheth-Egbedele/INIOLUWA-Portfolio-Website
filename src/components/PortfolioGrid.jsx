import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Clock, X } from 'lucide-react';

const ACCENT_GRADIENT = 'from-emerald-400 to-teal-500';

export default function PortfolioGrid({ content }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  if (!content) return null;

  return (
    <div className="w-full py-2 md:py-4">
      <motion.div
        className="mb-6 md:mb-10 flex flex-wrap items-baseline gap-3 md:gap-4"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        key={content.id}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`w-1 h-7 md:h-9 rounded-full bg-gradient-to-b ${ACCENT_GRADIENT} shrink-0`} />
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-50">
          {content.label}
        </h2>
        <span className="text-sm text-zinc-500 tabular-nums">
          {content.items.length} {content.items.length === 1 ? 'video' : 'videos'}
        </span>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
        layout
      >
        <AnimatePresence mode="popLayout">
          {content.items.map((item, index) => (
            <VideoCard
              key={`${content.id}-${item.id}`}
              item={item}
              index={index}
              onClick={() => item.youtubeId && setSelectedVideo(item)}
            />
          ))}
        </AnimatePresence>

        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      </motion.div>
    </div>
  );
}

function VideoCard({ item, index, onClick }) {
  return (
    <motion.div
      className="video-card rounded-xl overflow-hidden cursor-pointer group border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/20"
      onClick={onClick}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: index * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
        {item.youtubeId ? (
          <img
            src={`https://img.youtube.com/vi/${item.youtubeId}/mqdefault.jpg`}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
          <motion.div
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-4 h-4 md:w-5 md:h-5 text-zinc-800 ml-0.5" fill="currentColor" />
          </motion.div>
        </div>

        <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 backdrop-blur-sm">
          <Clock size={10} />
          <span>{item.duration}</span>
        </div>

        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      </div>

      <div className="p-3 md:p-4">
        <h3 className="text-zinc-200 font-medium text-xs md:text-sm truncate leading-snug">
          {item.title}
        </h3>
        <div className={`mt-2 h-0.5 rounded-full bg-gradient-to-r ${ACCENT_GRADIENT} w-1/2 opacity-90`} />
      </div>
    </motion.div>
  );
}

function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          className="relative z-10 w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black/80 rounded-full transition-colors border border-white/10"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="absolute top-4 left-4 z-20 max-w-[75%]">
            <h3 className="text-white font-medium text-sm md:text-base drop-shadow-md">{video.title}</h3>
          </div>

          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
