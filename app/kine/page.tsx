import { Container, Subtitle, Title } from "@/components/Typography";
import { Metadata } from "next";
import Image from "next/image";
import KineImg from "@/public/images/kine.png";
import { Paragraph } from "@/components/Typography/Paragraph";

export const metadata: Metadata = {
  title: "Kinesiologia emozionale",
  description:
    "È una disciplina olistica ed in quanto tale considera la persona nella sua globalità",
  alternates: {
    canonical: "https://antonioarioli.it/kine",
  },
};

function KinePage() {
  return (
    <>
      <Title>Kinesiologia emozionale</Title>

      <Image
        className="mx-auto my-8"
        src={KineImg}
        alt="kine"
        width={350}
        height={250}
        priority
      />

      <Container>
        <>
          <Subtitle>Conosci la kinesiologia emozionale?</Subtitle>
          <Paragraph>
            La Kinesiologia Emozionale RD è l’arte di indagare nell’inconscio
            per capire cosa sta bloccando un aspetto della tua vita.
          </Paragraph>
          <p className="mt-4">Considerando i quattro stati:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Struttura/fisico</li>
            <li>Organico</li>
            <li>Emozionale</li>
            <li>Energetico</li>
          </ul>

          <ul className="list-inside">
            <li>
              Hai un problema fisico che non passa con nessuna cura
              tradizionale?
            </li>
            <li>
              Non riesci a raggiungere i tuoi obiettivi o a dare vita ai tuo
              progetti, continuando a posticiparli?
            </li>
            <li>
              La paura comincia a limitarti, in situazioni apparentemente
              semplici?
            </li>
            <li>
              Il tuo comportamento con le persone che ti ci circondano può
              diventare sgradevole o conflittuale e non riesci ad evitarlo, pur
              rendendoti conto di questo disagio?
            </li>
            <li>
              Insieme riconosceremo e scioglieremo all’origine questi stati di
              malessere.
            </li>
            <li>Disponibile anche online.</li>
          </ul>
        </>
      </Container>
    </>
  );
}

export default KinePage;
