type HeroSectionProps = {
  content: {
    eyebrow: string;
    title: string;
    videoSrc: string;
    posterSrc: string;
  };
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={content.posterSrc}
      >
        <source src={content.videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto flex flex-col items-center">
        <p className="text-white/90 text-xs md:text-sm tracking-[0.3em] font-bold mb-4 uppercase">
          {content.eyebrow}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#ffcc00] tracking-tight leading-none mb-12">
          {content.title}
        </h1>
      </div>
    </section>
  );
}
