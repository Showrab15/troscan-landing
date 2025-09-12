import { pricingPlans } from "@/utils/pricingPlans";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <div className="bg-[#0A0F0D] xl:px-[120px] sm:px-[64px] px-[16px]">
      <h3
        className="font-medium font-manrope text-[#F5F5F5] xl:text-[48px] xl:leading-[72px] text-[36px] leading-[42px]
 -tracking-[2px]"
      >
        Simple, Transparent Pricing —{" "}
        <span className="text-[#1FFFA5]">Choose Your Plan</span>
      </h3>
      <p className="mt-[8px] font-normal font-general-sans sm:text-[16px] text-[14px] leading-[18px] sm:leading-[24px] text-[#F5F5F5]">
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
      <div className="flex gap-[20px] items-center my-[48px]">
        <Image src="/FlashIcon.svg" alt="Flash Icon" width={25} height={36} />
        <div>
          <h6 className="font-manrope font-bold text-[24px] leading-[26px] -tracking-[1px] text-[#F5F5F5]">
            Limited Availability
          </h6>
          <p className="mt-[8px] font-normal font-general-sans text-[14px] leading-[18px] text-[#B2B2B2]">
            We only onboard 5 new clients per month. 2 spots left for this month
            — secure yours today.
          </p>
        </div>
      </div>

      {/* box section */}
      <section
        className="bg-[#192420] rounded-[16px] md:p-[48px] sm:p-[32px] p-[24px] flex flex-col
     items-center text-center "
      >
        {/* Title */}
        <h2
          className="text-[24px] leading-[26px] md:text-[36px]
         md:leading-[42px] xl:text-[48px] xl:leading-[72px] sm:-tracking-[2px] -tracking-[2px] sm:font-medium
       sm:text-[#F5F5F5] font-bold text-[#1FFFA5]  font-manrope"
        >
          Special Offer For Early Clients
        </h2>
        <p className="mt-2 font-general-sans font-normal text-[#F5F5F5]  xl:text-[16px] text-[14px] sm:text-[16px] leading-[24px]">
          Get 10% OFF + Free Hosting Setup when you book this week.
        </p>
        <button
          className=" px-8 py-4 w-auto mt-[24px] sm:mt-[48px]  mx-auto flex items-center justify-center
                     gap-2 hover:gap-4 bg-[#1FFFA5]
                 text-[#002013] font-medium font-sans rounded-lg hover:rounded-[16px]
                    text-[12px] md:text-[16px]
                   shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset]
                    hover:shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset]"
        >
          Claim my 10% discount
          <ArrowRightIcon className="text-[#002013] w-4 h-4" />
        </button>
      </section>
    </div>
  );
}
