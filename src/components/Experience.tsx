import { Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const experiences = [
  {
    title: "Frontend & Full Stack Developer (Fresher)",
    company: "Self-Learning & Personal Projects",
    period: "2026 - Present",
    description:
      "Passionate fresher focused on building modern web applications using React, Next.js, TypeScript, Tailwind CSS, and Firebase. Gained hands-on experience by developing real-world projects with responsive UI, authentication, and database integration.",
    highlights: [
      "Built responsive web applications using React and Next.js",
      "Integrated Firebase Authentication and Firestore Database",
      "Developed reusable UI components with Tailwind CSS",
    ],
  },
  {
    title: "HRMS Admin Panel",
    company: "Personal Project",
    period: "2026",
    description:
      "Developed a complete Human Resource Management System (HRMS) admin panel with modules for employee management, attendance, departments, notices, and expense tracking using React, TypeScript, Tailwind CSS, and Firebase.",
    highlights: [
      "Implemented Firebase Authentication and Firestore integration",
      "Built employee, attendance, department, expense, and notice management modules",
      "Designed a responsive admin dashboard with real-time data updates",
    ],
  },
  {
    title: "HRMS Website",
    company: "Personal Project",
    period: "2026",
    description:
      "Designed and developed a modern, responsive company website for the HRMS platform with a clean UI and optimized user experience using Next.js and Tailwind CSS.",
    highlights: [
      "Created a responsive and mobile-friendly interface",
      "Optimized performance and SEO",
      "Implemented modern layouts and smooth UI interactions",
    ],
  },
  {
    title: "Shop Admin Dashboard",
    company: "Personal Project",
    period: "2026",
    description:
      "Built an admin dashboard for shop management featuring product management, sales tracking, expense management, and business analytics with a modern dashboard interface.",
    highlights: [
      "Created product and sales management modules",
      "Implemented expense tracking and dashboard analytics",
      "Built reusable dashboard components with TypeScript and Tailwind CSS",
    ],
  },
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
                    index % 2 === 0
                      ? "md:pr-8 md:text-left"
                      : "md:pl-8 md:ml-auto"
                  } md:w-1/2`}
                >
                  <div
                    className={`absolute left-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-background dark:shadow-[0_0_20px_rgba(124,58,237,0.6)] ${
                      index % 2 === 0
                        ? "md:left-auto md:right-0 md:translate-x-1/2"
                        : "md:-translate-x-1/2"
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
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
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
