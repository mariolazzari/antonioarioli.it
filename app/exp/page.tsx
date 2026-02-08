import { LinkButton } from "@/components/Buttons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, GraduationCap } from "lucide-react";

function ExperiencePage() {
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
    <div>
      <h2 className="text-4xl font-semibold text-primary text-center my-12">
        Esperienze
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-8">
        {jobs.map((job, id) => (
          <Card key={`${job.title}_${id}`} className="w-72">
            <CardHeader>
              <CardTitle className="text-primary flex justify-center">
                {job.pdf ? <FileText size={48} /> : <GraduationCap size={48} />}
              </CardTitle>
              <CardDescription className="text-center">
                {job.title}
              </CardDescription>
            </CardHeader>
            <CardContent className="h-16">
              <p className="text-justify text-sm">{job.text}</p>
            </CardContent>
            <CardFooter className="h-8">
              {job.pdf && <LinkButton href={job.pdf} />}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ExperiencePage;
