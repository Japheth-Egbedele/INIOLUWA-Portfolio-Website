import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { profileData } from '../data/portfolioData';

export default function ProfileWidget() {
  return (
    <motion.header
      className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start gap-4 md:gap-5">
        <div className="relative shrink-0">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-white/10 bg-black shadow-lg shadow-black/40 ring-1 ring-white/5">
            {profileData.avatar ? (
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl tracking-tight">
                  {profileData.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="min-w-0 flex-1 space-y-1">
          <p className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            Portfolio
          </p>
          <h1 className="text-xl md:text-3xl font-semibold tracking-tight text-zinc-50">
            {profileData.name}
          </h1>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl">
            {profileData.title}
          </p>
          <p className="text-xs md:text-sm text-zinc-500 pt-1 max-w-2xl leading-relaxed hidden sm:block">
            {profileData.bio}
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 text-xs md:text-sm text-zinc-500">
            <span>
              <strong className="text-zinc-200 font-semibold tabular-nums">{profileData.stats.projects}</strong>
              {' '}projects
            </span>
            <span className="text-zinc-700" aria-hidden>·</span>
            <span>
              <strong className="text-zinc-200 font-semibold tabular-nums">{profileData.stats.experience}</strong>
              {' '}experience
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 sm:ml-auto sm:pl-6 sm:border-l sm:border-white/10">
        <SocialIcon icon={FaInstagram} href={profileData.social.instagram} label="Instagram" />
        <SocialIcon icon={Mail} href={profileData.social.email} label="Email" />
        <SocialIcon icon={Phone} href={profileData.social.phone} label="Phone" />
      </div>
    </motion.header>
  );
}

function SocialIcon({ icon: Icon, href, label }) {
  return (
    <motion.a
      href={href}
      className="p-2.5 rounded-xl text-zinc-400 hover:text-emerald-300 bg-zinc-900/50 border border-white/5 hover:border-emerald-500/25 transition-colors"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      aria-label={label}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      <Icon size={18} />
    </motion.a>
  );
}
