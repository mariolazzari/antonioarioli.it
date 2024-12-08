import { Job } from "@/components/Job";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biografia",
  description:
    "L’inizio del mio percorso formativo nell’ambito delle discipline bionaturali fu stimolato alcuni anni fa da un’esperienza personale di ascolto dei segnali con i quali il mio corpo parlava attraverso sintomi che da anni si riproponevano.",
  alternates: {
    canonical: "/bio",
  },
};

function BioPage() {
  const jobs = [
    {
      title: "2011-2014",
      text: "Diploma Professionale di Operatore Shiatsu accreditato A.P.O.S.presso Hakusha Brescia",
    },
    {
      title: "2011-2012",
      text: " seminari di formazione in metodica di Corpocoscienza, formatrice Elena Maria Pirro, presso Hakusha Brescia",
    },
    {
      title: "2011",
      text: " Seminario di formazione in Craniosacrale Biodinamica, formatore Mike Boxal, presso Hakusha Brescia",
    },
    {
      title: "2012",
      text: "Seminario di Danza Sensibile “La gestione del rilascio somato emozionale”, formatrice Josipha Prebeg, presso Hakusha Brescia",
    },
    {
      title: "2012",
      text: "Corso introduttivo alla Medicina Classica Cinese, formatore Fabrizio Bonanomi.",
    },
    {
      title: "Maggio 2018",
      text: "Corso introduttivo di Energy taping 16 ore – docente Silvio Mottarella, Hakusha Brescia",
    },
    {
      title: "Novembre 2018",
      text: " Corso di Moxa – gua sha – coppette – docente Silvio Mottarella, Hakusha Brescia",
    },
    {
      title: "Febbraio-aprile 2019",
      text: "Corso di Kinesiologia, 60 ore – docente Paolo Anzolin, presso Hakusha Brescia",
    },
    {
      title: "Ottobre 2019/gennaio 2020",
      text: "Corso propedeutico base di Riflessologia Plantare Cinese, 24 ore – docente Giacomo Trivinini presso Shen Ti Brescia",
    },
    {
      title: "Da ottobre 2019",
      text: " Formazione in Medicina Cinese Classica con il dott. Maurizio Corradin – Shen Ti Brescia",
    },
    {
      title: "Da febbraio 2020",
      text: " Corso Avanzato di Riflessologia Energetica Cinese – docente Giacomo Trivinini - Shen Ti Brescia",
    },
    { title: "Dal 2019", text: "Pratico Zineng Qigong" },
    {
      title: "Ottobre 2021",
      text: "Test muscolare kinesiologico di precisione",
      pdf: "pdf/TMKP.pdf",
    },
    {
      title: "Novembre 2021",
      text: "Corso Kinesiologia Emozionale",
      pdf: "pdf/RD1.pdf",
    },
  ].reverse();

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-4xl font-bold">Biografia</h2>
      <div className="max-w-xl bg-gradient-to-br from-muted to-background rounded-xl p-8 shadow-xl">
        <p className="text-justify">
          L’inizio del mio percorso formativo nell’ambito delle discipline
          bionaturali fu stimolato alcuni anni fa da un’esperienza personale di
          ascolto dei segnali con i quali il mio corpo parlava attraverso
          sintomi che da anni si riproponevano, e che le cure tradizionali non
          mi aiutavano a risolvere definitivamente. Iniziai a chiedermi che cosa
          il mio corpo volesse comunicarmi attraverso i sintomi, allargando così
          la prospettiva: il sintomo come messaggio da leggere e interpretare
          per evolvere, anziché un disturbo casuale da sedare o rimuovere. Mi
          rivolsi così ad un operatore da cui ricevetti trattamenti shiatsu;
          contemporaneamente intrapresi alcuni percorsi volti al benessere
          spirituale delle persone e introdussi alcuni cambiamenti nella mia
          alimentazione. I positivi miglioramenti del mio stato di salute, non
          solo fisica, mi motivarono a proseguire il percorso intrapreso e ad
          iscrivermi, nel 2011, alla scuola professionale di Shiatsu.
        </p>
      </div>

      <h3 className="text-3xl font-semibold my-4">Esperienze</h3>

      <div className="flex justify-center items-center gap-16 flex-wrap my-8">
        {jobs.map((job, id) => (
          <Job key={`${job.title}_${id}`} {...job} />
        ))}
      </div>
    </div>
  );
}

export default BioPage;
