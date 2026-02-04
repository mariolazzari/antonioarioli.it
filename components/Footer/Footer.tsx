import { Copyright } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center text-[10px]">
      <p className="text-center">
        Iscritto al Registro Operatori Discipline Bio Naturali
      </p>
      <p>Regione Lombardia – L.R. n. 2/2005</p>
      <Link
        className="flex items-center gap-1 text-xs"
        href="https://mariolazzari.it"
        target="_blank"
      >
        <Copyright size={10} /> Mario Lazzari {year}
      </Link>
    </footer>
  );
}
