"use client";

export default function ClientImage({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return <img src={src} className={className} />;
}
