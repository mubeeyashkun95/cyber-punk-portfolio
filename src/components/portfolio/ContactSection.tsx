import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            <span className="bg-gradient-holographic bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate on your next project 
            and create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-cyber-blue/20 shadow-cyber">
              <h3 className="text-2xl font-bold mb-6 text-cyber-blue">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Name
                    </label>
                    <Input placeholder="Your name" className="bg-muted/50 border-cyber-blue/20" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Email
                    </label>
                    <Input placeholder="your.email@example.com" className="bg-muted/50 border-cyber-blue/20" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Subject
                  </label>
                  <Input placeholder="Project discussion" className="bg-muted/50 border-cyber-blue/20" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={6}
                    className="bg-muted/50 border-cyber-blue/20 resize-none"
                  />
                </div>
                
                <Button variant="cyber" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-cyber-purple/20 shadow-purple">
              <h3 className="text-2xl font-bold mb-6 text-cyber-purple">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyber-blue/20 rounded-lg">
                    <Mail className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyber-purple/20 rounded-lg">
                    <Phone className="h-6 w-6 text-cyber-purple" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyber-pink/20 rounded-lg">
                    <MapPin className="h-6 w-6 text-cyber-pink" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-cyber-green/20">
              <h4 className="text-xl font-bold mb-4 text-cyber-green">Available for:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full-stack web development</li>
                <li>• 3D web experiences</li>
                <li>• Technical consulting</li>
                <li>• Freelance projects</li>
                <li>• Remote collaborations</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};