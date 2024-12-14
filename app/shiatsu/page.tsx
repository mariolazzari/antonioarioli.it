import Image from "next/image";
import ShiatsuImg from "@/public/images/shiatsu.png";
import { Metadata } from "next";
import { Container, Title } from "@/components/Typography";
import { Video } from "@/components/Players/Video";
import { Paragraph } from "@/components/Typography/Paragraph";

export const metadata: Metadata = {
  title: "Shiatsu Biodinamico",
  description:
    "Lo shiatsu è una disciplina evolutiva. Non è un massaggio terapeutico, sportivo o estetico.",
  alternates: {
    canonical: "https://antonioarioli.it/shiatsu",
  },
};

function ShiatsuPage() {
  return (
    <>
      <Title>Shiatsu Biodinamico</Title>
      <Image
        className="mx-auto my-8 rounded-xl"
        src={ShiatsuImg}
        alt="shiatsu"
        priority
      />
      <Container>
        <Paragraph>
          Lo shiatsu è una disciplina evolutiva. Non è un massaggio terapeutico,
          sportivo o estetico. E’ una relazione in cuil’operatore, attraverso la
          pressione esercitata con mani, gomito o ginocchio su alcuni punti,
          aree o canali energetici (meridiani), contatta la vitalità del
          ricevente favorendone il suo fluire naturale. Le pressioni esercitate
          correttamente attraverso abiti leggeri (non è necessario un contatto
          diretto con la pelle) producono uno stimolo a cui l’organismo della
          persona trattata “risponde”, recuperando e manifestando “dal profondo”
          le proprie risorse vitali. Peculiarità dello shiatsu biodinamico è
          l&apos;applicazione dei principi della biodinamica che insegnano,
          attraverso l&apos;ascolto dell’altro, il rispetto e la valorizzazione
          dell&apos;unicità che ognuno di noi rappresenta, favorendone la
          migliore espressione secondo le potenzialità, i tempi e le modalità
          proprie di ciascuno. I benefici dello shiatsu sul piano sintomatico e
          della prevenzione sono frutto non di un’attività mirata alla cura
          delle patologie, ma di un naturale processo evolutivo connesso al
          generale miglioramento della vitalità e all’ottimizzazione delle
          risorse personali. Genera una migliore qualità della vita qualsiasi
          sia l’età, la condizione e lo stato di benessere/disagio della persona
          coinvolta.
        </Paragraph>
      </Container>
      <Title>Trattamento meridiano di vescica biliare</Title>

      <Video src="https://cloud1.cam.tv/CID071F56/feed/CNT98E13C/video.mp4?t=1635712543" />

      <Container>
        <Paragraph>
          Il punto 1 del meridiano è situato al lato esterno dell’occhio e dopo
          avere percorso tutta la lateralità, termina il suo decorso al quarto
          dito del piede. Questo “fiume del fianco” offre la possibilità di
          guardarci attorno per poi fare le scelte, anche quelle difficili che
          richiedono coraggio. Quando cogliamo l’attimo nutriamo la vescica
          biliare. La vescica biliare è la sperimentazione di un nuovo inizio
          che elimina le memorie dolorose, guardando la vita con l’innocenza di
          un bambino. Molto efficace nel trattamento di cefalee, fibromialgia e
          dolori articolari. È il meridiano della rinascita, che possiamo
          sentire dentro di noi e vedere nel mondo.
        </Paragraph>
      </Container>
    </>
  );
}

export default ShiatsuPage;
