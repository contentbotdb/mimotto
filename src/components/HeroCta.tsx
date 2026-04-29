import { CtaButton } from "./CtaButton";

type HeroCtaProps = {
  content: {
    label: string;
    href: string;
  };
};

export function HeroCta({ content }: HeroCtaProps) {
  return (
    <div className="flex justify-center relative z-20 -mt-6">
      <CtaButton
        label={content.label}
        href={content.href}
        className="hover:shadow-xl"
      />
    </div>
  );
}
