"use client";
import { useCleanupScrollTriggers, useParallaxEffects } from "@/hooks/useGSAPAnimation";
import React, { useRef } from "react";
import CustomJewelryBanner from "./CustomeJewelryBanner";
import CustomJewelryProcess from "./CustomJewelryProcess";
import WhyChooseUs from "./WhyChooseUse";
import ExploreMoreSection from "./ExploreMoreSection";

const JewelryStore: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useParallaxEffects();
  useCleanupScrollTriggers();

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <CustomJewelryBanner />
      <CustomJewelryProcess />
      <WhyChooseUs />
      <ExploreMoreSection />
    </div>
  );
};

export default JewelryStore;
