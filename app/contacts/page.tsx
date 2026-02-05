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
import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LinkButton } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatti social Antonio Arioli",
  alternates: {
    canonical: "https://antonioarioli.it/contacts",
  },
};

function ContactsPage() {
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
      <h2 className="text-4xl text-center text-primary font-semibold">
        Contatti
      </h2>

      <div className="flex justify-center items-center flex-wrap p-8 gap-16">
        {contacts.map(c => (
          <Card key={c.url} className="w-64 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary">{c.title}</CardTitle>
            </CardHeader>
            <CardContent className="mx-auto">{c.icon}</CardContent>
            <CardFooter>
              <LinkButton href={c.url} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ContactsPage;
