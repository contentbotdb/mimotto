import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./BrandIcons";

type Social = {
  label: string;
  href: string;
  type: string;
};

type FooterProps = {
  content: {
    message: string[];
    contactLabel: string;
    contactHref: string;
    schedulesTitle: string;
    schedules: string[];
    phone: string;
    clientEmail: string;
    infoEmail: string;
    copyright: {
      rights: string;
      site: string;
    };
    socials: Social[];
  };
};

function SocialIcon({ social }: { social: Social }) {
  if (social.type === "whatsapp") {
    return <WhatsAppIcon className="h-5 w-5" />;
  }

  if (social.type === "instagram") {
    return <InstagramIcon className="h-5 w-5" />;
  }

  return <FacebookIcon className="h-5 w-5" />;
}

function socialClassName(type: string) {
  if (type === "whatsapp") {
    return "bg-[#1eb53a] shadow-[0_10px_24px_rgba(30,181,58,0.22)] hover:shadow-[0_14px_32px_rgba(30,181,58,0.32)]";
  }

  if (type === "instagram") {
    return "bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] shadow-[0_10px_24px_rgba(188,24,136,0.22)] hover:shadow-[0_14px_32px_rgba(188,24,136,0.32)]";
  }

  return "bg-[#1877F2] shadow-[0_10px_24px_rgba(24,119,242,0.22)] hover:shadow-[0_14px_32px_rgba(24,119,242,0.32)]";
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-black px-6 pt-18 pb-28 text-white md:pb-12">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_0.9fr_1.1fr] md:gap-10">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="max-w-sm space-y-5">
              <p className="text-base font-medium leading-7 text-white">
                {content.message.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>

              <a
                href={content.contactHref}
                className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#ffcc00] transition-colors hover:text-yellow-400"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {content.contactLabel}
              </a>
            </div>

            <p className="mt-10 text-xs leading-6 text-gray-500">
              © {new Date().getFullYear()} {content.copyright.rights}
              <br />
              {content.copyright.site}
            </p>
          </div>

          <div className="text-center">
            <h4 className="mb-6 text-sm font-black tracking-widest text-[#ffcc00]">
              {content.schedulesTitle}
            </h4>
            <div className="mx-auto max-w-xs space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6">
              {content.schedules.map((schedule) => (
                <p key={schedule} className="text-sm leading-6 text-gray-300">
                  {schedule}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:items-end md:text-right">
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-200 transition-colors hover:text-white">
                {content.phone}
              </p>
              <p className="text-sm text-gray-300 transition-colors hover:text-white">
                {content.clientEmail}
              </p>
              <p className="text-sm text-gray-300 transition-colors hover:text-white">
                {content.infoEmail}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 md:justify-end">
              {content.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 ${socialClassName(social.type)}`}
                >
                  <SocialIcon social={social} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
