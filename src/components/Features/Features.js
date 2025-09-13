// import { featuresData } from "@/utils/featuresData";
// import FeaturesCard from "./FeaturesCard";

// export default function Features() {
//   return (
//     <div className="xl:py-[100px] py-[64px] bg-[#151E1B] xl:px-[120px] sm:px-[64px] px-[16px]">
//       <h3
//         className="text-center font-medium font-manrope text-[#F5F5F5] xl:text-[48px] xl:leading-[72px] text-[36px] leading-[42px]
//          -tracking-[2px]"
//       >
//         Why Businesses
//         <span className="text-[#1FFFA5]"> Trust Us</span>{" "}
//         <br className="hidden sm:block lg:hidden" /> With Their Designs
//       </h3>
//       <p className="text-center mt-[8px] font-normal font-general-sans sm:text-[16px] text-[14px] leading-[18px] sm:leading-[24px] text-[#F5F5F5]">
//         We combine proven conversion frameworks with agency-level design to{" "}
//         <br className="hidden sm:block lg:hidden" />
//         deliver results that matter.
//       </p>

//       {/* Features Grid */}
//       <div className="sm:mt-[48px] mt-[16px] grid sm:gap-[8px] md:gap-[36px] gap-[24px] sm:grid-cols-3">
//         {featuresData.map((features, index) => (
//           <FeaturesCard
//             key={index}
//             icon={features.icon}
//             title={features.title}
//             description={features.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import { featuresData } from "@/utils/featuresData";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FeaturesCard from "./FeaturesCard";

export default function Features() {
  const [viewportAmount, setViewportAmount] = useState(0.3); // default

  useEffect(() => {
    const updateViewport = () => {
      if (window.innerWidth < 640) {
        // mobile
        setViewportAmount(0.1); // triggers earlier on small screens
      } else {
        // tablet & desktop
        setViewportAmount(0.3); // default
      }
    };

    updateViewport(); // initial check
    window.addEventListener("resize", updateViewport); // handle resize
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  return (
    <div className="xl:py-[100px] md:py-[64px] py-[10px] bg-[#151E1B] xl:px-[120px] sm:px-[64px] px-[16px] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          exit: { duration: 0.1, ease: "easeInOut", y: -50 },
        }}
        viewport={{ once: true, amount: viewportAmount }} // dynamic amount
      >
        <h3 className="text-center font-medium font-manrope text-[#F5F5F5] xl:text-[48px] xl:leading-[72px] text-[36px] leading-[42px] -tracking-[2px]">
          Why Businesses
          <span className="text-[#1FFFA5]"> Trust Us</span>{" "}
          <br className="hidden sm:block lg:hidden" /> With Their Designs
        </h3>
        <p className="text-center mt-[8px] font-normal font-general-sans sm:text-[16px] text-[14px] leading-[18px] sm:leading-[24px] text-[#F5F5F5]">
          We combine proven conversion frameworks with agency-level design to{" "}
          <br className="hidden sm:block lg:hidden" />
          deliver results that matter.
        </p>
        <div className="sm:mt-[48px] mt-[16px] grid sm:gap-[8px] md:gap-[36px] gap-[24px] sm:grid-cols-3">
          {featuresData.map((features, index) => (
            <FeaturesCard
              key={index}
              icon={features.icon}
              title={features.title}
              description={features.description}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
