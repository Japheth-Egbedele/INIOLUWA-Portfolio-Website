import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { profileData } from '../data/portfolioData';

export default function ProfileWidget() {
  return (
    <motion.div
      className="flex items-center space-x-3 md:space-x-4 pr-4 md:pr-6 md:border-r md:border-white/10 flex-shrink-0"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Avatar with green ring accent */}
      <div className="relative">
        <motion.div
          className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-emerald-400 shadow-lg shadow-emerald-400/30 ring-2 ring-emerald-300/50"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={profileData.avatar}
            alt={profileData.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Online indicator - emerald green */}
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />
        {/* Subtle green accent line beside avatar */}
        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 translate-x-full w-0.5 h-6 md:h-8 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full opacity-60" />
      </div>

      {/* Info */}
      <div className="min-w-[100px]">
        <h3 className="text-gray-900 font-bold text-sm md:text-lg leading-tight">
          {profileData.name}
        </h3>
        <p className="text-gray-600 text-[10px] md:text-xs truncate">
          {profileData.title}
        </p>

        {/* Stats - visible on both */}
        <div className="flex items-center space-x-2 mt-1 text-[10px] md:text-xs text-gray-600">
          <span className="font-medium">
            <strong className="text-gray-900">{profileData.stats.projects}</strong> projects
          </span>
          <span className="text-gray-400">|</span>
          <span className="font-medium">
            <strong className="text-gray-900">{profileData.stats.clients}</strong> clients
          </span>
        </div>

        {/* Social icons - hidden on mobile */}
        <div className="hidden md:flex items-center space-x-2 mt-2">
          <SocialIcon icon={FaInstagram} href={profileData.social.instagram} color="text-gray-500 hover:text-pink-500" />
          <SocialIcon icon={FaYoutube} href={profileData.social.youtube} color="text-gray-500 hover:text-red-500" />
          <SocialIcon icon={FaTwitter} href={profileData.social.twitter} color="text-gray-500 hover:text-blue-400" />
        </div>
      </div>
    </motion.div>
  );
}

function SocialIcon({ icon: Icon, href, color }) {
  return (
    <motion.a
      href={href}
      className={`text-gray-500 transition-colors ${color}`}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={14} />
    </motion.a>
  );
}
