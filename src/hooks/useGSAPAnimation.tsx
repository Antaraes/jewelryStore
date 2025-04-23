import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useHeroAnimations = (heroRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
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

    return () => {
      heroTl.kill();
    };
  }, [heroRef]);
};

export const useExploreAnimations = (exploreRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const exploreTl = gsap.timeline({
      scrollTrigger: {
        trigger: exploreRef.current,
        start: "top 80%",
        end: "bottom 80%",
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
      );

    return () => {
      exploreTl.kill();
    };
  }, [exploreRef]);
};

export const useFeaturesAnimations = (featuresRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
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

    return () => {
      featuresTl.kill();
    };
  }, [featuresRef]);
};

export const useCustomJewelryAnimations = (
  customJewelryRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    if (!customJewelryRef.current) return;

    // Diamond shapes animation
    const diamondsTl = gsap.timeline({
      scrollTrigger: {
        trigger: customJewelryRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });

    diamondsTl
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
      );

    gsap.from(".diamonds-main", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".ring-image", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.2,
    });

    gsap.from(".diamond-closeup", {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.4,
    });

    gsap.to(".diamonds-main", {
      y: 50,
      scrollTrigger: {
        trigger: customJewelryRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".diamond-closeup", {
      y: 30,
      scrollTrigger: {
        trigger: customJewelryRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Clean up animations when component unmounts
    return () => {
      if (customJewelryRef.current) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.killTweensOf("*");
      }
    };
  }, [customJewelryRef]);
};

export const useProcessAnimations = (processRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const processTl = gsap.timeline({
      scrollTrigger: {
        trigger: processRef.current,
        start: "top 70%",
        end: "bottom 70%",
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
      );

    return () => {
      processTl.kill();
    };
  }, [processRef]);
};

export const useParallaxEffects = () => {
  useEffect(() => {
    const parallaxEffect = gsap.to(".bg-shape", {
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

    return () => {
      parallaxEffect.kill();
    };
  }, []);
};

export const useCleanupScrollTriggers = () => {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, []);
};
