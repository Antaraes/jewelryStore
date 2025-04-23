// components/CustomJewelryBanner.tsx
import React, { useRef } from "react";
import AnimationSection from "./AnimationSection";
import Image from "next/image";
import { useCustomJewelryAnimations } from "@/hooks/useGSAPAnimation";

const CustomJewelryBanner: React.FC = () => {
  const customJewelryRef = useRef<HTMLDivElement>(null);
  useCustomJewelryAnimations(customJewelryRef);

  return (
    <AnimationSection
      refProp={customJewelryRef}
      className="py-20 bg-[#F0F0F0] overflow-hidden relative"
    >
      <div className=" mx-auto px-4 relative">
        <DiamondShapes />

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
          <h2 className="custom-title text-5xl font-serif mb-4 text-gray-800">Custom Jewelry</h2>
          <p className="custom-subtitle text-xl text-gray-600 mb-8 max-w-2xl">
            Create Your Masterpiece: Bespoke Jewelry Crafted for You
          </p>
        </div>

        <div className="relative h-32 lg:h-40">
          <div className="diamonds-main absolute left-0 top-0 w-1/3 z-10">
            <Image
              src="/source/img/1.png"
              alt="Collection of diamonds"
              width={533}
              height={381}
              className="object-contain"
            />
          </div>

          <div className="diamonds-main absolute right-0 top-0 w-1/3 z-10">
            <Image
              src="/source/img/2.png"
              alt="Diamond ring"
              width={565}
              height={565}
              className="object-contain"
            />
          </div>

          <div className="diamond-closeup absolute right-16 top-[-213px] w-1/4 z-20">
            <Image
              src="/source/img/3.png"
              alt="Diamond close-up"
              width={363}
              height={336}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </AnimationSection>
  );
};

// Extract the diamond shapes to a separate component
const DiamondShapes = () => {
  return (
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
  );
};

export default CustomJewelryBanner;
