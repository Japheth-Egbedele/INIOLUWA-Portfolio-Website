import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Home,
  Search,
  Star,
  Menu,
  X
} from 'lucide-react';

export default function BrowserNav() {
  const [url, setUrl] = useState('inioluwa.portfolio');
  const [isSecure, setIsSecure] = useState(true);

  return (
    <div className="browser-chrome px-2 md:px-4 py-2 flex items-center space-x-2 md:space-x-3 sticky top-0 z-50">
      {/* Window Controls - smaller on mobile */}
      <div className="flex space-x-1.5 md:space-x-2">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400" />
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
      <div className="flex-1 glass rounded-lg px-3 py-1.5 flex items-center space-x-2">
        {isSecure && (
          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        )}
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 bg-transparent text-xs md:text-sm text-gray-700 outline-none font-medium min-w-0"
        />
        <Star className="w-4 h-4 text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-2">
        <motion.button
          className="p-1.5 hover:bg-white/50 rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </motion.button>
      </div>
    </div>
  );
}

function NavButton({ icon: Icon, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="p-1.5 hover:bg-white/50 rounded-lg transition-colors text-gray-600"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-4 h-4" />
    </motion.button>
  );
}
