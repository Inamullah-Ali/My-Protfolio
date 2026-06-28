import { Download } from "lucide-react";

interface DownloadCVProps {
  title?: string;
}

export default function DownloadCV({ title }: DownloadCVProps) {
  return (
    <div className="flex  border-primary transition-colors duration-300">
      <a
        href="/AnamullahAli_CV.pdf"
        download
        className="flex items-center gap-2 text-foreground/80 hover:text-primary"
      >
        <Download size={18} />
        {title && <span>{title}</span>}
      </a>
    </div>
  );
}