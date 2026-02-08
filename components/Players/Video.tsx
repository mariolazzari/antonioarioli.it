type Props = {
  src: string;
  className?: string;
};

export function Video({
  src,
  className = "mx-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl",
}: Props) {
  return (
    <video className={className} controls>
      <source src={src} type="video/mp4" />
    </video>
  );
}
