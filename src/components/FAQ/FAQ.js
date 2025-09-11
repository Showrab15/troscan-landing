// src/components/FAQ/FAQ.JS
"use client";
import { faqData } from "@/utils/faqData";
import * as Accordion from "@radix-ui/react-accordion";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  return (
    <div className="bg-[#151e1b] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-[#F5F5F5] mb-12 text-[48px] font-medium leading-[72px] -tracking-[2px] font-manrope">
          Got Questions<span className="text-[#1FFFA5]">? </span>
          {`We've`} Got The Answers
        </h2>

        <Accordion.Root type="single" collapsible className="w-full space-y-4">
          {faqData.map((item) => (
            <FAQItem key={item.id} {...item} />
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
};

export default FAQSection;
