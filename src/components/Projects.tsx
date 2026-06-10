import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const projects = [
  {
    name: 'Shop Admin Dashboard',
    description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
    technologies: ['React Vite+','Next.js', 'TypeScript', 'Firebase', 'Tailwind','Appwrite'],
    github: 'https://github.com/Inamullah-Ali/ShopManagement',
    demo: 'https://shop-management-kappa.vercel.app/',
    image: '/images/project-2.png',
  },
  {
    name: 'HRMS Mobile App',
    description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind','Appwrite'],
    github: 'https://github.com/Inamullah-Ali/HRMS-Mobile-App.git',
    demo: 'https://github.com/Inamullah-Ali/HRMS-Mobile-App/releases/latest',
    image: '/images/App_HRMS/home.jpg',
  },
  {
    name: 'HRMS Admin Pannel Dashboard',
    description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind','Appwrite'],
    github: 'https://github.com/Inamullah-Ali/Admin-Pannel',
    demo: 'https://github.com/Inamullah-Ali/HRMS-Mobile-App/releases/latest',
    image: '/images/App_HRMS/home.jpg',
  },
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
                <div className={`h-58 group-hover:scale-105 transition-transform duration-300`}>
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                </div>
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
                    {/* <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors dark:hover:text-primary"
                    >
                      <Download className="w-5 h-5" />
                      Download APK
                    </a> */}
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
