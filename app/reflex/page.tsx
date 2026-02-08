import { Metadata } from "next";
import Image from "next/image";
import ReflexImg from "@/public/images/reflex.png";
import { Instagram } from "@/components/Players";

export const metadata: Metadata = {
  title: "Riflessologia plantare",
  description: "La parola riflesso richiama la parola specchio",
  alternates: {
    canonical: "https://antonioarioli.it/reflex",
  },
};

function ReflexPage() {
  return (
    <>
      <h2 className="text-3xl md:text-4xl text-primary text-center font-semibold my-8">
        Riflessologia plantare
      </h2>

      <p className="max-w-xl mx-auto text-justify px-8 md:p-0">
        La parola riflesso richiama la parola specchio: come in uno specchio,
        nel piede troviamo punti o zone che corrispondono a precise parti o
        funzioni del nostro corpo. Questi punti e zone segnalano come sta il
        nostro interno. Attraverso precise pressioni è possibile stimolare
        queste zone per alleviare dolori e tensioni, per ripristinare una sana
        vitalità e favorire un benessere fisico, psichico, emozionale.
      </p>

      <Image
        className="mx-auto mt-8"
        src={ReflexImg}
        alt="reflex"
        width={350}
        height={250}
        priority
      />

      <Instagram className="mx-auto my-8" href="/p/Cj8cY6RAI_1" />
    </>
  );
}

export default ReflexPage;
