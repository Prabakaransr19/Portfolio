import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnter = () => setCursorVariant('hover');
    const mouseLeave = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', mouseEnter);
      element.addEventListener('mouseleave', mouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', mouseEnter);
        element.removeEventListener('mouseleave', mouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      scale: 1.5,
      mixBlendMode: 'difference' as const,
    }
  };

  return (
    <>
      <motion.div
        className="cursor-glow fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28
        }}
        style={{
          width: '20px',
          height: '20px',
          background: 'hsl(var(--neon-green) / 0.8)',
          boxShadow: '0 0 20px hsl(var(--neon-green) / 0.6), 0 0 40px hsl(var(--neon-green) / 0.4)'
        }}
      />
      {/* Cursor trail effect */}
      <motion.div
        className="cursor-trail fixed top-0 left-0 pointer-events-none z-40 rounded-full"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          delay: 0.05
        }}
        style={{
          width: '6px',
          height: '6px',
          background: 'hsl(var(--neon-blue) / 0.6)',
        }}
      />
    </>
  );
};

export default CustomCursor;