import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import type { ProjectType } from "@/types/project";
import {
  AlertCircle,
  Check,
  ChevronLeft,
  ChevronRight,
  Circle,
  Copy,
  Github,
  SmartphoneNfc,
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<
    "overview" | "screenshots" | "features"
  >("overview");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showMobileDialog, setShowMobileDialog] = useState(false);

  const tabClass = (tab: string) =>
    `cursor-pointer pb-1 border-b-2 transition ${
      activeTab === tab
        ? "text-primary border-primary"
        : "text-muted-foreground border-transparent"
    }`;

  useEffect(() => {
    if (!project) return;

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
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project]);

  const handleCopy = (value: string, field: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (!project) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="w-[98vw] max-w-200 lg:max-w-200 max-h-[95vh] overflow-y-auto p-4">
          <DialogHeader>
            <DialogTitle className="flex flex-row gap-2 items-center">
              <h3 className="text-xl font-semibold text-popover-foreground">
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
            </DialogTitle>
          </DialogHeader>

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

          <div>
            {activeTab === "overview" && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
                  <div className="space-y-2">
                    <p className="font-medium">Demo Access</p>
                    <div className="h-36 p-2 border border-border rounded-lg bg-card flex flex-col justify-center">
                      <div className="px-2 py-1 flex flex-row justify-between items-center">
                        <p>Email</p>
                        <div className="flex items-center gap-2">
                          <p>{project.email}</p>
                          <button
                            onClick={() =>
                              project.email &&
                              handleCopy(project.email, "email")
                            }
                          >
                            {copiedField === "email" ? (
                              <Check size={14} className="text-green-500" />
                            ) : (
                              <Copy
                                size={14}
                                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                              />
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="px-2 py-1 flex flex-row justify-between items-center">
                        <p>Password</p>
                        <div className="flex items-center gap-2">
                          <p>{project.password}</p>
                          <button
                            onClick={() =>
                              project.password &&
                              handleCopy(project.password, "password")
                            }
                          >
                            {copiedField === "password" ? (
                              <Check size={14} className="text-green-500" />
                            ) : (
                              <Copy
                                size={14}
                                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                              />
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="px-2 py-1 flex flex-row justify-between items-center">
                        <p>Role</p>
                        <p>{project.loginrole}</p>
                      </div>
                      <div className="px-2 py-1 flex flex-row justify-between items-center border-t border-border mt-2">
                        <p className="flex items-center gap-1 w-16">
                          <AlertCircle size={16} />
                          Note
                        </p>
                        <p className="text-xs text-muted-foreground text-end">
                          Only for demo purposes. Please do not misuse.
                        </p>
                      </div>
                    </div>

                    <p className="font-medium">Project Details</p>
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
                        <p className="text-xs text-muted-foreground">
                          Duration
                        </p>
                        <p className="font-medium">{project.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="sm:flex justify-center hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full rounded-lg border border-border object-cover"
                    />
                  </div>
                </div>

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
                    <p className="text-muted-foreground">{project.purpose}</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === "screenshots" && (
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <img
                    src={project.screenshots[selectedIndex]}
                    alt="main screenshot"
                    className="w-full h-full rounded-lg border object-cover"
                  />
                  <button
                    onClick={() =>
                      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-popover/70 hover:bg-popover/80 text-popover-foreground p-2 rounded-full cursor-pointer"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={() =>
                      setSelectedIndex((prev) =>
                        prev < project.screenshots.length - 1 ? prev + 1 : prev,
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-popover/70 hover:bg-popover/80 text-popover-foreground p-2 rounded-full cursor-pointer"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {project.screenshots.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      onClick={() => setSelectedIndex(index)}
                      className={`h-28 min-w-[calc((100%-12px)/2)] sm:min-w-[calc((100%-24px)/4)] rounded-md border object-cover cursor-pointer ${
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
                    className="border rounded-lg p-2 bg-muted/20 flex items-center gap-3"
                  >
                    <div className="h-10 w-10 rounded-lg flex items-center justify-center shrink-0 bg-muted-foreground/10">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
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
            {project.type === "Mobile App" ? (
              <Button
                onClick={() => setShowMobileDialog(true)}
                className="flex items-center gap-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
              >
                Live Demo
                <SmartphoneNfc size={16} />
              </Button>
            ) : (
              <Button
                asChild
                className="flex items-center gap-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <SquareArrowOutUpRight size={16} />
                </a>
              </Button>
            )}

            <Button
              asChild
              className="flex items-center rounded-md border border-border bg-card text-card-foreground hover:bg-muted"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code <Github size={16} />
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mobile App Demo Dialog */}
      <Dialog open={showMobileDialog} onOpenChange={setShowMobileDialog}>
        <DialogContent className="max-w-sm p-6 text-center">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center gap-2">
              <SmartphoneNfc size={20} className="text-primary" />
              Try the Mobile App
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 mt-2">
            <p className="text-muted-foreground text-sm">
              This is a mobile app. Scan the QR code below with your phone or
              download it directly to try the demo.
            </p>
            {project.qrCode ? (
              <img
                src={project.qrCode}
                alt="qrcode"
                className="w-40 h-40 rounded-lg border border-border"
              />
            ) : (
              <div className="w-40 h-40 rounded-lg border border-border bg-muted flex items-center justify-center text-muted-foreground text-sm">
                QR Code unavailable
              </div>
            )}
            {project.demo && (
              <Button asChild className="w-full">
                <a href="https://drive.google.com/file/d/1UdnaZO4P_jcNCmpe8SDWrRkBg166-rrJ/view?usp=drive_link" download>
                  Download
                  <SquareArrowOutUpRight size={16} className="ml-1" />
                </a>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
