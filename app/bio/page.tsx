import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biografia",
  description:
    "L’inizio del mio percorso formativo nell’ambito delle discipline bionaturali fu stimolato alcuni anni fa da un’esperienza personale di ascolto dei segnali con i quali il mio corpo parlava attraverso sintomi che da anni si riproponevano.",
  alternates: {
    canonical: "https://antonioarioli.it/bio",
  },
};

const BiographyPage = () => {
  const ps = [
    `L’inizio del mio percorso formativo nell’ambito delle discipline
        bionaturali fu stimolato vent'anni fa da un’esperienza personale di
        ascolto dei segnali con i quali il mio corpo parlava, attraverso sintomi
        che da anni si riproponevano e che le cure tradizionali non mi aiutavano
        a risolvere definitivamente. Iniziai a chiedermi che cosa il mio corpo
        volesse comunicarmi attraverso i sintomi, allargando così la
        prospettiva: il sintomo come messaggio da leggere e interpretare per
        evolvere, anziché un disturbo casuale da sedare o rimuovere.`,
    `Mi rivolsi così ad un operatore da cui ricevetti trattamenti shiatsu. 
      Contemporaneamente intrapresi alcuni percorsi volti al benessere spirituale delle persone 
      e introdussi alcuni cambiamenti nella mia alimentazione.`,
    "I positivi miglioramenti del mio stato di salute, non solo fisica, mi motivarono a proseguire il percorso intrapreso e ad iscrivermi, nel 2011, alla scuola professionale di Shiatsu.",
    "Già dal primo anno del triennio di formazione iniziai a praticare.",
    "Iniziai a studiare contemporaneamente anche la medicina cinese, la riflessologia plantare e alcune tecniche millenarie cinesi: la coppettazione, il guasha, la moxibustione.",
    "Proseguendo l'esperienza nei trattamenti, osservavo molto spesso la difficoltà delle persone nel riconoscere le proprie modalità comportamentali direttamente connesse al sintomo manifestato dal corpo. Il corpo comunicava con il sintomo un certo messaggio (per esempio la repressione dei propri bisogni, la difficoltà ad esprimerli e quindi la tendenza a farsi invadere e a subire) e la persona non riconosceva il proprio comportamento connesso a quel tema (nel caso dell’esempio la persona affermava di saperli comunicare).",
    "Spinto dal desiderio di acquisire uno strumento che mi permettesse di agire efficacemente in queste situazioni, decisi di intraprendere un percorso formativo in Kinesiologia Emozionale, l’arte di indagare nell’inconscio per capire cosa sta bloccando un aspetto della vita. Attraverso il test kinesiologico vengono testati quattro aspetti: struttura/fisico, organico, emozionale, energetico.",
    "Questa tecnica mi ha permesso di dare una svolta decisiva e una direzione precisa al mio lavoro.",
    "Il test mi permette di dialogare con quelle parti che a volte rimangono nell’ombra e non hanno la possibilità di esprimersi, ma che hanno il potere di determinare le scelte e dare la direzione alla vita della persona, senza che questa ne abbia consapevolezza. ",
    "Sono grato a questo strumento che consente alle persone di accedere alle proprie risorse interiori e di raggiungere obiettivi in ogni ambito della vita.",
    "Dopo alcuni anni, mi resi conto che mi mancava ancora qualcosa: con il test kinesiologico avevo la possibilità di accompagnare la persona a prendere consapevolezza di alcune dinamiche, ma a volte il cambiamento desiderato non avveniva.",
    "Ho intrapreso così un master di Ipnosi antica e moderna: un percorso che ha profondamente trasformato il mio approccio professionale, fornendomi ulteriori strumenti per accedere a quelle zone d’ombra nelle quali tutto è possibile.",
    "Oggi nel lavoro utilizzo le mie competenze in modo integrato a seconda delle necessità individuali: una tecnica può essere efficace con una persona ma può non esserlo per un’altra.",
    "Ciò che mi muove e mi entusiasma di questo lavoro è assistere alla trasformazione delle persone: veder cadere le maschere e le corazze ed emergere, finalmente accolte, le parti più autentiche, più sensibili e vulnerabili. Quelle che a volte fanno piangere, che oppongono resistenza, perché da tutta la vita ci hanno permesso di stare in equilibrio, ma che ora richiedono un passaggio evolutivo per la nostra crescita e il nostro maggior benessere.",
    "Si apre così uno spazio “pulito”, libero da bisogni consci e inconsci, capace di attrarre a noi cose nuove.",
  ];

  return (
    <div className="px-8 pb-12 space-y-4">
      <h2 className="text-4xl font-semibold text-primary text-center mb-8">
        Biografia
      </h2>

      {ps.map((p, id) => (
        <p key={`bio-p-${id}`} className="max-w-xl mx-auto text-justify">
          {p}
        </p>
      ))}
    </div>
  );
};

export default BiographyPage;
