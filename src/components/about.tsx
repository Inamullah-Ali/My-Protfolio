import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

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
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-4">
                Hello! I'm Anamullah Ali — Full-Stack Developer
              </h3>

              <p className="text-muted-foreground mb-4">
                I'm a passionate full-stack developer focused on building modern,
                scalable and user-friendly web applications using React, TypeScript
                and Node.js.
              </p>

              <p className="text-muted-foreground mb-4">
                My journey started with curiosity about how web applications work,
                and now I enjoy solving real-world problems through code.
              </p>

              <p className="text-muted-foreground">
                I also enjoy learning new technologies and improving my development workflow.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-lg border shadow-lg">
                <h4 className="mb-3 font-semibold">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-card rounded-lg border shadow-lg">
                <h4 className="mb-3 font-semibold">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "REST APIs"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-card rounded-lg border shadow-lg">
                <h4 className="mb-3 font-semibold">Databases & Services</h4>
                <div className="flex flex-wrap gap-2">
                  {["Firebase", "Appwrite", "MongoDB"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-card rounded-lg border shadow-lg">
                <h4 className="mb-3 font-semibold">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Axios", "Postman"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-accent rounded-full">
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