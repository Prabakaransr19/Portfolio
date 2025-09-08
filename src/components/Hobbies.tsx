import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Gamepad2, Music, Book, Popcorn, Utensils, Brain } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      icon: Gamepad2,
      name: 'Gaming',
      description: 'Exploring virtual worlds and indie games',
      color: 'neon-green'
    },
    {
      icon: Music,
      name: 'Listening Music',
      description: 'Beats, energy, and endless vibes',
      color: 'neon-pink'
    },
    {
      icon: Brain,
      name: 'Chess',
      description: 'Strategy, focus, and smart moves',
      color: 'neon-blue'
    },
    {
      icon: Book,
      name: 'Story Books',
      description: 'Sci-fi, thrillers, and adventures',
      color: 'neon-green'
    },
    {
      icon: Popcorn,
      name: 'Movies & TV Shows',
      description: 'Dramas, anime, and epic sagas',
      color: 'neon-pink'
    },
    {
      icon: Utensils,
      name: 'Food',
      description: 'Tasting, exploring, and enjoying flavors',
      color: 'neon-blue'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="hobbies" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-pink">
            When I'm Not Coding
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring creativity and passion projects beyond the screen
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hobbies.map((hobby) => (
            <motion.div key={hobby.name} variants={itemVariants}>
              <Card className="card-glow p-6 group cursor-pointer h-full">
                <div className="text-center">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-${hobby.color} mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{
                      boxShadow: `0 0 20px ${
                        hobby.color === 'neon-green' ? 'hsl(var(--neon-green) / 0.3)' :
                        hobby.color === 'neon-blue' ? 'hsl(var(--neon-blue) / 0.3)' :
                        'hsl(var(--neon-pink) / 0.3)'
                      }`
                    }}
                  >
                    <hobby.icon 
                      className={`w-8 h-8 text-${hobby.color}`}
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {hobby.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {hobby.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;