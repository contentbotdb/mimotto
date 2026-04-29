import Image from "next/image";

type ShowcaseSectionProps = {
  content: {
    id: string;
    watermark: {
      top: string;
      bottom: string;
    };
    imageSrc: string;
    imageAlt: string;
    points: string[];
  };
};

export function ShowcaseSection({ content }: ShowcaseSectionProps) {
  return (
    <section
      id={content.id}
      className="relative py-12 md:py-20 w-full overflow-hidden flex items-center justify-center min-h-[600px] md:min-h-[800px]"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-[0.04] pointer-events-none select-none z-0">
        <h1 className="text-[18vw] md:text-[14vw] font-black leading-none tracking-tighter text-gray-900 whitespace-nowrap">
          {content.watermark.top}
        </h1>
        <h1 className="text-[10vw] md:text-[8vw] font-bold leading-none tracking-[0.5em] md:tracking-[1em] text-gray-900 ml-[1em] whitespace-nowrap">
          {content.watermark.bottom}
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/4 text-center md:text-right space-y-12 order-2 md:order-1">
          {content.points.slice(0, 2).map((point, index) => (
            <div key={point}>
              <p className="text-sm md:text-base text-gray-600">
                <span className="font-bold text-gray-800">{index + 1}.</span>{" "}
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="md:w-1/2 flex justify-center order-1 md:order-2">
          <Image
            src={content.imageSrc}
            alt={content.imageAlt}
            width={512}
            height={384}
            className="w-full max-w-lg object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="md:w-1/4 text-center md:text-left order-3">
          <p className="text-sm md:text-base text-gray-600">
            <span className="font-bold text-gray-800">3.</span>{" "}
            {content.points[2]}
          </p>
        </div>
      </div>
    </section>
  );
}
