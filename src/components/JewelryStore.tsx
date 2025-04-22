"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const JewelryStore: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const customJewelryRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize animations when component mounts
    initAnimations();

    // Clean up animations when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  const initAnimations = () => {
    // Hero section animations
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTl
      .to(".hero-image", {
        scale: 0.95,
        y: 100,
        duration: 1,
      })
      .to(
        ".hero-text",
        {
          y: -50,
          opacity: 0.8,
          duration: 0.5,
        },
        0
      );

    // Explore More section animations
    const exploreTl = gsap.timeline({
      scrollTrigger: {
        trigger: exploreRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });

    exploreTl
      .from(".explore-title", {
        opacity: 0,
        y: 50,
        duration: 0.5,
      })
      .from(
        ".explore-text",
        {
          opacity: 0,
          y: 30,
          duration: 0.5,
        },
        "-=0.3"
      )
      .from(
        ".education-link",
        {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.5,
        },
        "-=0.3"
      )
      .from(
        ".link-icon",
        {
          scale: 0,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

    // Features section animations
    const featuresTl = gsap.timeline({
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
      },
    });

    featuresTl
      .from(".features-title", {
        opacity: 0,
        y: 30,
        duration: 0.5,
      })
      .from(".feature-card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
      })
      .from(
        ".feature-icon",
        {
          scale: 0,
          rotation: -45,
          duration: 0.5,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=1"
      );

    // Custom Jewelry Banner animations
    const customJewelryTl = gsap.timeline({
      scrollTrigger: {
        trigger: customJewelryRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    customJewelryTl
      .from(".diamond-1", {
        x: -100,
        y: 50,
        rotation: -45,
        opacity: 0,
        duration: 1,
      })
      .from(
        ".diamond-2",
        {
          x: -50,
          y: -30,
          rotation: 30,
          opacity: 0,
          duration: 1,
        },
        "-=0.8"
      )
      .from(
        ".diamond-3",
        {
          x: 80,
          y: 60,
          rotation: 60,
          opacity: 0,
          duration: 1,
        },
        "-=0.8"
      )
      .from(
        ".custom-title",
        {
          opacity: 0,
          y: 30,
          duration: 0.5,
        },
        "-=0.8"
      )
      .from(
        ".custom-subtitle",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        "-=0.3"
      )
      .from(
        ".tools",
        {
          x: 100,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      );

    // Process section animations
    const processTl = gsap.timeline({
      scrollTrigger: {
        trigger: processRef.current,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
      },
    });

    processTl
      .from(".process-header", {
        opacity: 0,
        y: 30,
        duration: 0.5,
      })
      .from(
        ".process-intro",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        "-=0.3"
      )
      .from(
        ".process-step",
        {
          opacity: 0,
          y: 40,
          stagger: 0.2,
          duration: 0.5,
        },
        "-=0.2"
      )
      .from(
        ".ring-image",
        {
          scale: 0.8,
          opacity: 0,
          rotation: 5,
          duration: 0.8,
        },
        "-=1"
      )
      .from(
        ".band-image",
        {
          scale: 0.8,
          opacity: 0,
          rotation: -5,
          duration: 0.8,
        },
        "-=0.6"
      );

    // Create a parallax effect for background elements
    gsap.to(".bg-shape", {
      y: (i: number, el: HTMLElement) =>
        -ScrollTrigger.maxScroll(window) * parseFloat(el.dataset.speed!),
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: true,
      },
    });
  };

  return (
    <div className="min-h-screen w-full  overflow-hidden">
      {/* Custom Jewelry Banner */}
      <section ref={customJewelryRef} className="py-20 bg-[#F0F0F0] overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="absolute left-0 top-0 w-full h-full">
            <div className="diamond-1 absolute left-[10%] top-[20%] w-8 h-8 opacity-30">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="#B8C6DB" />
              </svg>
            </div>
            <div className="diamond-2 absolute left-[30%] top-[60%] w-12 h-12 opacity-20">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="#B8C6DB" />
              </svg>
            </div>
            <div className="diamond-3 absolute right-[20%] top-[30%] w-16 h-16 opacity-25">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="#B8C6DB" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 z-10">
              <img
                src="/api/placeholder/500/300"
                alt="Various diamonds"
                className="rounded-lg shadow-lg mb-6"
              />
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-col justify-center z-10">
              <h2 className="custom-title text-3xl md:text-4xl font-serif mb-4 text-gray-800">
                Custom Jewelry
              </h2>
              <p className="custom-subtitle text-xl text-gray-600 mb-6">
                Create Your Masterpiece: Bespoke Jewelry Crafted for You
              </p>
              <button className="bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors duration-300 w-max">
                Start Your Design
              </button>
            </div>
          </div>

          <div className="tools absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 opacity-20">
            <svg
              width="150"
              height="150"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#9CA3AF"
                strokeWidth="1"
              />
              <path d="M12 8V16M8 12H16" stroke="#9CA3AF" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </section>
      {/* Custom Jewelry Process */}
      <section ref={processRef} className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="process-header text-3xl md:text-4xl font-serif mb-4 text-gray-800">
              Custom Jewelry
            </h2>
            <p className="process-intro text-gray-600">
              Exquisite design, flawless craftsmanship, and timeless elegance—your vision, perfectly
              crafted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative">
              <div className="ring-image absolute w-full h-full flex items-center justify-center">
                <img
                  src="/api/placeholder/400/500"
                  alt="Diamond ring"
                  className="rounded-lg shadow-xl max-w-full max-h-full object-contain"
                />
              </div>
              <div className="band-image absolute bottom-0 right-0 w-1/2 h-1/2">
                <img
                  src="/api/placeholder/200/200"
                  alt="Wedding band"
                  className="rounded-lg shadow-lg max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            <div>
              <div className="process-step flex items-start mb-8">
                <div className="bg-blue-100 text-blue-900 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-800">CONSULTATION</h3>
                  <p className="text-gray-600">
                    We discuss your vision and preferences to craft a unique design.
                  </p>
                </div>
              </div>

              <div className="process-step flex items-start mb-8">
                <div className="bg-blue-100 text-blue-900 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-800">SELECTING MATERIALS</h3>
                  <p className="text-gray-600">
                    Choose from exquisite diamonds, precious metals, and gemstones.
                  </p>
                </div>
              </div>

              <div className="process-step flex items-start mb-8">
                <div className="bg-blue-100 text-blue-900 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-800">CREATING A 3D MODEL</h3>
                  <p className="text-gray-600">
                    Visualize your design with a precise 3D model before production.
                  </p>
                </div>
              </div>

              <div className="process-step flex items-start mb-8">
                <div className="bg-blue-100 text-blue-900 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                  04
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-800">MANUFACTURING</h3>
                  <p className="text-gray-600">
                    Expert artisans bring your piece to life with precision and care.
                  </p>
                </div>
              </div>

              <div className="process-step flex items-start mb-8">
                <div className="bg-blue-100 text-blue-900 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                  05
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-800">QUALITY ASSURANCE</h3>
                  <p className="text-gray-600">
                    Every detail is inspected to ensure flawless craftsmanship.
                  </p>
                </div>
              </div>

              <div className="process-step flex items-start">
                <div className="bg-blue-100 text-blue-900 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                  06
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-800">DELIVERY</h3>
                  <p className="text-gray-600">
                    Your custom jewelry is elegantly packaged and delivered to you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-900 text-white py-3 px-8 rounded-md hover:bg-blue-800 transition-colors duration-300">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="features-title text-3xl md:text-4xl font-serif text-center mb-16 text-gray-800">
            Why Choose MyJewel?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-900 mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="feature-icon w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">
                Personal Design Consultation
              </h3>
              <p className="text-gray-600">Work with our designers to create your perfect piece.</p>
            </div>

            <div className="feature-card bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-900 mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="feature-icon w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">
                Crafted with Luxury Materials
              </h3>
              <p className="text-gray-600">
                Only the finest diamonds, gemstones, and precious metals used.
              </p>
            </div>

            <div className="feature-card bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-900 mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="feature-icon w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">Lifetime Warranty</h3>
              <p className="text-gray-600">
                Lifetime warranty on every piece, ensuring quality and lasting beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section ref={exploreRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="explore-title text-3xl md:text-4xl font-serif mb-4 text-gray-800">
              Explore More
            </h2>
            <p className="explore-text text-gray-600 mb-8">
              Looking for more diamond guides, buying tips or details about the 4Cs? Explore more of
              our diamond education pages:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="#"
                className="education-link group flex justify-between items-center p-4 border border-gray-200 rounded-md hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <span className="text-gray-700 group-hover:text-blue-900">
                  How to Select the Ideal Wedding Band
                </span>
                <span className="link-icon text-blue-900 bg-blue-50 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="#"
                className="education-link group flex justify-between items-center p-4 border border-gray-200 rounded-md hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <span className="text-gray-700 group-hover:text-blue-900">
                  Lab Grown Diamond Guide
                </span>
                <span className="link-icon text-blue-900 bg-blue-50 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="#"
                className="education-link group flex justify-between items-center p-4 border border-gray-200 rounded-md hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <span className="text-gray-700 group-hover:text-blue-900">
                  How to Choose the Engagement Ring
                </span>
                <span className="link-icon text-blue-900 bg-blue-50 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="#"
                className="education-link group flex justify-between items-center p-4 border border-gray-200 rounded-md hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <span className="text-gray-700 group-hover:text-blue-900">Ring Size Guide</span>
                <span className="link-icon text-blue-900 bg-blue-50 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <img
              src="/api/placeholder/600/700"
              alt="Elegant jewelry"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default JewelryStore;
