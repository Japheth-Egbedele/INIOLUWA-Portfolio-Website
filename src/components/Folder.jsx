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
      {/* Active glow */}
      {isActive && (
        <div className="absolute inset-0 bg-white/30 blur-xl rounded-full -z-10" />
      )}

      <div className={`
        w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center relative overflow-hidden
        bg-gradient-to-br ${folder.color}
        transition-all duration-300 shadow-lg
        ${isActive
          ? 'ring-2 ring-white/80 shadow-xl'
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
      <span className="text-[10px] md:text-xs font-medium text-white whitespace-nowrap">
        {folder.label}
      </span>
    </motion.button>
  );
}
