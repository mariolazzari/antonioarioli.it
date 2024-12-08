import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corsi",
  description: "Corsi sostenuti da Antonio Arioli",
  alternates: {
    canonical: "/courses",
  },
};

// images
const img1 = "/images/courses/amatoriale prona.jpg";
const img2 = "/images/courses/Boxhall.jpg";
const img3 = "/images/courses/comunicazione efficace.jpg";
const img4 = "/images/courses/attestato apos.jpg";
const img5 = "/images/courses/MCC CORRADIN 2020.jpg";
const img6 = "/images/courses/MCC CORRADIN 2021.jpg";
const img7 = "/images/courses/MCC HAKUSHA.jpg";
const img8 = "/images/courses/RIFLESSOLOGIA.jpg";
const img9 = "/images/courses/Rilascio Somato-emozionale.jpg";
const img10 = "/images/courses/quantica1.jpg";
const img11 = "/images/courses/kine-emo1.jpg";
const img12 = "/images/courses/TMKP.jpg";
const img13 = "/images/courses/kinerd2.jpeg";
const img14 = "/images/courses/quantica2.jpeg";
const img15 = "/images/courses/apos.jpg";
const img16 = "/images/courses/kine3.jpeg";
const img17 = "/images/courses/kine4.jpeg";
const img18 = "/images/courses/apos2.jpeg";
const img19 = "/images/courses/kine4c.jpeg";

function CoursesPage() {
  const images = [
    { src: img8, alt: "RIFLESSOLOGIA" },
    { src: img5, alt: "MCC CORRADIN 2020" },
    { src: img6, alt: "MCC CORRADIN 2021" },
    { src: img7, alt: "MCC HAKUSHA" },
    { src: img9, alt: "Rilascio Somato-emozionale" },
    { src: img1, alt: "Amatoriale prona" },
    { src: img3, alt: "Comunicazione efficace" },
    { src: img2, alt: "Boxhall" },
    { src: img4, alt: "attestato apos" },
    { src: img10, alt: "quantica1" },
    { src: img11, alt: "kine-emo1" },
    { src: img12, alt: "TMKP" },
    { src: img13, alt: "kinerd2" },
    { src: img14, alt: "quantica2" },
    { src: img15, alt: "apos" },
    { src: img16, alt: "kine3" },
    { src: img17, alt: "kine4" },
    { src: img18, alt: "apos2" },
    { src: img19, alt: "kine4c" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl text-center font-bold mb-8">Corsi frequentati</h2>

      <div className="flex justify-center items-center flex-wrap gap-16">
        {images.map(img => (
          <Link key={img.src} href={img.src} target="_blank">
            <div className="w-[350px] h-[300px] relative hover:scale-110">
              <Image src={img.src} alt={img.alt} fill priority />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
