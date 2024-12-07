import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Links } from "./Links";

export function Drawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Antonio Arioli</SheetTitle>
          <SheetDescription>Discipline Bio</SheetDescription>
        </SheetHeader>
        <Links isDrawer />
      </SheetContent>
    </Sheet>
  );
}
