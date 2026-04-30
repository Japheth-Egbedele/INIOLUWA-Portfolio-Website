import { motion } from 'framer-motion';
import {
  Film,
  Type,
  Briefcase,
  Mic,
  Calendar,
  User
} from 'lucide-react';

const iconMap = {
  reels: Film,
  text: Type,
  brand: Briefcase,
  podcast: Mic,
  events: Calendar,
  talking: User,
};

export default function Folder({ folder, isActive, onClick }) {
  const IconComponent = iconMap[folder.icon] || Film;

  return (
    <motion.button
      onClick={onClick}
      className={`flex flex-col items-center space-y-1 flex-shrink-0 transition-all cursor-pointer relative ${isActive ? 'scale-110' : 'opacity-90 hover:opacity-100'
        }`}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Active rotating ring with colorful orbiting balls */}
      {isActive && (
        <motion.div
          className="absolute inset-0 -m-4 md:-m-6 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          {/* 3 colorful orbiting balls */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/60 ring-2 ring-white" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 md:w-3 md:h-3 bg-cyan-400 rounded-full shadow-md shadow-cyan-400/50 ring-2 ring-white" />
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-2.5 md:h-2.5 bg-amber-400 rounded-full shadow-md shadow-amber-400/50 ring-2 ring-white" />
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-2.5 md:h-2.5 bg-rose-400 rounded-full shadow-md shadow-rose-400/50 ring-2 ring-white" />
        </motion.div>
      )}

      {/* Active glow */}
      {isActive && (
        <div className="absolute inset-0 bg-white/20 blur-xl rounded-full -z-10" />
      )}

      <div className={`
        w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center relative overflow-hidden
        bg-gradient-to-br ${folder.color}
        transition-all duration-300 shadow-lg
        ${isActive
          ? 'ring-2 ring-white/60 shadow-2xl'
          : 'hover:shadow-xl'
        }
      `}>
        {/* Glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />

        <IconComponent
          className="w-6 h-6 md:w-8 md:h-8 text-white relative z-10 drop-shadow-md"
          strokeWidth={1.5}
        />
      </div>
      <span className={`text-[10px] md:text-xs font-semibold whitespace-nowrap ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
        {folder.label}
      </span>
    </motion.button>
  );
}
