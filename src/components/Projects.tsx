import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const projects = [
  {
    name: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and secure checkout process.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/Inamullah-Ali/Protfolio',
    demo: 'https://demo.com',
    image: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  {
    name: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  {
    name: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with interactive charts and real-time data visualization.',
    technologies: ['React', 'TypeScript', 'Recharts', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'bg-gradient-to-br from-green-500 to-teal-500'
  },
  {
    name: 'Weather Forecast App',
    description: 'Beautiful weather application with 7-day forecast, location search, and interactive weather maps.',
    technologies: ['React', 'OpenWeather API', 'CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'bg-gradient-to-br from-orange-500 to-red-500'
  },
  {
    name: 'Portfolio CMS',
    description: 'Content management system for portfolio websites with drag-and-drop builder and real-time preview.',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'bg-gradient-to-br from-indigo-500 to-purple-500'
  },
  {
    name: 'Fitness Tracker',
    description: 'Mobile-responsive fitness tracking app with workout logs, progress charts, and goal setting features.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'bg-gradient-to-br from-yellow-500 to-orange-500'
  }
];

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full dark:shadow-[0_0_20px_rgba(124,58,237,0.6)]"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group dark:hover:shadow-[0_20px_50px_rgba(124,58,237,0.2)] dark:hover:border-primary/40"
              >
                <div className={`h-48 ${project.image} group-hover:scale-105 transition-transform duration-300`}></div>
                <div className="p-6">
                  <h3 className="mb-3">{project.name}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent text-accent-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors dark:hover:text-primary"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors dark:hover:text-primary"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
