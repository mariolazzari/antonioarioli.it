import { VideoProps } from "./VideoProps";

export function Video({
  src,
  className = "mx-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl",
}: VideoProps) {
  return (
    <video className={className} autoPlay controls>
      <source src={src} type="video/mp4" />
    </video>
  );
}
