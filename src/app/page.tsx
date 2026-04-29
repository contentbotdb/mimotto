"use client";

import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { Header } from "@/components/Header";
import { HeroCta } from "@/components/HeroCta";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { siteContent, type SiteLanguage } from "@/content";
import { useEffect, useState } from "react";

const LANGUAGE_STORAGE_KEY = "mimotto-language";

export default function App() {
  const [language, setLanguage] = useState<SiteLanguage>("es");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

      if (storedLanguage === "es" || storedLanguage === "en") {
        setLanguage(storedLanguage);
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const handleLanguageChange = (nextLanguage: SiteLanguage) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  };

  const content = siteContent[language];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden selection:bg-[#ffcc00] selection:text-black">
      <Header
        content={content.header}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
      <HeroSection content={content.hero} />
      <HeroCta content={content.cta} />
      <ServicesSection services={content.services} />
      <IntroSection content={content.intro} />
      <ShowcaseSection content={content.showcase} />
      <GallerySection content={content.gallery} />
      <ReviewsSection content={content.reviews} />
      <Footer content={content.footer} />
    </div>
  );
}
