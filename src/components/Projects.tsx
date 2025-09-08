import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Weather Dashboard',
      description: 'A sleek weather app showing real-time conditions, forecasts, and location-based insights.',
      tech: ['React', 'OpenWeather API', 'TailwindCSS'],
      color: 'neon-green',
      github: 'https://github.com/Prabakaransr19/weather_application.git',
    },
    {
      title: 'Numeric Classification (MNIST)',
      description: 'Handwritten digit classifier built from scratch using the MNIST dataset with ML techniques.',
      tech: ['Python', 'NumPy', 'Matplotlib'],
      color: 'neon-blue',
      github: 'https://github.com/Prabakaransr19/NeuralNetworkFromScratch.git',
    },
    {
      title: 'Athena’s Archive',
      description: 'A student question bank database for organizing, searching, and managing academic resources.',
      tech: ['React', 'Supabase', 'PostgreSQL'],
      color: 'neon-pink',
      github: 'https://github.com/Prabakaransr19/Athena-s-Archive.git',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio showcasing skills, hobbies, projects, and socials in a neon cyberpunk style.',
      tech: ['React', 'TailwindCSS', 'Framer Motion'],
      color: 'neon-green',
      github: '#',
    },
    {
      title: 'Artvaani',
      description: 'A creative platform for sharing, exploring, and celebrating art in various forms.',
      tech: ['Next.js', 'TypeScript', 'Supabase'],
      color: 'neon-blue',
      github: 'https://github.com/Prabakaransr19/ArtVaani.git',
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-blue">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="card-glow p-6 h-full flex flex-col group">
                <div className="flex-1">
                  <motion.h3 
                    className={`text-xl font-bold mb-3 text-${project.color}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-muted rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`flex-1 border-${project.color} text-${project.color} hover:bg-${project.color} hover:text-background transition-all duration-300`}
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className={`flex-1 bg-${project.color} hover:bg-${project.color}/90 text-background transition-all duration-300`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;