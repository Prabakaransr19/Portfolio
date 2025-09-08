import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact = () => {
  const socials = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Prabakaransr19',
      color: 'neon-green',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/prabakaransr19/',
      color: 'neon-blue',
      description: 'Professional network'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://x.com/prabakaransr_31',
      color: 'neon-pink',
      description: 'Tech thoughts & updates'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:prabakaransr198@gmail.com',
      color: 'neon-green',
      description: 'Get in touch directly'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="contact" className="py-20 px-6 relative z-10 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project or just want to say hello? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socials.map((social) => (
            <motion.div key={social.name} variants={itemVariants}>
              <Card className="card-glow p-6 group cursor-pointer h-full">
              <motion.a
                href={social.url}
                target={social.url.startsWith("mailto:") ? "_self" : "_blank"}
                rel={!social.url.startsWith("mailto:") ? "noopener noreferrer" : undefined}
                className="flex items-center space-x-4 h-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 rounded-full border-2 border-${social.color} flex items-center justify-center`}
                    whileHover={{ 
                      rotate: 10,
                      boxShadow: `0 0 30px ${
                        social.color === 'neon-green' ? 'hsl(var(--neon-green) / 0.5)' :
                        social.color === 'neon-blue' ? 'hsl(var(--neon-blue) / 0.5)' :
                        'hsl(var(--neon-pink) / 0.5)'
                      }`
                    }}
                    style={{
                      boxShadow: `0 0 20px ${
                        social.color === 'neon-green' ? 'hsl(var(--neon-green) / 0.2)' :
                        social.color === 'neon-blue' ? 'hsl(var(--neon-blue) / 0.2)' :
                        'hsl(var(--neon-pink) / 0.2)'
                      }`
                    }}
                  >
                    <social.icon className={`w-6 h-6 text-${social.color}`} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {social.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {social.description}
                    </p>
                  </div>
                </motion.a>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;