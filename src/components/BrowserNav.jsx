import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Home,
  Star,
} from 'lucide-react';

export default function BrowserNav() {
  const [url, setUrl] = useState('inioluwa.portfolio');
  const [isSecure] = useState(true);

  return (
    <div className="bg-gradient-to-r from-emerald-700 to-teal-600 px-2 md:px-4 py-2.5 flex items-center gap-2 md:gap-3 sticky top-0 z-50 shadow-lg shadow-black/25 border-b border-white/10">
      <div className="flex gap-1.5 md:gap-2 shrink-0">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-rose-400/90 shadow-sm" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-400/90 shadow-sm" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-300/90 shadow-sm ring-2 ring-white/25" />
      </div>

      <div className="flex items-center gap-0.5 shrink-0">
        <NavButton icon={ArrowLeft} />
        <div className="hidden sm:flex items-center gap-0.5">
          <NavButton icon={ArrowRight} />
          <NavButton icon={RefreshCw} onClick={() => window.location.reload()} />
        </div>
        <NavButton icon={Home} />
      </div>

      <div className="flex-1 min-w-0 bg-white/12 backdrop-blur-sm rounded-lg px-2.5 md:px-3 py-1.5 flex items-center gap-2 shadow-inner border border-white/10">
        {isSecure && (
          <svg className="w-4 h-4 text-emerald-200 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        )}
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 min-w-0 bg-transparent text-xs md:text-sm text-white placeholder:text-white/50 outline-none font-medium"
          aria-label="Address"
        />
        <Star className="w-4 h-4 text-amber-200/90 hover:text-amber-100 cursor-pointer transition-colors shrink-0" />
      </div>
    </div>
  );
}

function NavButton({ icon: Icon, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="p-1.5 rounded-lg transition-colors text-white/90 hover:text-white hover:bg-white/15"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-4 h-4" />
    </motion.button>
  );
}
