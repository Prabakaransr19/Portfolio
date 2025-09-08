import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    { name: 'React', level: 65, color: 'neon-blue' },
    { name: 'Java', level: 85, color: 'neon-green' },
    { name: 'Python', level: 75, color: 'neon-blue' },
    { name: 'DSA', level: 80, color: 'neon-green' },
    { name: 'SQL', level: 70, color: 'neon-pink' },
    { name: 'Mango-DB', level: 55, color: 'neon-blue' },
    { name: 'Artificial Intelligence', level: 90, color: 'neon-green' },
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-green">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across modern technologies and frameworks
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <Card className="card-glow p-6 group cursor-pointer">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {skill.name}
                  </h3>
                  <span className={`text-${skill.color} font-mono text-sm`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${
                      skill.color === 'neon-green' ? 'from-neon-green to-neon-green/80' :
                      skill.color === 'neon-blue' ? 'from-neon-blue to-neon-blue/80' :
                      'from-neon-pink to-neon-pink/80'
                    }`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{
                      boxShadow: `0 0 10px ${
                        skill.color === 'neon-green' ? 'hsl(var(--neon-green) / 0.5)' :
                        skill.color === 'neon-blue' ? 'hsl(var(--neon-blue) / 0.5)' :
                        'hsl(var(--neon-pink) / 0.5)'
                      }`
                    }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;