import { Container, Title } from "@/components/Typography";
import Image from "next/image";
import TapImg from "@/public/images/taping.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Taping",
  description: "Bendaggio adesivo con effetto biomeccanico ed energetico",
  alternates: {
    canonical: "/taping",
  },
};

function TapingPage() {
  return (
    <>
      <Title>Energy Taping</Title>

      <Image
        className="mx-auto my-8"
        src={TapImg}
        alt="taping"
        width={350}
        height={250}
        priority
      />

      <Container>
        <p className="text-justify">
          L’Energy Taping può essere definito come un bendaggio adesivo con
          effetto biomeccanico ed energetico. Il nastro interagisce con
          l’elasticità della cute e attraverso il movimento ottiene l’effetto
          terapeutico desiderato. Questa tecnica, come nel Taping Classico,
          aiuta la funzionalità muscolare e articolare, ma si differenzia nello
          stimolare anche il flusso nei meridiani, gli stessi canali energetici
          usati in Agopuntura. Oltre ad essere un valido metodo di cura, è anche
          un efficace supporto attivo al benessere operando contemporaneamente
          sui tre piani: fisico, energetico ed emotivo, estendendo i benefici
          anche all’ambito energetico ed emozionale (sonno disturbato, dolori
          mestruali, disagio emotivo)
        </p>
      </Container>
    </>
  );
}

export default TapingPage;
