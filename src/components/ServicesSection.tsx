import Image from "next/image";

type Service = {
  title: string[];
  imageSrc: string;
  imageAlt: string;
  linkLabel: string;
  linkHref: string;
};

type ServicesSectionProps = {
  services: Service[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {services.map((service) => (
          <div
            key={service.imageSrc}
            className="bg-white rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden group hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 flex flex-col h-full"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={service.imageSrc}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 text-center flex-grow flex flex-col justify-between">
              <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight mb-6">
                {service.title.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>
              <a
                href={service.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffcc00] font-bold text-sm tracking-wider flex items-center justify-center gap-2 hover:text-yellow-500 transition-colors"
              >
                {service.linkLabel} <span className="text-lg">›</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
