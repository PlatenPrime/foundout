import { IKImage } from "imagekitio-react";

interface ImageProps {
  path: string;
  className: string;
  alt: string;
  loading: string;
}

export  function Image({ path, className, alt, loading }: ImageProps) {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={path}
      className={className}
      loading={loading}
      alt={alt}
    />
  );
}
