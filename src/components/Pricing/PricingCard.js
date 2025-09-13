"use client";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Button from "../ui/Button";

export default function PricingCard({
  title,
  price,
  description,
  features,
  popular = false,
}) {
  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl 
        bg-[#151E1B] p-[16px] sm:p-[36px] shadow-sm 
        ${
          popular
            ? "border-2 border-[#1FFFA5] bg-[#192420] shadow-[0_0_20px_#1FFFA533]"
            : ""
        }`}
    >
      {/* Popular Badge */}
      {popular && (
        <span
          className="absolute -top-3 left-6 rounded-full border-2 border-[#1FFFA5]
         bg-[#151E1B] px-3 py-[6px] text-xs font-normal font-general text-[#1FFFA5]"
        >
          Most popular
        </span>
      )}

      {/* Title & Price */}
      <div className="flex justify-between  items-start">
        <div>
          <h3 className="font-semibold font-manrope  text-[24px] leading-[26px] -tracking-[1px] text-[#F5F5F5]">
            {title}
          </h3>
          <p className="whitespace-nowrap mt-2 font-regular font-general text-sm leading-[18px] text-[#F5F5F5]">
            {description}
          </p>
        </div>
        <p className=" text-[24px] leading-[26px] -tracking-[1px] font-semibold font-manrope text-[#1FFFA5]">
          ${price}
        </p>
      </div>

      {/* Divider */}
      <div className="lg:my-[36px] sm:my-[27px] my-[24px] h-[1px] w-full bg-[#2A3C36]" />

      {/* Features */}
      <ul className="flex flex-col gap-3 text-left text-[12px] font-general font-normal text-[#B2B2B2]">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-[14px]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#1FFFA5]" />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="mt-8">
        <Button
          text="Start my project"
          fullWidth
          variant={popular ? "primary" : "secondary"}
          icon={ArrowRightIcon}
        />
      </div>
    </div>
  );
}
