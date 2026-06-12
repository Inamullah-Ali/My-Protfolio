import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Button } from "./ui/button";
import {
  ArrowRight,
  BadgePercent,
  Check,
  Github,
  LayoutDashboard,
  OctagonAlert,
  Search,
  ShieldCheck,
  SunMoon,
  TabletSmartphone,
  User,
} from "lucide-react";
import { useState } from "react";
import type { ProjectType } from "@/types/project";
import { ProjectPreviewDialog } from "./projectpreviewdialogue";

const projects = [
  {
    name: "Shop Admin Dashboard",
    status: "Live",
    description:
      "Inventory, sales, and expense dashboard with role-based access and real-time updates.",
    features: [
      {
        icon: <User size={24} color="red" />,
        title: "User Authentication",
        description: "Secure Sign-up , Login and Profile Management.",
      },
      {
        icon: <LayoutDashboard size={24} color="green" />,
        title: "Admin Dashboard",
        description:
          "Manage Products Customers and Sales with an intuitive dashboard.",
      },
      {
        icon: <OctagonAlert size={24} color="green" />,
        title: "Low Stock Alerts",
        description: "Automatically notify when products are running low.",
      },
      {
        icon: <BadgePercent size={24} color="purple" />,
        title: "Sales & Expense Analytics",
        description: "Track business performance with detailed analytics.",
      },
      {
        icon: <Search size={24} color="purple" />,
        title: "Product Browsing & Search",
        description: "Browse and search products with ease using filters.",
      },
      {
        icon: <TabletSmartphone size={24} color="purple" />,
        title: "Responsive Design",
        description:
          "Fully responsive interface for seamless use on any device.",
      },
      {
        icon: <ShieldCheck size={24} color="purple" />,
        title: "Secure Checkout",
        description:
          "Multiple payment options with secure processing for a smooth checkout experience.",
      },
      {
        icon: <SunMoon size={24} color="purple" />,
        title: "Dark & Light Mode",
        description:
          "Switch between dark and light themes based on your preference.",
      },
    ],
    screenshots: [
      "/images/ShopProject/shop-signup.png",
      "/images/ShopProject/shop-login.png",
      "/images/ShopProject/shop-1.png",
      "/images/ShopProject/shop-2.png",
      "/images/ShopProject/shop-3.png",
      "/images/ShopProject/shop-4.png",
      "/images/ShopProject/shop-5.png",
      "/images/ShopProject/shop-6.png",
      "/images/ShopProject/shop-7.png",
      "/images/ShopProject/shop-8.png",
      "/images/ShopProject/shop-9.png",
      "/images/ShopProject/shop-10.png",
      "/images/ShopProject/shop-11.png",
    ],
    technologies: [
      "React",
      "React Router",
      "Lucide React",
      "TypeScript",
      "Firebase",
      "Appwrite",
      "Tailwind",
      "shadcn/ui",
    ],
    github: "https://github.com/Inamullah-Ali/ShopManagement",
    demo: "https://shop-management-kappa.vercel.app/",
    image: "/images/ShopProject/shop-1.png",
    type: "web",
    createdAt: "2026-06-07",
    lastUpdated: "2026-06-08",
    duration: "6 months",
    purpose:
      "To provide small businesses with an easy-to-use inventory and sales management solution.",
    role: "Full Stack Developer",
  },
];

const VISIBLE_TECH_COUNT = 3;

function renderTechChips(technologies: string[]) {
  const visibleTechs = technologies.slice(0, VISIBLE_TECH_COUNT);
  const overflowCount = technologies.length - visibleTechs.length;

  return (
    <>
      {visibleTechs.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-300"
        >
          {tech}
        </span>
      ))}
      {overflowCount > 0 && (
        <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
          +{overflowCount}
        </span>
      )}
    </>
  );
}

export function Projects() {
  const { ref, isInView } = useInView();
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full dark:shadow-[0_0_20px_rgba(124,58,237,0.6)]"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-2xl shadow-slate-900/10 transition-all duration-300 ${
                  selectedProject?.name === project.name
                    ? "border-purple-500 border-2 shadow-purple-500/30"
                    : "border-border"
                }`}
              >
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover"
                  />
                  <span
                    className={`absolute top-4 right-4 rounded-md font-bold px-3 py-1 text-[11px] uppercase tracking-[0.2em] shadow-lg ${
                      project.status === "Live"
                        ? "bg-emerald-500 text-slate-950 shadow-emerald-500/30"
                        : project.status === "In Progress"
                          ? "bg-amber-500 text-slate-950 shadow-amber-500/30"
                          : "bg-sky-500 text-slate-950 shadow-sky-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="py-2 px-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className=" flex flex-row gap-2 items-center">
                        <h3 className="text-xl font-semibold text-card-foreground">
                          {project.name}
                        </h3>
                        <p
                          className={`text-xs font-normal border px-2 py-0.5 rounded-md ${
                            project.status === "Live"
                              ? "text-green-500 border-green-500 bg-green-500/20"
                              : project.status === "In Progress"
                                ? "text-amber-500 border-amber-500 bg-amber-500/20"
                                : "text-blue-500 border-blue-500 bg-blue-500/20"
                          }`}
                        >
                          {project.status}
                        </p>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1">
                    {renderTechChips(project.technologies)}
                  </div>

                  <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                    {project.features.slice(0, 3).map((feature) => (
                      <div
                        key={feature.title}
                        className="flex items-center gap-3"
                      >
                        <span
                          className={`inline-flex h-4 w-4 items-center justify-center shrink-0 rounded-full ${
                            project.status === "Live"
                              ? "bg-emerald-400"
                              : project.status === "In Progress"
                                ? "bg-amber-400"
                                : "bg-sky-400"
                          }`}
                        >
                          <Check size={12} color="black" strokeWidth={5} />
                        </span>
                        <span>{feature.description}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-3">
                    <Button
                      asChild
                      className="flex-1 h-10 bg-gray-800 text-white hover:bg-gray-700"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center gap-2"
                      >
                        <Github size={18} />
                        Source Code
                      </a>
                    </Button>

                    <Button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 cursor-pointer h-10 bg-purple-600 text-white hover:bg-purple-700"
                    >
                      <p className="flex items-center justify-center gap-2">
                        View Details
                        <ArrowRight size={18} />
                      </p>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <ProjectPreviewDialog
          project={selectedProject}
          open={!!selectedProject}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedProject(null);
            }
          }}
        />
      </div>
    </section>
  );
}
