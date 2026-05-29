import { Metadata } from "next";
import Image from "next/image";
import KineImg from "@/public/images/kine.png";

export const metadata: Metadata = {
  title: "Kinesiologia emozionale",
  description:
    "È una disciplina olistica ed in quanto tale considera la persona nella sua globalità",
  alternates: {
    canonical: "https://antonioarioli.it/kine",
  },
};

function KinePage() {
  return (
    <>
      <h2 className="text-center text-pretty text-4xl font-semibold text-primary">
        Kinesiologia emozionale
      </h2>

      <Image
        className="mx-auto my-8"
        src={KineImg}
        alt="kine"
        width={350}
        height={250}
        priority
      />

      <h3 className="text-center my-8 text-2xl font-semibold text-primary">
        Conosci la kinesiologia emozionale?
      </h3>
      <p className="mx-auto max-w-xl px-8 md:p-0">
        La Kinesiologia Emozionale RD è l’arte di indagare nell’inconscio per
        capire cosa sta bloccando un aspetto della tua vita.
      </p>

      <div className="mx-auto max-w-xl px-8 md:p-0">
        <p className="mt-4">Considerando i quattro stati:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Struttura/fisico</li>
          <li>Organico</li>
          <li>Emozionale</li>
          <li>Energetico</li>
        </ul>
      </div>

      <div className="mx-auto max-w-xl mb-8 px-8 md:p-0">
        <ul className="list-inside">
          <li>
            Hai un problema fisico che non passa con nessuna cura tradizionale?
          </li>
          <li>
            Non riesci a raggiungere i tuoi obiettivi o a dare vita ai tuo
            progetti, continuando a posticiparli?
          </li>
          <li>
            La paura comincia a limitarti, in situazioni apparentemente
            semplici?
          </li>
          <li>
            Il tuo comportamento con le persone che ti ci circondano può
            diventare sgradevole o conflittuale e non riesci ad evitarlo, pur
            rendendoti conto di questo disagio?
          </li>
          <li>
            Insieme riconosceremo e scioglieremo all’origine questi stati di
            malessere.
          </li>
          <li>Disponibile anche online.</li>
        </ul>
      </div>
    </>
  );
}

export default KinePage;
