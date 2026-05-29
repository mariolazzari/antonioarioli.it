import { Metadata } from "next";
import Image from "next/image";
import TapingImg from "@/public/images/taping.png";

export const metadata: Metadata = {
  title: "Energing Taping",
  description: "La parola riflesso richiama la parola specchio",
  alternates: {
    canonical: "https://antonioarioli.it/reflex",
  },
};

function TapingPage() {
  return (
    <>
      <h2 className="text-4xl text-primary text-center font-semibold">
        Energy Taping
      </h2>

      <Image
        className="mx-auto mt-8"
        src={TapingImg}
        alt="energy taping"
        width={350}
        height={250}
        priority
      />

      <p className="max-w-xl text-justify mx-auto my-8 p-8 md:p-0">
        L’Energy Taping può essere definito come un bendaggio adesivo con
        effetto biomeccanico ed energetico. Il nastro interagisce con
        l’elasticità della cute e attraverso il movimento ottiene l’effetto
        terapeutico desiderato. Questa tecnica, come nel Taping Classico, aiuta
        la funzionalità muscolare e articolare, ma si differenzia nello
        stimolare anche il flusso nei meridiani, gli stessi canali energetici
        usati in Agopuntura. Oltre ad essere un valido metodo di cura, è anche
        un efficace supporto attivo al benessere operando contemporaneamente sui
        tre piani: fisico, energetico ed emotivo, estendendo i benefici anche
        all’ambito energetico ed emozionale (sonno disturbato, dolori mestruali,
        disagio emotivo)
      </p>
    </>
  );
}

export default TapingPage;
