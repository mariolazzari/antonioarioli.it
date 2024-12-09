import { ButtonLink } from "@/components/ButtonLink";
import { CardImage } from "@/components/CardImage";
import { CardImageProps } from "@/components/CardImage/CardImageProps";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Typography";
import { Quote, FileUser } from "lucide-react";

function HomePage() {
  const subtitles = [
    "Discipline Bio Naturali",
    "Trattamenti Shiatsu",
    "Riflessologia Plantare",
  ];

  const buttons = [
    {
      label: "Referenze",
      href: "https://www.google.com/search?cs=0&output=search&q=Antonio+Arioli+Shiatsu+Riflessologia+Plantare",
      icon: <Quote size={32} />,
    },
    {
      label: "Brochure",
      href: "/pdf/brochure.pdf",
      icon: <FileUser size={32} />,
    },
  ];

  const cards: CardImageProps[] = [
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
    <>
      <Logo className="rounded-3xl mx-auto my-8" />

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Antonio Arioli</h1>

        {subtitles.map(st => (
          <h2
            key={st.substring(4)}
            className="text-3xl font-semibold text-center mb-1"
          >
            {st}
          </h2>
        ))}
      </div>

      <Container>
        <p className="text-justify text-md">
          Aiuto le persone a ritrovare benessere e serenità interiore e fisica
          grazie a tecniche corporee e di rilassamento profondo, introspezione
          guidata e riprogrammazione delle abitudini mentali che permettono di
          accedere al potenziale subconscio, gestire lo stress e superare i
          blocchi emotivi.
        </p>
      </Container>

      <div className="flex justify-center gap-4 my-4">
        {buttons.map(b => (
          <ButtonLink
            key={b.label}
            icon={b.icon}
            label={b.label}
            href={b.href}
            newTab
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-24 flex-wrap my-8">
        {cards.map(card => (
          <CardImage key={card.title} {...card} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
