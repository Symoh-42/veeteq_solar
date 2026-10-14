import Image from "next/image";

export function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {images.map((src, i) => (
        <div key={src + i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={src}
            alt={`${alt} ${i + 1}`}
            fill
            sizes="(min-width: 640px) 33vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
