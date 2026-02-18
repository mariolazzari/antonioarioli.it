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
import { ChevronDown } from "lucide-react";
import { GiYinYang } from "react-icons/gi";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { MouseEventHandler } from "react";
import { ThemeButton } from "../Buttons";
import { links, treats } from ".";

export function AppSidebar() {
  const { open, setOpen, setOpenMobile, isMobile } = useSidebar();

  const onClick = () => {
    setOpen(!open);
  };

  const onMobileClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopPropagation();
    // Only trigger on mobile view
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar className="cursor-pointer" collapsible="icon" onClick={onClick}>
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
            <p className="text-sm text-primary font-semibold leading-0">
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

            <SidebarMenuItem>
              <SidebarMenuButton>
                <ThemeButton />
              </SidebarMenuButton>
            </SidebarMenuItem>
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
                {treats.map((t) => (
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
