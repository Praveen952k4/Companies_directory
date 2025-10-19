import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useMemo } from 'react';

const AnimatedBackground = () => {
  const { isDark } = useTheme();

  // Generate random particles (optimized with useMemo)
  const particles = useMemo(() => 
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 1,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 5
    })), []
  );

  // Generate stars for dark mode
  const stars = useMemo(() => 
    Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 3
    })), []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced Gradient Background with Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`absolute inset-0 transition-all duration-1000 ${
          isDark 
            ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
            : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
        }`}
      >
        {/* Animated Gradient Overlay */}
        <motion.div 
          className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-tr from-indigo-900/40 via-violet-900/30 to-fuchsia-900/40' 
              : 'bg-gradient-to-tr from-cyan-100/40 via-violet-100/30 to-rose-100/40'
          }`}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />
      </motion.div>

      {/* Theme-Specific Effects */}
      {isDark ? (
        <>
          {/* Dark Mode: Starfield Effect */}
          {stars.map((star) => (
            <motion.div
              key={`star-${star.id}`}
              className="absolute rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Dark Mode: Vibrant Glow Boxes */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-3xl"
            style={{ 
              top: '15%', 
              left: '8%',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(139, 92, 246, 0.7) 50%, rgba(168, 85, 247, 0.5) 100%)',
              filter: 'blur(25px)',
              boxShadow: '0 0 120px rgba(139, 92, 246, 0.8), inset 0 0 60px rgba(139, 92, 246, 0.3)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 5, 0],
              x: [0, 20, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute w-[600px] h-[600px] rounded-3xl"
            style={{ 
              bottom: '10%', 
              right: '8%',
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(59, 130, 246, 0.7) 50%, rgba(37, 99, 235, 0.5) 100%)',
              filter: 'blur(25px)',
              boxShadow: '0 0 140px rgba(59, 130, 246, 0.8), inset 0 0 70px rgba(59, 130, 246, 0.3)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0],
              x: [0, -20, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute w-[450px] h-[450px] rounded-3xl"
            style={{ 
              top: '40%', 
              right: '12%',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.9) 0%, rgba(219, 39, 119, 0.7) 50%, rgba(190, 24, 93, 0.5) 100%)',
              filter: 'blur(25px)',
              boxShadow: '0 0 110px rgba(236, 72, 153, 0.8), inset 0 0 55px rgba(236, 72, 153, 0.3)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 3, 0],
              x: [0, 25, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </>
      ) : (
        <>
          {/* Light Mode: Soft Shimmer Particles */}
          {particles.slice(0, 30).map((particle) => (
            <motion.div
              key={`shimmer-${particle.id}`}
              className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-[0_0_8px_rgba(168,85,247,0.5)]"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Light Mode: Vibrant Glow Boxes */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-3xl"
            style={{ 
              top: '15%', 
              left: '8%',
              background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.6) 0%, rgba(196, 181, 253, 0.5) 50%, rgba(221, 214, 254, 0.4) 100%)',
              filter: 'blur(30px)',
              boxShadow: '0 0 100px rgba(139, 92, 246, 0.5), inset 0 0 50px rgba(196, 181, 253, 0.3)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 5, 0],
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute w-[600px] h-[600px] rounded-3xl"
            style={{ 
              bottom: '10%', 
              right: '8%',
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.6) 0%, rgba(125, 211, 252, 0.5) 50%, rgba(186, 230, 253, 0.4) 100%)',
              filter: 'blur(30px)',
              boxShadow: '0 0 110px rgba(59, 130, 246, 0.5), inset 0 0 55px rgba(125, 211, 252, 0.3)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0],
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute w-[450px] h-[450px] rounded-3xl"
            style={{ 
              top: '40%', 
              right: '12%',
              background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.6) 0%, rgba(251, 182, 206, 0.5) 50%, rgba(252, 231, 243, 0.4) 100%)',
              filter: 'blur(30px)',
              boxShadow: '0 0 95px rgba(236, 72, 153, 0.5), inset 0 0 48px rgba(251, 182, 206, 0.3)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 3, 0],
              x: [0, 20, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </>
      )}

      {/* Floating Particles (Universal) */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className={`absolute rounded-full ${
            isDark 
              ? 'bg-purple-400/40 shadow-[0_0_15px_rgba(168,85,247,0.5)]' 
              : 'bg-purple-400/60 shadow-[0_0_10px_rgba(168,85,247,0.4)]'
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Radial Gradient Vignette */}
      <div 
        className={`absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]'
            : 'bg-[radial-gradient(circle_at_center,transparent_20%,rgba(255,255,255,0.3)_100%)]'
        }`}
      />
    </div>
  );
};

export default AnimatedBackground;
