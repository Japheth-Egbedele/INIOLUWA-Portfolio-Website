import { motion } from 'framer-motion';

export default function WaterBackground() {
  return (
    <div className="fixed inset-0 water-bg -z-10">
      {/* Animated Water Surface */}
      <div className="water-surface" />
      
      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Bubble key={i} index={i} />
        ))}
      </div>

      {/* Light Caustics Effect */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full">
          <defs>
            <filter id="turbulence">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.01" 
                numOctaves="3" 
                result="noise"
              >
                <animate 
                  attributeName="baseFrequency" 
                  dur="20s" 
                  values="0.01;0.02;0.01" 
                  repeatCount="indefinite" 
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
            </filter>
          </defs>
          <rect 
            width="100%" 
            height="100%" 
            fill="url(#caustics)" 
            filter="url(#turbulence)"
            opacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
}

function Bubble({ index }) {
  const size = Math.random() * 100 + 50;
  const left = Math.random() * 100;
  const delay = index * 2;
  const duration = Math.random() * 10 + 15;

  return (
    <motion.div
      className="absolute rounded-full bg-white/10 backdrop-blur-sm"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        bottom: -size,
      }}
      animate={{
        y: [0, -window.innerHeight - size * 2],
        x: [0, Math.sin(index) * 50, 0],
        opacity: [0, 0.3, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
