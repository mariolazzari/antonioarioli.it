import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import { CardImageProps } from "./CardImageProps";
import Image from "next/image";

export function CardImage({
  title,
  description,
  imagePath,
  href,
  newTab = false,
}: CardImageProps) {
  const target = newTab ? "_blank" : "_self";

  return (
    <Link href={href} target={target}>
      <Card className="w-[350px] border border-muted hover:border-primary rounded-xl shadow-xl bg-linear-to-br from-background to-muted">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="mx-auto"
            src={imagePath}
            alt={title}
            width={350}
            height={350}
            priority
          />
          <p className="my-2 text-justify">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <LinkIcon size={24} />
        </CardFooter>
      </Card>
    </Link>
  );
}
