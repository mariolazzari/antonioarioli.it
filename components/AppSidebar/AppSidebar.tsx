"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { Footer } from "../Footer";
import {
  ChevronDown,
  GraduationCap,
  Home,
  Link2,
  User,
  CircleDot,
} from "lucide-react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

export function AppSidebar() {
  const { open } = useSidebar();

  const links = [
    { title: "Home", href: "/", icon: <Home /> },
    { title: "Biografia", href: "/bio", icon: <User /> },
    { title: "Corsi", href: "/courses", icon: <GraduationCap /> },
    { title: "Contatti", href: "/links", icon: <Link2 /> },
  ];

  const treats = [
    { title: "Shiatu biodinamico", href: "/shiatsu" },
    { title: "Moxibustione", href: "/moxi" },
    { title: "Coppettazione e Gua sha", href: "/cop" },
    { title: "Riflessologia plantare", href: "/reflex" },
    { title: "Energy taping", href: "/taping" },
    { title: "Kinesiologia emozionale", href: "/kine" },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className={cn("text-center", open && "p-8")}>
        <Image
          className="mx-auto rounded-full"
          src="/images/logo.png"
          alt="Antono Arioli"
          width={100}
          height={100}
          priority
        />

        {open && (
          <>
            <h2 className="text-primary font-semibold text-xl">
              Antonio Arioli
            </h2>
            <p className="capitalize text-sm text-primary leading-0">
              Discipline bio naturali
            </p>
            <Separator className="mt-2 bg-primary" />
          </>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          {links.map(({ href, title, icon }) => (
            <Link key={href} href={href}>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  {icon} <span>{title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Link>
          ))}
        </SidebarGroup>

        <SidebarGroup>
          <Collapsible defaultOpen>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="capitalize">
                Trattamenti
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarMenu className="capitalize">
                {treats.map(t => (
                  <SidebarMenuItem key={t.href}>
                    <SidebarMenuButton asChild>
                      <Link href={t.href}>
                        <CircleDot />
                        <span>{t.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>{open && <Footer />}</SidebarFooter>
    </Sidebar>
  );
}
