"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  avatar: string;
  testimonial: string;
}

const fetchTestimonials = async (): Promise<Testimonial[]> => {
  const response = await fetch("https://dummyjson.com/users?limit=8");
  const data = await response.json();

  return data.users.map(
    (user: { id: number; firstName: string; lastName: string; image: string }, index: number) => ({
      id: user.id.toString(),
      name: `${user.firstName} ${user.lastName.charAt(0)}`,
      position: [
        "Product Quality Engineer",
        "Jewelry Design Specialist",
        "Customer Experience Lead",
        "Gemstone Expert",
      ][index % 4],
      avatar: user.image,
      testimonial: [
        "Absolutely breathtaking! The craftsmanship of my diamond ring exceeded all expectations.",
        "From the moment I stepped into their store, I felt like royalty. The attention to detail is impeccable.",
        "Every detail, from the sparkle of the diamonds to the elegant packaging, speaks volumes about their dedication.",
        "Exceptional quality and outstanding service. This isn't just jewelry—it's wearable art.",
        "The custom design process was so collaborative. They truly brought my vision to life.",
        "Their expertise in selecting the perfect stones made all the difference in my engagement ring.",
        "The finished piece was even more beautiful than I imagined. Truly masterful work.",
        "Their passion for creating unique, meaningful jewelry is evident in every piece.",
      ][index % 8],
    })
  );
};

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(4);

  const {
    data: testimonials,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDisplayCount(1);
      } else if (window.innerWidth < 1024) {
        setDisplayCount(2);
      } else {
        setDisplayCount(4);
      }
      setCurrentIndex(0); // Reset to first slide on resize
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalSlides = testimonials ? Math.ceil(testimonials.length / displayCount) : 0;

  const nextSlide = () => {
    if (testimonials) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        return newIndex >= testimonials.length ? 0 : newIndex;
      });
    }
  };

  const prevSlide = () => {
    if (testimonials) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        return newIndex < 0 ? Math.max(0, testimonials.length - displayCount) : newIndex;
      });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !testimonials) {
    return (
      <div className="text-center py-16 text-destructive">
        Failed to load testimonials. Please try again later.
      </div>
    );
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + displayCount);

  if (visibleTestimonials.length < displayCount) {
    const remaining = displayCount - visibleTestimonials.length;
    visibleTestimonials.push(...testimonials.slice(0, remaining));
  }

  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-10 md:mb-16 text-foreground">
          Testimonials
        </h2>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 z-10 bg-card rounded-full shadow-md p-2 hover:bg-muted transition-colors"
            aria-label="Previous testimonials"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6 text-card-foreground"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <div className="flex flex-wrap -mx-4">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={`px-4 ${
                  displayCount === 1
                    ? "w-full"
                    : displayCount === 2
                    ? "w-1/2"
                    : "w-full sm:w-1/2 lg:w-1/4"
                } transition-all duration-300`}
              >
                <div className="border border-border rounded-lg p-4 md:p-6 h-full flex flex-col items-center bg-card">
                  <div className="w-24 h-24 md:w-28 md:h-28 mb-4 md:mb-6 relative overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      sizes="(max-width: 768px) 96px, 112px"
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-medium text-center text-card-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center mb-3 md:mb-4">
                    {testimonial.position}
                  </p>

                  <p className="text-center text-card-foreground flex-grow">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 z-10 bg-card rounded-full shadow-md p-2 hover:bg-muted transition-colors"
            aria-label="Next testimonials"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6 text-card-foreground"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * displayCount)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full mx-1 md:mx-2 transition-colors ${
                Math.floor(currentIndex / displayCount) === index ? "bg-primary" : "bg-muted"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
