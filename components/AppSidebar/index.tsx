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
  User,
  CalendarDays,
  AtSign,
} from "lucide-react";
import { GiYinYang } from "react-icons/gi";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

export function AppSidebar() {
  const { open, setOpenMobile, isMobile } = useSidebar();

  const links = [
    { title: "Home", href: "/", icon: <Home /> },
    { title: "Biografia", href: "/bio", icon: <User /> },
    { title: "Esperienze", href: "/exp", icon: <CalendarDays /> },
    { title: "Corsi", href: "/courses", icon: <GraduationCap /> },
    { title: "Contatti", href: "/contacts", icon: <AtSign /> },
  ];

  const treats = [
    { title: "Shiatu biodinamico", href: "/shiatsu" },
    { title: "Moxibustione", href: "/moxi" },
    { title: "Coppettazione e Gua sha", href: "/cop" },
    { title: "Riflessologia plantare", href: "/reflex" },
    { title: "Energy taping", href: "/taping" },
    { title: "Kinesiologia emozionale", href: "/kine" },
  ];

  const onMobileClick = () => {
    // Only trigger on mobile view
    if (isMobile) {
      setOpenMobile(false);
    }
  };

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
          <SidebarMenu className="capitalize">
            {links.map(({ href, title, icon }) => (
              <Link key={href} href={href} onClick={onMobileClick}>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    {icon} <span>{title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <Collapsible defaultOpen>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Trattamenti
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarMenu>
                {treats.map(t => (
                  <SidebarMenuItem key={t.href}>
                    <SidebarMenuButton asChild>
                      <Link href={t.href} onClick={onMobileClick}>
                        <GiYinYang className="text-primary" />
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
