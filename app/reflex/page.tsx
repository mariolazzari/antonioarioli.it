import { Container, Title } from "@/components/Typography";
import Image from "next/image";
import ReflexImg from "@/public/images/reflex.png";
import { Metadata } from "next";
import { Instagram } from "@/components/Players/Instagram";
import { Paragraph } from "@/components/Typography/Paragraph";

export const metadata: Metadata = {
  title: "Riflessologia plantare",
  description: "La parola riflesso richiama la parola specchio",
  alternates: {
    canonical: "https://antonioarioli.it/reflex",
  },
};

function ReflexPage() {
  const videos = ["/p/Cj8cY6RAI_1"];

  return (
    <>
      <Title>Riflessologia plantare</Title>

      <Image
        className="mx-auto mt-8"
        src={ReflexImg}
        alt="reflex"
        width={350}
        height={250}
        priority
      />

      <Container>
        <Paragraph>
          La parola riflesso richiama la parola specchio: come in uno specchio,
          nel piede troviamo punti o zone che corrispondono a precise parti o
          funzioni del nostro corpo. Questi punti e zone segnalano come sta il
          nostro interno. Attraverso precise pressioni è possibile stimolare
          queste zone per alleviare dolori e tensioni, per ripristinare una sana
          vitalità e favorire un benessere fisico, psichico, emozionale.
        </Paragraph>
      </Container>

      <div className="flex justify-center flex-wrap gap-16 my-16">
        {videos.map(video => (
          <Instagram key={video} href={video} />
        ))}
      </div>
    </>
  );
}

export default ReflexPage;
