import React, { useRef } from "react";
import AnimationSection from "./AnimationSection";
import EducationLink from "./EducationLinkSection";
import { useExploreAnimations } from "@/hooks/useGSAPAnimation";
import Image from "next/image";

const ExploreMoreSection: React.FC = () => {
  const exploreRef = useRef<HTMLDivElement>(null);
  useExploreAnimations(exploreRef);

  const educationLinks = [
    {
      title: "How to Select the Ideal Wedding Band",
      href: "#",
    },
    {
      title: "Lab Grown Diamond Guide",
      href: "#",
    },
    {
      title: "How to Choose the Engagement Ring",
      href: "#",
    },
    {
      title: "Ring Size Guide",
      href: "#",
    },
  ];

  return (
    <AnimationSection refProp={exploreRef} className=" bg-white">
      <div className=" mx-auto relative flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 mx-auto px-20">
          <h2 className="explore-title text-3xl md:text-4xl font-serif mb-4 text-gray-800">
            Explore More
          </h2>
          <p className="explore-text text-gray-600 mb-8">
            Looking for more diamond guides, buying tips or details about the 4Cs? Explore more of
            our diamond education pages:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationLinks.map((link, index) => (
              <EducationLink key={index} title={link.title} href={link.href} />
            ))}
          </div>
        </div>

        <div className=" w-full lg:w-1/2 md:pl-12">
          <Image
            src="/source/img/6.png"
            alt="Elegant jewelry"
            className="w-full h-auto"
            width={500}
            height={500}
          />
        </div>
      </div>
    </AnimationSection>
  );
};

export default ExploreMoreSection;
