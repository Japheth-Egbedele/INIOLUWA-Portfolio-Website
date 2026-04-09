import { motion } from 'framer-motion';

export default function Shelf({ children }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-6 md:mb-8">
      <div className="glass rounded-2xl md:rounded-3xl p-3 md:p-6 shadow-2xl">
        {/* All folders in flex row - scrollable on mobile, centered on desktop */}
        <div className="flex items-end justify-center gap-2 md:gap-4 flex-wrap md:flex-nowrap">
          {children}
        </div>
      </div>
    </div>
  );
}
