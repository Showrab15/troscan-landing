// src/components/FAQ/FAQ.js
"use client";
import { faqData } from "@/utils/faqData";
import ProcessSection from "../ProcessSection/ProcessSection";
import FAQCard from "./FAQItem"; // still importing, just renamed conceptually

const FAQSection = () => {
  return (
    <div className="bg-[#151e1b] ">
      <ProcessSection />
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center text-[#F5F5F5] mb-12 text-[48px] font-medium leading-[72px] 
        -tracking-[2px] "
            style={{
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Got Questions<span className="text-[#1FFFA5]">? </span>
            {`We've`} Got The Answers
          </h2>

          <div className="w-full space-y-[24px]">
            {faqData.map((item) => (
              <FAQCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
