import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Quote, FileUser } from "lucide-react";

function HomePage() {
  const subtitles = [
    "Discipline bio naturali",
    "Trattamenti Shiatsu",
    "Riflessologia Plantare",
  ];

  const buttons = [
    {
      label: "Referenze",
      href: "https://www.google.com/search?cs=0&output=search&q=Antonio+Arioli+Shiatsu+Riflessologia+Plantare",
      icon: <Quote size={32} />,
    },
    {
      label: "Brochure",
      href: "/pdf/brochure.pdf",
      icon: <FileUser size={32} />,
    },
  ];

  return (
    <>
      <Logo className="rounded-3xl mx-auto my-8" />

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Antonio Arioli</h1>

        {subtitles.map(st => (
          <h2
            key={st.substring(4)}
            className="text-3xl font-semibold text-center mb-1"
          >
            {st}
          </h2>
        ))}
      </div>

      <div className="flex justify-center gap-4 my-4">
        {buttons.map(b => (
          <Button key={b.label}>
            {b.icon} {b.label}
          </Button>
        ))}
      </div>
    </>
  );
}

export default HomePage;
