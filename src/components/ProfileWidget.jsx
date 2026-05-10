import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Phone, X } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { profileData } from '../data/portfolioData';

export default function ProfileWidget({ theme }) {
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const isLight = theme === 'light';

  useEffect(() => {
    if (!isAvatarOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsAvatarOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isAvatarOpen]);

  return (
    <>
      <motion.header
        className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-start gap-4 md:gap-5">
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => profileData.avatar && setIsAvatarOpen(true)}
              className={`group w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border shadow-lg ring-1 transition-all ${
                isLight
                  ? 'border-emerald-900/10 bg-white shadow-emerald-900/10 ring-emerald-900/5 hover:border-emerald-500/40'
                  : 'border-white/10 bg-black shadow-black/40 ring-white/5 hover:border-emerald-400/35'
              }`}
              aria-label={`View ${profileData.name} profile image`}
              disabled={!profileData.avatar}
            >
              {profileData.avatar ? (
                <span className="relative block w-full h-full">
                  <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="w-full h-full object-contain bg-black"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-black/0 text-[10px] font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-all group-hover:bg-black/35 group-hover:opacity-100">
                    View
                  </span>
                </span>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg md:text-xl tracking-tight">
                    {profileData.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
            </button>
          </div>

          <div className="min-w-0 flex-1 space-y-1">
            <p className={`text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] ${isLight ? 'text-emerald-700' : 'text-emerald-400/90'}`}>
              Portfolio
            </p>
            <h1 className={`text-xl md:text-3xl font-semibold tracking-tight ${isLight ? 'text-zinc-950' : 'text-zinc-50'}`}>
              {profileData.name}
            </h1>
            <p className={`text-sm md:text-base max-w-xl ${isLight ? 'text-zinc-700' : 'text-zinc-400'}`}>
              {profileData.title}
            </p>
            <p className={`text-xs md:text-sm pt-1 max-w-2xl leading-relaxed hidden sm:block ${isLight ? 'text-zinc-600' : 'text-zinc-500'}`}>
              {profileData.bio}
            </p>
            <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 text-xs md:text-sm ${isLight ? 'text-zinc-600' : 'text-zinc-500'}`}>
              <span>
                <strong className={`font-semibold tabular-nums ${isLight ? 'text-zinc-950' : 'text-zinc-200'}`}>{profileData.stats.projects}</strong>
                {' '}projects
              </span>
              <span className={isLight ? 'text-zinc-400' : 'text-zinc-700'} aria-hidden>·</span>
              <span>
                <strong className={`font-semibold tabular-nums ${isLight ? 'text-zinc-950' : 'text-zinc-200'}`}>{profileData.stats.experience}</strong>
                {' '}experience
              </span>
            </div>
          </div>
        </div>

        <div className={`flex items-center gap-4 sm:ml-auto sm:pl-6 sm:border-l ${isLight ? 'sm:border-emerald-900/10' : 'sm:border-white/10'}`}>
          <SocialIcon icon={FaInstagram} href={profileData.social.instagram} label="Instagram" theme={theme} />
          <SocialIcon icon={Mail} href={profileData.social.email} label="Email" theme={theme} />
          <SocialIcon icon={Phone} href={profileData.social.phone} label="Phone" theme={theme} />
        </div>
      </motion.header>

      <AnimatePresence>
        {isAvatarOpen && (
          <ProfileImageModal
            imageSrc={profileData.avatar}
            name={profileData.name}
            onClose={() => setIsAvatarOpen(false)}
            theme={theme}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function SocialIcon({ icon: Icon, href, label, theme }) {
  const isLight = theme === 'light';

  return (
    <motion.a
      href={href}
      className={`p-2.5 rounded-xl border transition-colors ${
        isLight
          ? 'text-zinc-600 hover:text-emerald-700 bg-white/80 border-emerald-900/10 hover:border-emerald-500/35 shadow-sm shadow-emerald-900/5'
          : 'text-zinc-400 hover:text-emerald-300 bg-zinc-900/50 border-white/5 hover:border-emerald-500/25'
      }`}
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

function ProfileImageModal({ imageSrc, name, onClose, theme }) {
  const isLight = theme === 'light';

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${name} profile image`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`absolute inset-0 backdrop-blur-sm ${isLight ? 'bg-zinc-950/65' : 'bg-black/85'}`}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className={`relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border shadow-2xl ${
          isLight ? 'bg-white border-white/70 shadow-emerald-950/20' : 'bg-zinc-950 border-white/10 shadow-black/60'
        }`}
        initial={{ scale: 0.96, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 10 }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
      >
        <button
          type="button"
          onClick={onClose}
          className={`absolute top-4 right-4 z-20 p-2 rounded-full border transition-colors ${
            isLight
              ? 'bg-white/85 hover:bg-white text-zinc-800 border-zinc-200'
              : 'bg-black/60 hover:bg-black/80 text-white border-white/10'
          }`}
          aria-label="Close profile image"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-4 md:p-6">
          <img
            src={imageSrc}
            alt={`${name} profile`}
            className="max-h-[75vh] w-full rounded-2xl object-contain bg-black"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
