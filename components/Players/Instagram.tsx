"use client";

import { InstagramEmbed } from "react-social-media-embed";
import { InstagramProps } from "./InstagramProps";

export function Instagram({ href, width = 350, ...props }: InstagramProps) {
  return (
    <InstagramEmbed
      {...props}
      url={`https://www.instagram.com${href}`}
      width={width}
    />
  );
}
