import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactProps } from "./ContactProps";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

export function Contact({ title, icon, url }: ContactProps) {
  return (
    <Link href={url} target="_blank">
      <Card className="w-[300px] h-[200px] border border-muted hover:border-primary bg-linear-to-br from-background to-muted">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">{icon}</CardContent>
        <CardFooter>
          <LinkIcon />
        </CardFooter>
      </Card>
    </Link>
  );
}
