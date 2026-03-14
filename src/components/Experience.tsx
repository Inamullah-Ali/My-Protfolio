import { Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and architecting scalable solutions.',
    highlights: [
      'Reduced application load time by 40% through optimization',
      'Led migration to microservices architecture',
      'Implemented CI/CD pipeline reducing deployment time by 60%'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations Ltd.',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect implementations.',
    highlights: [
      'Built 15+ responsive web applications',
      'Implemented real-time features using WebSockets',
      'Improved code quality through comprehensive testing'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'StartUp Studios',
    period: '2018 - 2020',
    description: 'Created responsive user interfaces and interactive web experiences. Worked closely with UX designers to implement engaging user experiences.',
    highlights: [
      'Developed reusable component library',
      'Improved website performance scores to 95+',
      'Collaborated with cross-functional teams'
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

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
                  } md:w-1/2`}
                >
                  <div className="absolute left-0 md:left-auto md:-right-5 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-background md:transform md:translate-x-1/2 dark:shadow-[0_0_20px_rgba(124,58,237,0.6)]">
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
