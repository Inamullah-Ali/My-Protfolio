import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import type { ProjectType } from "@/types/project";
import {
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Circle,
  Github,
  SquareArrowOutUpRight,
} from "lucide-react";

interface ProjectDialogProps {
  project: ProjectType | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectPreviewDialog({
  project,
  open,
  onOpenChange,
}: ProjectDialogProps) {
  if (!project) return null;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [activeTab, setActiveTab] = useState<
    "overview" | "screenshots" | "features"
  >("overview");

  const tabClass = (tab: string) =>
    `cursor-pointer pb-1 border-b-2 transition ${
      activeTab === tab
        ? "text-primary border-primary"
        : "text-muted-foreground border-transparent"
    }`;
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev < project.screenshots.length - 1 ? prev + 1 : prev,
        );
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project.screenshots]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[98vw] max-w-200 lg:max-w-200">
        <DialogHeader>
          <DialogTitle className="flex flex-row gap-2 items-center">
            <h3 className="text-xl font-semibold text-popover-foreground">{project.name}</h3>
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
          </DialogTitle>
        </DialogHeader>

        {/* Tabs */}
        <div className="flex gap-6">
          <p
            onClick={() => setActiveTab("overview")}
            className={tabClass("overview")}
          >
            Overview
          </p>

          <p
            onClick={() => setActiveTab("screenshots")}
            className={tabClass("screenshots")}
          >
            Screenshots
          </p>

          <p
            onClick={() => setActiveTab("features")}
            className={tabClass("features")}
          >
            Features
          </p>
        </div>

        {/* Tab Content */}
        <div className="">
          {activeTab === "overview" && (
            <div className="mt-4 space-y-5">
              {/* Introduction + Image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
                {/* Left Content */}
                <div className="space-y-2">
                  <p className="font-medium">Demo Access</p>
                  <div className="h-36 p-2 border border-border rounded-lg bg-card flex flex-col justify-center">
                   <div className="px-2 py-1 flex flex-row justify-between">
                   <p>Emial</p>
                   <p>admin@gmail.com</p>
                  </div>
                  <div className="px-2 py-1 flex flex-row justify-between">
                   <p>Password</p>
                   <p>admin@123</p>
                  </div>
                  <div className="px-2 py-1 flex flex-row justify-between">
                   <p>Role</p>
                   <p>Shop Admin</p>
                   </div>
                   <div className="px-2 py-1 flex flex-row justify-between items-center border-t border-border mt-2">
                   <p className="flex items-center gap-1"><AlertCircle size={16} />Note</p>
                   <p className="text-xs text-muted-foreground">Only for demo purposes. Please do not misuse.</p>
                   </div>
                  </div>

                  {/* Project Details */}
                  <p className="">Project Details</p>
                  <div className="grid grid-cols-3 gap-1">
                    <div className="border border-border rounded-lg bg-card p-2">
                      <p className="text-xs text-muted-foreground">Status</p>
                      <p
                        className={`font-medium flex items-center gap-1 ${
                          project.status === "Live"
                            ? "text-green-500"
                            : project.status === "In Progress"
                              ? "text-red-500"
                              : "text-blue-500"
                        }`}
                      >
                        <Circle size={12} fill="currentColor" />
                        {project.status}
                      </p>
                    </div>

                    <div className="border border-border rounded-lg bg-card p-2">
                      <p className="text-xs text-muted-foreground">Type</p>
                      <p className="font-medium">{project.type}</p>
                    </div>
                    <div className="border border-border rounded-lg bg-card py-2 pl-1">
                      <p className="text-xs text-muted-foreground">Role</p>
                      <p className="text-xs">{project.role}</p>
                    </div>
                    <div className="border rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Created</p>
                      <p className="font-medium">{project.createdAt}</p>
                    </div>
                    <div className="border rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Updated</p>
                      <p className="font-medium">{project.lastUpdated}</p>
                    </div>
                    <div className="border rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full rounded-lg border border-border object-cover"
                  />
                </div>
              </div>
              {/* Tech Stack */}
              <div>
                <p className="font-semibold mb-2">Tech Stack</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm border border-border rounded-md bg-card text-card-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold">Purpose</p>
                {project.purpose && (
                  <p className="text-muted-foreground">
                    <span className="font-semibold"></span> {project.purpose}
                  </p>
                )}
              </div>
            </div>
          )}

          {activeTab === "screenshots" && (
            <div className="flex flex-col gap-3">
              {/* Main Image */}
              <div className="relative">
                {/* Main Image */}
                <img
                  src={project.screenshots[selectedIndex]}
                  alt="main screenshot"
                  className="w-full h-full rounded-lg border object-cover"
                />

                {/* Left Arrow */}
                <button
                  onClick={() =>
                    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 
    bg-popover/70 hover:bg-popover/80 text-popover-foreground 
    p-2 rounded-full cursor-pointer"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() =>
                    setSelectedIndex((prev) =>
                      prev < project.screenshots.length - 1 ? prev + 1 : prev,
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 
    bg-popover/70 hover:bg-popover/80 text-popover-foreground 
    p-2 rounded-full cursor-pointer"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Gallery */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {project.screenshots.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => setSelectedIndex(index)}
                    className={`h-28 min-w-[calc((100%-24px)/4)] rounded-md border object-cover cursor-pointer ${
                      selectedIndex === index
                        ? "border-purple-500 border-2"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

{activeTab === "features" && (
  <div className="grid md:grid-cols-2 gap-3 mt-3">
    {project.features.map((feature) => (
      <div
        key={feature.title}
        className="border rounded-lg p-4 bg-muted/20 flex items-center gap-3"
      >
        {/* Icon */}
        <div className="h-10 w-10 rounded-lg flex items-center justify-center shrink-0 bg-muted-foreground/10">
          {feature.icon}
        </div>

        {/* Text */}
        <div>
          <h4 className="font-semibold">
            {feature.title}
          </h4>

          <p className="text-sm text-muted-foreground mt-1">
            {feature.description}
          </p>
        </div>

      </div>
    ))}
  </div>
)}
        </div>

        <div className="flex gap-2 justify-end">
          <Button
            asChild
            className="flex items-center gap-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live Demo
              <SquareArrowOutUpRight size={16} />
            </a>
          </Button>

          <Button
            asChild
            className="flex items-center rounded-md border border-border bg-card text-card-foreground hover:bg-muted"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Source Code <Github size={16} />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
