"use client";

import * as Accordion from "@radix-ui/react-accordion";

export default function FAQItem({ question, answer, value }) {
  return (
    <Accordion.Item
      key={value}
      value={value}
      className="border border-gray-700 rounded-lg bg-[#192420] backdrop-blur-sm"
    >
      <Accordion.Trigger className="flex w-full items-center justify-between p-6 text-left hover:bg-gray-700/30 transition-colors group">
        <div className="flex items-center space-x-4">
          <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
          <h3 className="text-white text-[24px] font-bold leading-[26px] -tracking-[1px] font-manrope">
            {question}
          </h3>
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="px-6 pb-6 pl-12 text-gray-300 text-[18px] leading-[26px] font-normal">
        {answer}
      </Accordion.Content>
    </Accordion.Item>
  );
}
