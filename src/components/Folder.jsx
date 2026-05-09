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
  'talking-head': User,
};

export default function Folder({ folder, isActive, onClick }) {
  const IconComponent = iconMap[folder.icon] || Film;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`
        flex flex-col items-center gap-2 shrink-0 snap-center min-w-[4.5rem] md:min-w-0
        transition-colors duration-200 cursor-pointer
        ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}
      `}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <div
        className={`
          w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center relative
          border transition-all duration-200
          ${isActive
            ? 'bg-zinc-800 border-emerald-400/45 shadow-lg shadow-emerald-900/20 ring-1 ring-emerald-400/25'
            : 'bg-zinc-800/90 border-white/10 hover:border-white/15 hover:bg-zinc-800'
          }
        `}
      >
        <IconComponent
          className={`w-6 h-6 md:w-7 md:h-7 relative z-10 ${isActive ? 'text-emerald-300' : 'text-zinc-300'}`}
          strokeWidth={1.5}
        />
      </div>
      <span
        className={`
          text-[10px] md:text-xs font-medium text-center max-w-[5.5rem] leading-tight
          ${isActive ? 'text-zinc-100' : 'text-zinc-500'}
        `}
      >
        {folder.label}
      </span>
    </motion.button>
  );
}
