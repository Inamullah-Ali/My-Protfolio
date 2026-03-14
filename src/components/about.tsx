import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full dark:shadow-[0_0_20px_rgba(124,58,237,0.6)]"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-4">Hello! I'm John Developer</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate full-stack developer with over 5 years of experience building
                modern web applications. I specialize in React, TypeScript, and Node.js, creating
                scalable and user-friendly solutions.
              </p>
              <p className="text-muted-foreground mb-4">
                My journey in web development started with a curiosity about how things work on the
                internet, and it has evolved into a career I'm truly passionate about. I love
                learning new technologies and solving complex problems.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me contributing to open-source projects,
                writing technical articles, or exploring the latest in web technologies.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-card rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="mb-3">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'Firebase'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="mb-3">Other Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'REST APIs', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
