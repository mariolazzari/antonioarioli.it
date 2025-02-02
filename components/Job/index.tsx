import { JobProps } from "./JobProps";
import { GraduationCap, FileText, LinkIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function Job({ title, text, pdf }: JobProps) {
  const icon = pdf ? <FileText size={32} /> : <GraduationCap size={32} />;

  return (
    <Card className="w-64 h-72 border border-muted hover:border-primary bg-linear-to-br from-background  to-muted">
      <CardHeader>
        <CardTitle className="mx-auto">{icon}</CardTitle>
        <CardDescription className="font-semibold mt-2 text-primary text-lg mx-auto">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{text}</p>
      </CardContent>
      <CardFooter>
        {pdf && (
          <Link href={pdf} target="_blank">
            <LinkIcon />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
