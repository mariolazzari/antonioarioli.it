"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { Footer } from "../Footer";

export function AppSidebar() {
  const { open } = useSidebar();

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
            <Separator className="my-2 bg-primary" />
          </>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter>{open && <Footer />}</SidebarFooter>
    </Sidebar>
  );
}
