import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { SiAppwrite, SiExpo, SiFirebase, SiGithub, SiNextdotjs, SiReact, SiShadcnui, SiTailwindcss, SiTypescript} from "react-icons/si";

const skills = [
  {
    name: "React",
    color: "text-cyan-400",
    icon: <SiReact className="w-12 h-12" />,
  },

  {
    name: "React Native",
    color: "text-cyan-400",
    icon: <SiReact className="w-12 h-12" />,
  },

{
  name: "Expo",
  color: "text-black dark:text-white",
  icon: <SiExpo className="w-12 h-12" />,
},

  {
    name: "TypeScript",
    color: "text-blue-500",
    icon: <SiTypescript className="w-12 h-12" />
  },

  {
    name: "Next.js",
    color: "text-foreground",
    icon: <SiNextdotjs className="w-12 h-12" />
  },

  {
    name: "Tailwind CSS",
    color: "text-cyan-400",
    icon: <SiTailwindcss className="w-12 h-12" />
  },

  {
    name: "Firebase",
    color: "text-orange-500",
    icon: <SiFirebase className="w-12 h-12" />
  },

  {
    name: "Appwrite",
    color: "text-pink-500",
    icon: <SiAppwrite className="w-12 h-12" />
  },

{
  name: "Zustand",
  color: "text-amber-500",
  icon: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg"
      className="w-12 h-12"
      alt="Zustand"
    />
  ),
},

{
  name: "Shadcn/UI",
  color: "text-slate-400",
  icon: <SiShadcnui className="w-12 h-12" />,
},
  {
    name: "REST APIs",
    color: "text-indigo-400",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    ),
  },

  {
    name: "GitHub",
    color: "text-orange-600",
    icon: <SiGithub className="w-12 h-12" />
  },
];

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div
                  className={`${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.icon}
                </div>
                <h4 className="text-center text-sm font-medium">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
