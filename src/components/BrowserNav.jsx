import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Home,
  Search,
  Star,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function BrowserNav() {
  const [url, setUrl] = useState('inioluwa.portfolio');
  const [isSecure, setIsSecure] = useState(true);
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div className="bg-gradient-to-r from-emerald-600 to-teal-500 px-2 md:px-4 py-2 flex items-center space-x-2 md:space-x-3 sticky top-0 z-50 shadow-lg shadow-emerald-900/20">
      {/* Window Controls - smaller on mobile */}
      <div className="flex space-x-1.5 md:space-x-2">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-rose-400 shadow-sm" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-400 shadow-sm" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-300 shadow-sm ring-2 ring-white/30" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-1">
        <NavButton icon={ArrowLeft} />
        {/* Hide these on mobile to make room for the URL */}
        <div className="hidden sm:flex items-center space-x-1">
          <NavButton icon={ArrowRight} />
          <NavButton icon={RefreshCw} onClick={() => window.location.reload()} />
        </div>
        <NavButton icon={Home} />
      </div>

      {/* Address Bar */}
      <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center space-x-2 shadow-inner">
        {isSecure && (
          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        )}
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 bg-transparent text-xs md:text-sm text-emerald-800 outline-none font-medium min-w-0"
        />
        <Star className="w-4 h-4 text-amber-400 hover:text-amber-500 cursor-pointer transition-colors" />
      </div>

      {/* Right Side - Theme Toggle */}
      <div className="flex items-center space-x-2">
        <motion.button
          onClick={toggleTheme}
          className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          whileHover={{ scale: 1.05, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-300" />
          ) : (
            <Moon className="w-4 h-4 text-gray-800" />
          )}
        </motion.button>
      </div>
    </div>
  );
}

function NavButton({ icon: Icon, onClick }) {
  const { isDark } = useTheme();
  const textColor = isDark ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-gray-900';
  const bgHover = isDark ? 'hover:bg-white/20' : 'hover:bg-white/40';
  
  return (
    <motion.button
      onClick={onClick}
      className={`p-1.5 ${bgHover} rounded-lg transition-colors ${textColor}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-4 h-4" />
    </motion.button>
  );
}
