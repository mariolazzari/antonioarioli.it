import { Separator } from "@/components/ui/separator";
import { Copyright } from "lucide-react";
import Link from "next/link";
import { WhatsApp } from "./WhatsApp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <Separator className="h-0.5 bg-muted" />
      <footer className="flex flex-col items-center text-xs gap-0.5">
        <p>Iscritto al Registro Operatori Discipline Bio Naturali</p>
        <p>Regione Lombardia – L.R. n. 2/2005</p>
        <Link
          className="flex items-center gap-1"
          href="https://mariolazzari.it"
          target="_blank"
        >
          <Copyright size={10} /> Mario Lazzari {year}
        </Link>
      </footer>
      <WhatsApp />
    </>
  );
}
