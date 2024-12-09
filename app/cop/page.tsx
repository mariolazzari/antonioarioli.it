import { Container, Title } from "@/components/Typography";
import Image from "next/image";
import CopImg from "@/public/images/cop.png";
import { Metadata } from "next";
import { Instagram } from "@/components/Players/Instagram";

export const metadata: Metadata = {
  title: "Coppettazione",
  description:
    "La coppettazione è una tecnica molto antica della Medicina cinese",
  alternates: {
    canonical: "/cop",
  },
};

function CopPage() {
  const videos = ["/tv/CLB4NGoqbW0"];

  return (
    <>
      <Title>Coppettazione</Title>

      <Image
        className="mx-auto"
        src={CopImg}
        alt="cop"
        width={350}
        height={250}
        priority
      />

      <Container>
        <p className="text-justify">
          La coppettazione è una tecnica molto antica della Medicina cinese che
          trova largo consenso ancora oggi in tutto il mondo. Si ritiene che la
          tecnica del risucchio sia stata la prima pratica terapeutica. Consiste
          nell’applicare una coppetta, ovvero un vasetto di vetro o ceramica, o
          di altri materiali, sulla parte interessata. Questa pratica viene
          utilizzata anche per disturbi dell'umore, ansia e insonnia.
        </p>
      </Container>

      <div className="flex justify-center flex-wrap gap-16 my-16">
        {videos.map(video => (
          <Instagram key={video} href={video} />
        ))}
      </div>
    </>
  );
}

export default CopPage;
