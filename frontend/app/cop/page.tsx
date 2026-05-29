import { Instagram } from "@/components/Players";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coppettazione",
  description:
    "La coppettazione è una tecnica molto antica della Medicina cinese",
  alternates: {
    canonical: "https://antonioarioli.it/cop",
  },
};

function CopPage() {
  return (
    <>
      <h2 className="text-4xl text-primary text-center font-semibold">
        Coppettazione
      </h2>

      <p className="text-justify max-w-xl my-8 mx-auto px-8 md:p-0">
        La coppettazione è una tecnica molto antica della Medicina cinese che
        trova largo consenso ancora oggi in tutto il mondo. Si ritiene che la
        tecnica del risucchio sia stata la prima pratica terapeutica. Consiste
        nell’applicare una coppetta, ovvero un vasetto di vetro o ceramica, o di
        altri materiali, sulla parte interessata. Questa pratica viene
        utilizzata anche per disturbi dell&apos;umore, ansia e insonnia.
      </p>

      <Instagram className="mx-auto mb-8" href="/tv/CLB4NGoqbW0" />
    </>
  );
}

export default CopPage;
