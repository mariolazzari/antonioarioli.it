import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

function HomePage() {
  const subtitles = [
    "Discipline bio naturali",
    "Trattamenti Shiatsu",
    "Riflessologia Plantare",
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
        <Button className="w-32">Referenze</Button>
        <Button className="w-32">Brochure</Button>
      </div>
    </>
  );
}

export default HomePage;
