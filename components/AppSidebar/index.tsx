import { GraduationCap, Home, User, CalendarDays, AtSign } from "lucide-react";

export const links = [
  { title: "Home", href: "/", icon: <Home size={16} /> },
  { title: "Biografia", href: "/bio", icon: <User size={16} /> },
  { title: "Esperienze", href: "/exp", icon: <CalendarDays size={16} /> },
  { title: "Corsi", href: "/courses", icon: <GraduationCap size={16} /> },
  { title: "Contatti", href: "/contacts", icon: <AtSign size={16} /> },
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
