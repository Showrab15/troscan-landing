import { pricingPlans } from "@/utils/pricingPlans";

import Availability from "./Availability";
import PricingCard from "./PricingCard";
import Special from "./Special";

export default function Pricing() {
  return (
    <div className="lg:py-[60px] py-[50px]  xl:px-[120px] sm:px-[64px] px-[16px]">
      <h3 className="font-medium font-manrope text-[#F5F5F5] xl:text-[48px] xl:leading-[72px] text-[36px] leading-[42px] -tracking-[2px]">
        Simple, Transparent Pricing —{" "}
        <span className="text-[#1FFFA5]">Choose Your Plan</span>
      </h3>
      <p className="mt-[8px] font-normal font-general sm:text-[16px] text-[14px] leading-[18px] sm:leading-[24px] text-[#F5F5F5]">
        No hidden fees, no surprises. Just premium landing pages at unbeatable
        prices.
      </p>

      {/* Pricing Grid */}
      <div className="sm:mt-[48px] mt-[16px] grid lg:gap-[48px] gap-[24px] lg:grid-cols-3">
        {pricingPlans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </div>

      {/* middle section */}
      <Availability />

      {/* box section */}
      <Special />
    </div>
  );
}
