import { motion } from 'framer-motion';

export default function Shelf({ children }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-6 md:mb-8">
      <div className="glass rounded-2xl md:rounded-3xl p-3 md:p-6 shadow-2xl">
        {/* On mobile: flex-nowrap + overflow-x-auto + scrollbar-hide
            On desktop: flex-wrap + justify-center 
        */}
        <div className="flex items-end gap-3 md:gap-4 overflow-x-auto pb-2 md:pb-0 md:overflow-visible scrollbar-hide justify-start md:justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
