import { Separator } from "../ui/separator";
import { Copyright } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <Separator className="h-0.5 bg-muted" />
      <footer>
        <ul className="text-xs text-center">
          <li>Iscritto al Registro Operatori Discipline Bio Naturali</li>
          <li>Regione Lombardia – L.R. n. 2/2005</li>
          <Link href="https://mariolazzari.it" target="_blank">
            <li className="flex justify-center items-center gap-1">
              <Copyright size={10} /> Mario Lazzari {year}
            </li>
          </Link>
        </ul>
      </footer>
    </>
  );
}
