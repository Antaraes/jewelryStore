import React, { useRef } from "react";
import AnimationSection from "./AnimationSection";
import { useProcessAnimations } from "@/hooks/useGSAPAnimation";
import Image from "next/image";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="process-step flex items-start mb-6 md:mb-8">
      <div className="bg-blue-100 text-blue-900 font-bold rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 mr-3 md:mr-4 text-sm md:text-base">
        {number}
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2 text-gray-800">{title}</h3>
        <p className="text-sm md:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const CustomJewelryProcess: React.FC = () => {
  const processRef = useRef<HTMLDivElement>(null);
  useProcessAnimations(processRef);

  const processSteps = [
    {
      number: "01",
      title: "CONSULTATION",
      description: "We discuss your vision and preferences to craft a unique design.",
    },
    {
      number: "02",
      title: "SELECTING MATERIALS",
      description: "Choose from exquisite diamonds, precious metals, and gemstones.",
    },
    {
      number: "03",
      title: "CREATING A 3D MODEL",
      description: "Visualize your design with a precise 3D model before production.",
    },
    {
      number: "04",
      title: "MANUFACTURING",
      description: "Expert artisans bring your piece to life with precision and care.",
    },
    {
      number: "05",
      title: "QUALITY ASSURANCE",
      description: "Every detail is inspected to ensure flawless craftsmanship.",
    },
    {
      number: "06",
      title: "DELIVERY",
      description: "Your custom jewelry is elegantly packaged and delivered to you.",
    },
  ];

  return (
    <AnimationSection refProp={processRef} className="py-10 md:py-20 relative overflow-hidden">
      <div className="container mx-auto relative px-4">
        {/* Title section - Centered on mobile, left column on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16">
          <div className="relative">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="process-header text-2xl md:text-3xl lg:text-4xl font-serif mb-3 md:mb-4 text-gray-800">
                Custom Jewelry
              </h2>
              <p className="process-intro text-sm md:text-base text-gray-600">
                Exquisite design, flawless craftsmanship, and timeless elegance—your vision,
                perfectly crafted.
              </p>
            </div>
            <div className="relative h-full hidden  lg:block">
              <div className="band-image absolute left-0 top-10 w-full h-full pointer-events-none">
                <div className="relative w-full h-full">
                  <Image
                    src="/source/img/4.png"
                    alt="Diamond ring"
                    className="object-contain"
                    fill
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>

              <div className="band-image hidden md:block absolute bottom-0 right-0 w-1/3 md:w-1/2 h-1/3 md:h-1/2 pointer-events-none">
                <div className="relative w-full h-full">
                  <Image
                    src="/source/img/5.png"
                    alt="Wedding band"
                    className="object-contain object-bottom"
                    fill
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
            <div className=" relative z-10 mt-10 mb-16 md:mb-8">
              <button className="bg-blue-900 text-white py-2 px-6 md:py-3 md:px-8 rounded-md hover:bg-blue-800 transition-colors duration-300 text-sm md:text-base">
                Book a Consultation
              </button>
            </div>
          </div>
          <div className="relative h-80 lg:hidden ">
            <div className="band-image absolute left-0 top-10 w-full h-full pointer-events-none">
              <div className="relative w-full h-full">
                <Image
                  src="/source/img/4.png"
                  alt="Diamond ring"
                  className="object-contain"
                  fill
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            <div className="band-image  absolute bottom-0 right-0 w-1/3 md:w-1/2 h-1/3 md:h-1/2 pointer-events-none">
              <div className="relative w-full h-full">
                <Image
                  src="/source/img/5.png"
                  alt="Wedding band"
                  className="object-contain object-bottom"
                  fill
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimationSection>
  );
};

export default CustomJewelryProcess;
