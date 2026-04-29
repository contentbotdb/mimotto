import { CtaButton } from "./CtaButton";

type IntroSectionProps = {
  content: {
    title: string;
    lines: string[];
    ctaLabel: string;
    ctaHref: string;
  };
};

export function IntroSection({ content }: IntroSectionProps) {
  return (
    <section className="py-12 px-6 text-center bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-2">
          {content.title}
        </h2>
        <p className="text-gray-500 text-sm md:text-base font-light tracking-wide uppercase">
          {content.lines[0]}
          <br className="hidden md:block" /> {content.lines[1]}
        </p>

        <div className="mt-6 flex justify-center">
          <CtaButton label={content.ctaLabel} href={content.ctaHref} />
        </div>
      </div>
    </section>
  );
}
