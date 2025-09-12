import { featuresData } from "@/utils/featuresData";
import FeaturesCard from "./FeaturesCard";

export default function Features() {
  return (
    <div className="bg-[#0A0F0D] xl:px-[120px] sm:px-[64px] px-[16px]">
      <h3
        className="text-center font-medium font-manrope text-[#F5F5F5] xl:text-[48px] xl:leading-[72px] text-[36px] leading-[42px]
         -tracking-[2px]"
      >
        Why Businesses
        <span className="text-[#1FFFA5]"> Trust Us</span> With Their Designs
      </h3>
      <p className="text-center mt-[8px] font-normal font-general-sans sm:text-[16px] text-[14px] leading-[18px] sm:leading-[24px] text-[#F5F5F5]">
        We combine proven conversion frameworks with agency-level design to
        deliver results that matter.
      </p>

      {/* Pricing Grid */}
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
    </div>
  );
}
