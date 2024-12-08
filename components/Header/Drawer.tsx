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
import { Logo } from "../Logo";
import { Separator } from "../ui/separator";

export function Drawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu size={24} aria-label="Menu" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-64">
        <SheetHeader>
          <Logo isDrawer className="mx-auto my-4 rounded-xl" />
          <SheetTitle className="font-semibold text-center">
            Antonio Arioli
          </SheetTitle>
          <SheetDescription className="text-center text-md">
            Discipline Bio
          </SheetDescription>
        </SheetHeader>
        <Separator className="h-0.5 bg-muted my-2" />
        <Links isDrawer />
      </SheetContent>
    </Sheet>
  );
}
