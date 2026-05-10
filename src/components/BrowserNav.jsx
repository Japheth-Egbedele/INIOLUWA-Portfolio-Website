import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Home,
  Star,
  Moon,
  Sun,
} from 'lucide-react';

export default function BrowserNav({ theme, onToggleTheme }) {
  const [url, setUrl] = useState('inioluwa.portfolio');
  const [isSecure] = useState(true);
  const isLight = theme === 'light';

  return (
    <div
      className={`px-2 md:px-4 py-2.5 flex items-center gap-2 md:gap-3 sticky top-0 z-50 shadow-lg border-b transition-colors duration-300 ${
        isLight
          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-emerald-900/15 border-white/30'
          : 'bg-gradient-to-r from-emerald-700 to-teal-600 shadow-black/25 border-white/10'
      }`}
    >
      <div className="flex gap-1.5 md:gap-2 shrink-0">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-rose-400/90 shadow-sm" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-400/90 shadow-sm" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-300/90 shadow-sm ring-2 ring-white/25" />
      </div>

      <div className="flex items-center gap-0.5 shrink-0">
        <NavButton icon={ArrowLeft} isLight={isLight} />
        <div className="hidden sm:flex items-center gap-0.5">
          <NavButton icon={ArrowRight} isLight={isLight} />
          <NavButton icon={RefreshCw} onClick={() => window.location.reload()} isLight={isLight} />
        </div>
        <NavButton icon={Home} isLight={isLight} />
      </div>

      <div
        className={`flex-1 min-w-0 backdrop-blur-sm rounded-lg px-2.5 md:px-3 py-1.5 flex items-center gap-2 shadow-inner border transition-colors duration-300 ${
          isLight ? 'bg-white/85 border-white/70' : 'bg-white/12 border-white/10'
        }`}
      >
        {isSecure && (
          <svg
            className={`w-4 h-4 shrink-0 ${isLight ? 'text-emerald-700' : 'text-emerald-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        )}
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={`flex-1 min-w-0 bg-transparent text-xs md:text-sm outline-none font-medium ${
            isLight ? 'text-zinc-800 placeholder:text-zinc-500' : 'text-white placeholder:text-white/50'
          }`}
          aria-label="Address"
        />
        <Star
          className={`w-4 h-4 cursor-pointer transition-colors shrink-0 ${
            isLight ? 'text-amber-500 hover:text-amber-600' : 'text-amber-200/90 hover:text-amber-100'
          }`}
        />
      </div>

      <motion.button
        type="button"
        onClick={onToggleTheme}
        className={`p-2 rounded-xl border transition-colors shrink-0 ${
          isLight
            ? 'text-emerald-900 bg-white/85 border-white/70 hover:bg-white'
            : 'text-white bg-white/12 border-white/10 hover:bg-white/20'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
        title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      </motion.button>
    </div>
  );
}

function NavButton({ icon: Icon, onClick, isLight }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`p-1.5 rounded-lg transition-colors ${
        isLight
          ? 'text-emerald-950/80 hover:text-emerald-950 hover:bg-white/30'
          : 'text-white/90 hover:text-white hover:bg-white/15'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-4 h-4" />
    </motion.button>
  );
}
