import { Download } from "lucide-react";

export default function DownloadCV() {
    return (
  <div className="flex  hover:border-b border-primary transition-colors duration-300">
    <a
      href="/AnamullahAli_CV.pdf"
      download
      className="flex items-center gap-2 text-foreground/80 hover:text-primary"
    >
      <Download size={18} />
      <span></span>
    </a>
  </div>
    );
}