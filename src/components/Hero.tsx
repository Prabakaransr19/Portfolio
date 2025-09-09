import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Profile Image */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-neon-green bg-card flex items-center justify-center shadow-neon-green relative overflow-hidden group cursor-pointer">
                {/* Your image */}
                  <img 
                    src="/profile.jpg" 
                    alt="Prabakaran S R" 
                    className="w-full h-full object-cover rounded-full" 
                  />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex items-center justify-center">
                  <span className="text-neon-green font-semibold text-sm">Upload Image</span>
                </div>
              </div>
              {/* Glowing ring animation */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-neon-blue/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  boxShadow: "0 0 30px hsl(var(--neon-blue) / 0.3)"
                }}
              />
            </div>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Prabakaran S R
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-4 text-neon-blue neon-pulse"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Tech Student / Explorer
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            A curious Tech Student & Explorer, building projects across web, AI, and cloud while learning something new every day.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg border border-primary shadow-neon-green hover:shadow-neon-green/80 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-3 text-lg shadow-neon-blue hover:shadow-neon-blue/80 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown 
            className="w-8 h-8 text-neon-green cursor-pointer" 
            onClick={() => scrollToSection('skills')}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
