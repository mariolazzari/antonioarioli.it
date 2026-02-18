import { GraduationCap, Home, User, CalendarDays, AtSign } from "lucide-react";

export const links = [
  { title: "Home", href: "/", icon: <Home /> },
  { title: "Biografia", href: "/bio", icon: <User /> },
  { title: "Esperienze", href: "/exp", icon: <CalendarDays /> },
  { title: "Corsi", href: "/courses", icon: <GraduationCap /> },
  { title: "Contatti", href: "/contacts", icon: <AtSign /> },
];

export const treats = [
  { title: "Shiatu biodinamico", href: "/shiatsu" },
  { title: "Moxibustione", href: "/moxi" },
  { title: "Coppettazione e Gua sha", href: "/cop" },
  { title: "Riflessologia plantare", href: "/reflex" },
  { title: "Energy taping", href: "/taping" },
  { title: "Kinesiologia emozionale", href: "/kine" },
];

export * from "./AppSidebar";
