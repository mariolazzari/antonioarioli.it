"use client";
import { InstagramEmbed, InstagramEmbedProps } from "react-social-media-embed";

type Props = Partial<InstagramEmbedProps> & { href: string };

export function Instagram({ href, width = 350, ...props }: Props) {
  return (
    <InstagramEmbed
      {...props}
      url={`https://www.instagram.com${href}`}
      width={width}
      suppressHydrationWarning
    />
  );
}
