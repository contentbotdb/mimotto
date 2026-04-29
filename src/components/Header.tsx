"use client";

import { ChevronDown, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Model = {
  name: string;
  engineCc: number | string;
  segment: string;
  notes: string;
};

type Category = {
  name: string;
  models: Model[];
};

type Brand = {
  name: string;
  categories: Category[];
};

type HeaderProps = {
  content: {
    logo: string;
    logoAccent: string;
    homeLabel: string;
    homeLabelHref: string;
    homeHref: string;
    modelsMenu: {
      label: string;
      closeLabel: string;
      columnLabels: {
        brands: string;
        categories: string;
        models: string;
        engine: string;
        segment: string;
      };
      brands: Brand[];
    };
  };
  language: "es" | "en";
  onLanguageChange: (language: "es" | "en") => void;
};

function formatEngine(engineCc: number | string) {
  return typeof engineCc === "number" ? `${engineCc} CC` : engineCc;
}

export function Header({ content, language, onLanguageChange }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(0);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const brands = content.modelsMenu.brands;
  const safeBrandIndex = Math.max(
    0,
    Math.min(selectedBrandIndex, brands.length - 1),
  );
  const selectedBrand = brands[safeBrandIndex] ?? brands[0];
  const categories = selectedBrand?.categories ?? [];
  const safeCategoryIndex = Math.max(
    0,
    Math.min(selectedCategoryIndex, categories.length - 1),
  );
  const selectedCategory = categories[safeCategoryIndex] ?? categories[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    if (!mediaQuery.matches) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectBrand = (brandIndex: number) => {
    setSelectedBrandIndex(brandIndex);
    setSelectedCategoryIndex(0);
  };

  const languageOptions: Array<"es" | "en"> = ["es", "en"];

  return (
    <header ref={headerRef} className="fixed z-50 w-full">
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-black/90 py-4 shadow-lg backdrop-blur-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6">
          <a
            href={content.homeLabelHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white/90 transition-colors hover:text-[#ffcc00]"
          >
            {content.homeLabel}
          </a>

          <div className="absolute left-1/2 -translate-x-1/2 text-xl font-black tracking-widest text-white">
            {content.logo}
            <span className="text-[#ffcc00]">{content.logoAccent}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide">
              {languageOptions.map((languageOption, index) => (
                <span key={languageOption} className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => onLanguageChange(languageOption)}
                    className={`transition-colors hover:text-[#ffcc00] ${
                      language === languageOption
                        ? "text-[#ffcc00]"
                        : "text-white/70"
                    }`}
                  >
                    {languageOption.toUpperCase()}
                  </button>
                  {index === 0 && <span className="text-white/35">|</span>}
                </span>
              ))}
            </div>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
              className="flex items-center gap-1.5 text-sm font-semibold text-white/90 transition-colors hover:text-[#ffcc00]"
            >
              {content.modelsMenu.label}
              <ChevronDown
                size={16}
                strokeWidth={2}
                className={`transition-transform duration-200 ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <button
          type="button"
          aria-label={content.modelsMenu.closeLabel}
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 top-[64px] -z-10 bg-black/30 lg:hidden"
        />
      )}

      <div
        className={`fixed left-0 top-[64px] w-full overflow-hidden bg-white text-gray-900 shadow-[0_18px_45px_rgba(0,0,0,0.14)] transition-all duration-300 lg:block ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-5 lg:hidden">
          <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-400">
                {content.modelsMenu.label}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-600">
                {selectedBrand.name} / {selectedCategory.name}
              </p>
            </div>
            <button
              type="button"
              aria-label={content.modelsMenu.closeLabel}
              onClick={() => setIsMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-[#ffcc00] hover:text-gray-900"
            >
              <X size={18} />
            </button>
          </div>

          <div className="hide-scrollbar mb-5 flex gap-2 overflow-x-auto pb-1">
            {brands.map((brand, brandIndex) => (
              <button
                key={brand.name}
                type="button"
                onClick={() => selectBrand(brandIndex)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                  safeBrandIndex === brandIndex
                    ? "border-[#ffcc00]/70 bg-[#ffcc00]/10 text-gray-900"
                    : "border-gray-200 text-gray-500 hover:text-gray-900"
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>

          <div className="grid max-h-[calc(100vh-210px)] gap-6 overflow-y-auto pr-1 md:grid-cols-[0.45fr_0.55fr]">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-400">
                {content.modelsMenu.columnLabels.categories}
              </p>
              <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1 md:block md:space-y-2 md:overflow-visible">
                {categories.map((category, categoryIndex) => (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() => setSelectedCategoryIndex(categoryIndex)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors md:flex md:w-full md:items-center md:justify-between md:rounded-md md:px-4 md:py-3 md:text-left ${
                      safeCategoryIndex === categoryIndex
                        ? "border-[#1eb53a]/30 bg-[#1eb53a]/5 text-gray-900"
                        : "border-gray-200 text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {category.name}
                    {safeCategoryIndex === categoryIndex && (
                      <span className="hidden h-5 w-0.5 rounded-full bg-[#1eb53a] md:block" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-400">
                  {content.modelsMenu.columnLabels.models}
                </p>
                <span className="rounded-full border border-[#ffcc00]/30 bg-[#ffcc00]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600">
                  {selectedCategory.name}
                </span>
              </div>
              <div className="grid gap-3">
                {selectedCategory.models.map((model) => (
                  <article
                    key={model.name}
                    className="rounded-lg border border-gray-100 bg-white p-4"
                  >
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                      {model.name}
                    </h4>
                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      <span className="font-medium text-gray-700">
                        {content.modelsMenu.columnLabels.engine}:
                      </span>{" "}
                      {formatEngine(model.engineCc)}
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="font-medium text-gray-700">
                        {content.modelsMenu.columnLabels.segment}:
                      </span>{" "}
                      {model.segment}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {model.notes}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto hidden max-w-7xl grid-cols-1 px-6 py-7 lg:grid lg:grid-cols-[0.72fr_0.88fr_1.7fr] lg:py-9">
          <div className="border-b border-gray-100 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-400">
              {content.modelsMenu.columnLabels.brands}
            </p>
            <div className="hide-scrollbar max-h-[360px] space-y-2 overflow-y-auto pr-1">
              {brands.map((brand, brandIndex) => (
                <button
                  key={brand.name}
                  type="button"
                  onMouseEnter={() => selectBrand(brandIndex)}
                  onClick={() => selectBrand(brandIndex)}
                  className={`block w-full rounded-md border px-4 py-3 text-left text-base font-medium uppercase tracking-wide transition-colors ${
                    safeBrandIndex === brandIndex
                      ? "border-[#ffcc00]/50 bg-[#ffcc00]/10 text-gray-900"
                      : "border-transparent text-gray-600 hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {brand.name}
                </button>
              ))}
            </div>
          </div>

          <div className="border-b border-gray-100 py-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-0">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-400">
              {content.modelsMenu.columnLabels.categories}
            </p>
            <div className="hide-scrollbar max-h-[360px] space-y-1.5 overflow-y-auto pr-1">
              {categories.map((category, categoryIndex) => (
                <button
                  key={category.name}
                  type="button"
                  onMouseEnter={() => setSelectedCategoryIndex(categoryIndex)}
                  onClick={() => setSelectedCategoryIndex(categoryIndex)}
                  className={`flex w-full items-center justify-between rounded-md border border-transparent px-4 py-2.5 text-left text-sm font-medium uppercase tracking-wide transition-colors ${
                    safeCategoryIndex === categoryIndex
                      ? "bg-[#1eb53a]/5 text-gray-900"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {category.name}
                  {safeCategoryIndex === categoryIndex && (
                    <span className="h-6 w-0.5 rounded-full bg-[#1eb53a]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 lg:pl-8 lg:pt-0">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-400">
                  {content.modelsMenu.columnLabels.models}
                </p>
                <h3 className="mt-2 text-lg font-semibold uppercase tracking-wide text-gray-900">
                  {selectedCategory.name}
                </h3>
              </div>
              <span className="hidden rounded-full border border-[#ffcc00]/30 bg-[#ffcc00]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600 sm:inline-flex">
                {selectedBrand.name}
              </span>
            </div>

            <div className="hide-scrollbar grid max-h-[390px] gap-3 overflow-y-auto pr-1 sm:grid-cols-2">
              {selectedCategory.models.map((model) => (
                <article
                  key={model.name}
                  className="rounded-lg border border-gray-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-[#ffcc00]/60 hover:shadow-[0_10px_24px_rgba(0,0,0,0.05)]"
                >
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                    {model.name}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    <span className="font-medium text-gray-700">
                      {content.modelsMenu.columnLabels.engine}:
                    </span>{" "}
                    {formatEngine(model.engineCc)}
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="font-medium text-gray-700">
                      {content.modelsMenu.columnLabels.segment}:
                    </span>{" "}
                    {model.segment}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {model.notes}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
