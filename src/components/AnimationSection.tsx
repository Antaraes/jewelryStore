import React from "react";

const AnimationSection: React.FC<AnimationSectionProps> = ({
  children,
  className = "",
  refProp,
}) => {
  return (
    <section ref={refProp} className={className}>
      {children}
    </section>
  );
};

export default AnimationSection;
