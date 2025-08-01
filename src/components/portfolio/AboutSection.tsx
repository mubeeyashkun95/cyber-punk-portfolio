import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export const AboutSection = () => {
  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Three.js/R3F', level: 85 },
    { name: 'Node.js', level: 88 },
    { name: 'Python', level: 82 },
    { name: 'Blender', level: 75 },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who bridges the gap between traditional web development 
            and immersive 3D experiences, creating digital worlds that inspire and engage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-cyber-blue/20 shadow-cyber">
              <h3 className="text-2xl font-bold mb-6 text-cyber-blue">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 5 years of experience in web development, I've evolved from building 
                  traditional websites to creating immersive 3D experiences that push the boundaries 
                  of what's possible on the web.
                </p>
                <p>
                  My expertise spans across modern JavaScript frameworks, 3D graphics programming, 
                  and backend technologies, allowing me to deliver complete solutions that are both 
                  technically robust and visually stunning.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new 3D modeling techniques, 
                  contributing to open-source projects, or mentoring aspiring developers.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-cyber-purple/20 shadow-purple">
              <h3 className="text-2xl font-bold mb-6 text-cyber-purple">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-cyber-blue">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-gradient-cyber h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};