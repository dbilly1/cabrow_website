import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import Placeholder from "./Placeholder";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageType = { asset?: { _ref: string; _type: string } } & Record<string, any>;

interface SanityImageProps {
  image?: SanityImageType | null;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  aspect?: string;
  className?: string;
  style?: React.CSSProperties;
  placeholderLabel?: string;
  sizes?: string;
  priority?: boolean;
}

export default function SanityImage({
  image,
  alt,
  width = 800,
  height = 600,
  fill,
  aspect,
  className,
  style,
  placeholderLabel,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: SanityImageProps) {
  if (!image?.asset) {
    return (
      <Placeholder
        aspect={aspect ?? (fill ? "16/9" : `${width}/${height}`)}
        label={placeholderLabel ?? alt}
        className={className}
        style={style}
      />
    );
  }

  const src = urlFor(image).width(width * 2).auto("format").quality(85).url();

  if (fill) {
    return (
      <div className={className} style={{ position: "relative", ...style }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      sizes={sizes}
      priority={priority}
    />
  );
}
