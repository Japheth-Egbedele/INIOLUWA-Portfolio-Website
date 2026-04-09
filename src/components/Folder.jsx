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
      className={`flex flex-col items-center space-y-1 flex-shrink-0 transition-all cursor-pointer ${isActive ? 'scale-110' : 'opacity-80 hover:opacity-100'
        }`}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={`
        w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center
        transition-all duration-300
        ${isActive
          ? 'bg-white shadow-lg shadow-white/25'
          : 'glass hover:bg-white/40'
        }
      `}>
        <IconComponent
          className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-300 ${isActive ? 'text-blue-500' : 'text-white'
            }`}
          strokeWidth={1.5}
        />
      </div>
      <span className="text-[10px] md:text-xs font-medium text-white whitespace-nowrap">
        {folder.label}
      </span>
    </motion.button>
  );
}
