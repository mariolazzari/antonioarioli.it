import {
  FaFacebook,
  FaFilePdf,
  FaInstagram,
  FaLinkedin,
  FaTv,
  FaWhatsapp,
  FaUser,
  FaReact,
  FaPeopleCarry,
  FaQuoteRight,
} from "react-icons/fa";
import { Contact } from "@/components/Contact";
import { Metadata } from "next";
import { Title } from "@/components/Typography";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatti social Antonio Arioli",
  alternates: {
    canonical: "https://antonioarioli.it/contacts",
  },
};

function LinksPage() {
  // WhatsApp props
  const phone = "+393280365080";
  const message =
    "Ciao Antonio, ho visitato il tuo sito e vorrei essere contattato. Grazie";

  const contacts = [
    {
      icon: <FaWhatsapp size={64} />,
      title: "Info e appuntamenti",
      url: `https://wa.me/${phone}?text=${message}`,
      label: "+39 328 036 5080",
    },
    {
      icon: <FaLinkedin size={64} />,
      title: "Il mio LinkedIn",
      url: "https://www.linkedin.com/in/antonio-arioli-350b6147/",
    },
    {
      icon: <FaFacebook size={64} />,
      title: "Il mio Facebook",
      url: "https://m.facebook.com/antonioariolitrattamentibionaturali",
    },
    {
      icon: <FaInstagram size={64} />,
      title: "Il mio Instagam",
      url: "https://www.instagram.com/trattamenti_bionaturali",
    },
    {
      icon: <FaQuoteRight size={64} />,
      title: "Referenze",
      url: " https://www.instagram.com/stories/highlights/18230788372227339",
    },
    {
      icon: <FaTv size={64} />,
      title: "Il mio CamTV",
      url: "https://www.cam.tv/antonioarioli",
    },
    {
      icon: <FaFilePdf size={64} />,
      title: "La mia locandina",
      url: "arioli.pdf",
    },
    {
      icon: <FaUser size={64} />,
      title: "Il mio profilo su Riabilita",
      url: "https://www.riabilita-serina.it/staff/antonio-arioli",
    },
    {
      icon: <FaPeopleCarry size={64} />,
      title: "APOS",
      url: "https://www.shiatsuapos.com/",
    },
    {
      icon: <FaReact size={64} />,
      title: "Mario Lazzari - autore sito",
      url: "https://mariolazzari.it",
    },
  ];

  return (
    <div className="p-8">
      <Title>I miei contatti</Title>

      <div className="flex justify-center items-center flex-wrap p-8 gap-16">
        {contacts.map(c => (
          <Contact key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
}

export default LinksPage;
