import Image from "next/image";

type GallerySectionProps = {
  content: {
    id: string;
    title: string;
    images: string[];
    imageAltPrefix: string;
  };
};

export function GallerySection({ content }: GallerySectionProps) {
  return (
    <section id={content.id} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase">
            {content.title}
          </h2>
          <div className="w-24 h-1 bg-[#ffcc00] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {content.images.map((src, index) => (
            <div
              key={src}
              className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <Image
                src={src}
                alt={`${content.imageAltPrefix} ${index + 1}`}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
