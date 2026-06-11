import { Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const experiences = [
  {
    title: 'Fresher / Web Developer',
    company: 'Self-Learning & Projects',
    period: '2026 - Present',
    description: 'Building modern web applications using React, Node.js, Next.js, TypeScript, and Tailwind CSS. Focused on learning, creating projects, and exploring real-world application development.',
    highlights: [
      'Developed personal portfolio website using React and Tailwind CSS',
      'Built small projects with REST APIs and Firebase integration',
      'Implemented responsive and interactive UI components'
    ]
  },
  {
    title: 'Project: TaskMaster Admin Panel',
    company: 'Personal Project',
    period: '2026',
    description: 'A modern admin dashboard to manage tasks, users, and analytics. Built with React, TypeScript, Tailwind CSS, and connected to a Firebase backend.',
    highlights: [
      'Implemented role-based access and authentication',
      'Connected UI with Firebase Firestore for real-time data',
      'Designed interactive charts and task management interface'
    ]
  },
  {
    title: 'Project: To-Do App',
    company: 'Personal Project',
    period: '2026',
    description: 'A full-stack To-Do application with Firebase backend. Focused on CRUD operations and real-time updates.',
    highlights: [
      'Implemented authentication with Firebase Auth',
      'Real-time updates using Firestore',
      'Clean and reusable React components'
    ]
  },
  {
    title: 'Project: Portfolio Website',
    company: 'Personal Project',
    period: '2026',
    description: 'Showcasing skills, projects, and experience. Built using Next.js, TypeScript, and Tailwind CSS.',
    highlights: [
      'Implemented dark & light theme toggle',
      'Integrated animations for interactive UX',
      'Optimized performance and SEO'
    ]
  }
];

export function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full dark:shadow-[0_0_20px_rgba(124,58,237,0.6)]"></div>

          <div className="max-w-4xl mx-auto overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className={`relative mb-8 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-left' : 'md:pl-8 md:ml-auto'
                  } md:w-1/2`}
                >
                  <div className={`absolute left-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-background dark:shadow-[0_0_20px_rgba(124,58,237,0.6)] ${
                    index % 2 === 0
                      ? 'md:left-auto md:right-0 md:translate-x-1/2'
                      : 'md:-translate-x-1/2'
                  }`}
                  >
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </div>

                  <div className="ml-16 md:ml-0 bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:hover:shadow-[0_15px_40px_rgba(124,58,237,0.2)] dark:hover:border-primary/40">
                    <div className="mb-2">
                      <h3 className="mb-1">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.period}</p>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
