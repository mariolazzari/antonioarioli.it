import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const cards = [
    {
      title: "Shiatsu biodinamico",
      description:
        "Lo shiatsu è una disciplina evolutiva. Non è un massaggio terapeutico, sportivo o estetico.",
      imagePath: "/images/shiatsu.png",
      href: "/shiatsu",
    },
    {
      title: "Moxibustione",
      description:
        "Il calore per il suo effetto terapeutico è sempre stato usato ed è tuttora usato anche nella nostra medicina.",
      imagePath: "/images/moxi.png",
      href: "/moxi",
    },
    {
      title: "Coppettazione e Gua sha",
      description:
        "La coppettazione è una tecnica molto antica della Medicina cinese che trova largo consenso ancora oggi.",
      imagePath: "/images/cop.png",
      href: "/cop",
    },
    {
      title: "Riflessologia plantare",
      description:
        "La parola riflesso richiama la parola specchio: come in uno specchio, zone che corrispondono a precise funzioni.",
      imagePath: "/images/reflex.png",
      href: "/reflex",
    },
    {
      title: "Energy taping",
      description:
        "L'Energy Taping può essere definito come un bendaggio adesivo con effetto biomeccanico ed energetico.",
      imagePath: "/images/taping.png",
      href: "/taping",
    },
    {
      title: "Kinesiologia emozionale",
      description:
        "La Kinesiologia Emozionale RD è l’arte di indagare nell’inconscio per capire cosa sta bloccando un aspetto della tua vita",
      imagePath: "/images/kine.png",
      href: "/kine",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-full mb-4"
        src="/images/logo.png"
        width={200}
        height={200}
        alt="Antonio Arioli"
        priority
      />

      <h1 className="text-5xl text-primary font-extrabold text-center">
        Antonio Arioli
      </h1>
      <h2 className="text-3xl text-primary font-bold">
        Discipline Bio Naturali
      </h2>
      <h3 className="text-2xl text-primary font-semibold mt-2">
        Trattamenti Shiatsu
      </h3>
      <h3 className="text-2xl text-primary font-semibold mb-2">
        Riflessologia Plantare
      </h3>
      <p className="text-justify max-w-xl px-8">
        Aiuto le persone a ritrovare benessere e serenità interiore e fisica
        grazie a tecniche corporee e di rilassamento profondo, introspezione
        guidata e riprogrammazione delle abitudini mentali che permettono di
        accedere al potenziale subconscio, gestire lo stress e superare i
        blocchi emotivi. Testimonianze
      </p>

      <div className="flex gap-4 px-8 py-16">
        <Button className="text-primary w-36 cursor-pointer" variant="outline">
          Testimonianze
        </Button>
        <Button className="text-primary w-36 cursor-pointer" variant="outline">
          <Eye /> Ipnosi
        </Button>
      </div>

      <div className="flex justify-center items-center gap-8 flex-wrap pb-16">
        {cards.map(({ title, description, imagePath, href }) => (
          <Link key={href} href={href}>
            <Card className="p-0">
              <Image
                src={imagePath}
                alt="Event cover"
                className="rounded-t-xl"
                width={350}
                height={250}
              />
              <CardHeader>
                <CardTitle className="text-primary font-semibold">
                  {title}
                </CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>

              <CardFooter className="pb-4">
                <Button
                  className="mx-auto text-primary cursor-pointer"
                  variant="outline"
                >
                  Dettagli
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
