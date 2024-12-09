import { Container, Title } from "@/components/Typography";
import Image from "next/image";
import MoxiImg from "@/public/images/moxi.png";
import { Instagram } from "@/components/Players/Instagram";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moxibustione",
  description:
    "Il calore per il suo effetto terapeutico è sempre stato usato in medicina",
  alternates: {
    canonical: "/moxi",
  },
};

function MoxiPage() {
  const videos = ["/p/CL2NtBJq9_K", "/tv/CLREdyTKRoW"];

  return (
    <>
      <Title>Moxibustione</Title>

      <Image
        className="mx-auto my-8"
        src={MoxiImg}
        alt="moxi"
        width={350}
        height={250}
        priority
      />

      <Container>
        <p className="text-justify">
          Il calore per il suo effetto terapeutico è sempre stato usato ed è
          tuttora usato anche nella nostra medicina. La moxibustione è una forma
          di utilizzo del calore al fine di cura, che si applica a zone molto
          precise del corpo, come i punti di agopuntura. Si addice al
          trattamento di tutte le patologie dominate dal freddo e
          dall&apos;umidità (stati di raffreddamento). Esistono vari stili di
          moxa, basati sull’uso dell’artemisia.
        </p>
      </Container>

      <div className="flex justify-center gap-16 flex-wrap my-16">
        {videos.map(video => (
          <Instagram key={video} href={video} />
        ))}
      </div>
    </>
  );
}

export default MoxiPage;
