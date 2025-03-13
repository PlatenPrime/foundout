import { IKImage } from "imagekitio-react";

interface ImageProps {
  src: string;
  className: string;
  alt: string;
  w?: number;
  h?: number;

}

export  function Image({ src, className, alt, w, h }: ImageProps) {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      alt={alt}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      width={w}
      height={h}
    />
  );
}
