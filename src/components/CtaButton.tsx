import { WhatsAppIcon } from "./BrandIcons";

type CtaButtonProps = {
  label: string;
  href?: string;
  className?: string;
};

export function CtaButton({ label, href, className = "" }: CtaButtonProps) {
  const buttonClassName = `bg-[#1eb53a] hover:bg-[#189a30] transition-colors text-white font-bold py-4 px-8 rounded-full flex items-center gap-3 shadow-lg transform hover:-translate-y-0.5 duration-200 ${className}`;
  const content = (
    <>
      <WhatsAppIcon className="h-5 w-5" />
      {label}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClassName} type="button">
      {content}
    </button>
  );
}
