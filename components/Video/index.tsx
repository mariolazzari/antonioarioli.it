import { VideoProps } from "./VideoProps";

export function Video({ src, className = "mx-auto" }: VideoProps) {
  return (
    <video className={className} controls>
      <source src={src} type="video/mp4" />
    </video>
  );
}
