"use client";

import { CheckCircle2, ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { TransitionEvent } from "react";
import { useEffect, useMemo, useState } from "react";

type Review = {
  name: string;
  date: string;
  text: string;
  stars?: number;
};

type ReviewsSectionProps = {
  content: {
    title: string;
    verifiedLabel: string;
    ctaLabel: string;
    ctaHref: string;
    items: Review[];
  };
};

const LONG_REVIEW_LENGTH = 145;

function getVisibleCount() {
  if (typeof window === "undefined") {
    return 3;
  }

  if (window.innerWidth < 768) {
    return 1;
  }

  if (window.innerWidth < 1024) {
    return 2;
  }

  return 3;
}

export function ReviewsSection({ content }: ReviewsSectionProps) {
  const [visibleCount, setVisibleCount] = useState(3);
  const [trackIndex, setTrackIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(
    () => new Set(),
  );

  useEffect(() => {
    const updateVisibleCount = () => {
      const nextVisibleCount = getVisibleCount();

      setIsTransitioning(false);
      setVisibleCount(nextVisibleCount);
      setTrackIndex(nextVisibleCount);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const carouselItems = useMemo(() => {
    const leadingItems = content.items.slice(-visibleCount);
    const trailingItems = content.items.slice(0, visibleCount);

    return [...leadingItems, ...content.items, ...trailingItems];
  }, [content.items, visibleCount]);

  const goToPreviousPage = () => {
    setIsTransitioning(true);
    setTrackIndex((currentIndex) => currentIndex - 1);
  };

  const goToNextPage = () => {
    setIsTransitioning(true);
    setTrackIndex((currentIndex) => currentIndex + 1);
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") {
      return;
    }

    if (trackIndex >= content.items.length + visibleCount) {
      setIsTransitioning(false);
      setTrackIndex(visibleCount);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }

    if (trackIndex < visibleCount) {
      setIsTransitioning(false);
      setTrackIndex(content.items.length + visibleCount - 1);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  const toggleReview = (reviewKey: string) => {
    setExpandedReviews((currentReviews) => {
      const nextReviews = new Set(currentReviews);

      if (nextReviews.has(reviewKey)) {
        nextReviews.delete(reviewKey);
      } else {
        nextReviews.add(reviewKey);
      }

      return nextReviews;
    });
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 uppercase">
            {content.title}
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-500 font-medium mb-4">
            <CheckCircle2 size={16} className="text-green-500" />
            {content.verifiedLabel}
          </div>
          <div className="w-24 h-1 bg-[#ffcc00] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className={`-mx-3 flex ${
                isTransitioning
                  ? "transition-transform duration-700 ease-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${trackIndex * (100 / visibleCount)}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {carouselItems.map((review, index) => {
                const reviewKey = `${review.name}-${review.date}`;
                const isExpanded = expandedReviews.has(reviewKey);
                const isLongReview = review.text.length > LONG_REVIEW_LENGTH;
                const starCount = review.stars ?? 5;

                return (
                  <div
                    key={`${reviewKey}-${index}`}
                    className="shrink-0 px-3"
                    style={{ flexBasis: `${100 / visibleCount}%` }}
                  >
                    <article className="flex h-[360px] flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                      <div className="mb-4 flex gap-1">
                        {[...Array(starCount)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={18}
                            className="fill-[#ffcc00] text-[#ffcc00]"
                          />
                        ))}
                      </div>

                      <div className="mb-6 min-h-0 flex-1">
                        <p
                          className={`text-gray-600 italic leading-relaxed ${
                            isExpanded
                              ? "max-h-36 overflow-y-auto pr-1"
                              : "line-clamp-4"
                          }`}
                        >
                          &quot;{review.text}&quot;
                        </p>

                        {isLongReview && (
                          <button
                            type="button"
                            onClick={() => toggleReview(reviewKey)}
                            className="mt-3 text-sm font-bold text-[#ffcc00] transition-colors hover:text-yellow-500"
                          >
                            {isExpanded ? "Ver menos" : "Ver más"}
                          </button>
                        )}
                      </div>

                      <div className="mt-auto flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-bold text-gray-600">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900">
                            {review.name}
                          </h4>
                          <p className="text-xs text-gray-400">
                            {review.date}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {content.items.length > visibleCount && (
            <>
              <button
                type="button"
                aria-label="Previous reviews"
                onClick={goToPreviousPage}
                className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all hover:scale-105 hover:text-[#ffcc00] md:left-0 md:-translate-x-1/2"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                aria-label="Next reviews"
                onClick={goToNextPage}
                className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all hover:scale-105 hover:text-[#ffcc00] md:right-0 md:translate-x-1/2"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={content.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#ffcc00] px-8 py-4 text-sm font-black uppercase tracking-wide text-black shadow-[0_10px_30px_rgba(255,204,0,0.28)] transition-all hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-[0_14px_36px_rgba(255,204,0,0.34)]"
          >
            {content.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
