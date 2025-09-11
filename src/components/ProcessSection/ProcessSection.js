// src/components/ProcessSection/ProcessSection.js

import { steps } from "@/utils/processingData";
import Image from "next/image";

const ProcessSection = () => {
  return (
    <section className="bg-[#0A0F0D] py-20 ">
      {/* Header */}
      <div className="text-center mb-[48px]">
        <h2
          className="text-[#F5F5F5] font-manrope font-medium text-5xl leading-[72px]
         -tracking-[2px] mb-[8px]"
        >
          From Idea to Live Landing Page in{" "}
          <span className="text-[#1FFFA5]">Just 5 Days</span>
        </h2>
        <p
          className="text-[#F5F5F5] font-general-sans font-normal text-base 
        leading-6 tracking-normal"
        >
          Our streamlined process ensures fast delivery without compromising
          quality.
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid xl:grid-cols-3 lg:gap-[24px] gap-[36px]  relative xl:px-[200px] md:px-[160px] px-[16px]">
        {/* Connecting Lines */}

        {steps.map((step, index) => (
          <div
            key={index}
            className=" relative text-center p-[36px] rounded-[8px] bg-[#192420]"
          >
            {/* Day Badge */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2  inline-block bg-[#151E1B] text-[#1FFFA5] px-[8px]  
              rounded-full text-[12px] font-General Sans font-normal  border-1 border-[#1FFFA5]"
            >
              {step.day}
            </div>

            {/* Icon Container */}
            <div className="relative mb-6">
              {/* Icon Container */}
              <div className="w-[84px] h-[84px] p-[24px] bg-[#003D25] rounded-full flex items-center justify-center mx-auto relative z-10">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={24}
                  height={24}
                  priority
                  className="w-[24px] h-[24px]"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="mx-auto text-[#F5F5F5] font-general-sans font-medium text-xl mb-3 whitespace-nowrap">
                {step.title}
              </h3>

              <p className="text-[#B2B2B2] font-general-sans text-sm leading-[18px] mx-auto max-w-[232px]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
