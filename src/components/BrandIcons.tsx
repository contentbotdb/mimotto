type BrandIconProps = {
  className?: string;
};

export function WhatsAppIcon({ className = "h-5 w-5" }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12.04 2C6.55 2 2.08 6.45 2.08 11.93c0 1.75.46 3.46 1.34 4.97L2 22l5.25-1.38a9.94 9.94 0 0 0 4.79 1.22h.01c5.49 0 9.96-4.45 9.96-9.93C22 6.45 17.53 2 12.04 2Zm0 18.16h-.01a8.26 8.26 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.03-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.55 3.71-8.25 8.27-8.25 2.21 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.83c0 4.55-3.71 8.23-8.27 8.23Zm4.53-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.17-.29.19-.54.07-.25-.13-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.68 4.25 3.75.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        width="15"
        height="15"
        x="4.5"
        y="4.5"
        stroke="currentColor"
        strokeWidth="2"
        rx="4"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.7" cy="7.3" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.2 8.25V6.9c0-.66.44-.82.75-.82h1.9V3.16L14.23 3.15c-2.91 0-3.57 2.17-3.57 3.56v1.54H8.98v3.01h1.68V21h3.54v-9.74h2.4l.31-3.01h-2.71Z" />
    </svg>
  );
}
