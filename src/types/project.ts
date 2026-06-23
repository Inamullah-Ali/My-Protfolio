import type { ReactNode } from "react";

export type ProjectType = {
  name: string;
  status: string;
  description: string;
  features: {
    icon?:ReactNode;
    title: string;
    description: string;
  }[];
  technologies: string[];
  screenshots: string[];
  github: string;
  demo: string;
  image: string;
  type?: string;
  createdAt: string;
  lastUpdated: string;
  duration: string;
  purpose: string;
  role: string;
  email?:string;
  loginrole?:string;
  password?:string;
  qrCode?:string;
}