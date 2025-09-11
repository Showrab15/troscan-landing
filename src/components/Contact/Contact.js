// src/components/HeroFormSection.js
import {
  ArrowRightIcon,
  CheckIcon,
  LockClosedIcon,
  StarIcon,
} from "@radix-ui/react-icons";

export default function Contact() {
  return (
    <section className="bg-[#0A0F0D] py-16 flex flex-col items-center text-center px-4 sm:px-6 lg:px-12">
      {/* Title */}
      <h2
        className="text-[32px] sm:text-[40px] xl:text-[72px] xl:leading-[72px] font-bold
       text-[#F5F5F5] mb-4 font-sans"
      >
        Ready to Turn Visitors Into <br />
        <span className="text-[#1FFFA5]">Real Customers?</span>
      </h2>
      <p className="font-normal text-[#F5F5F5]  xl:text-[18px] mb-8 max-w-[600px]">
        {`Don't`} settle for an average page. Get a premium, conversion-focused
        landing page that pays for itself.
      </p>

      {/* Form Container */}
      <div className="bg-[#151E1B] border border-[#2A3C36] rounded-lg p-9 flex flex-col gap-6 shadow-[0px_9px_24px_0px_rgba(31,255,165,0.25),0px_7px_8px_0px_rgba(255,255,255,0.5)_inset] max-w-[794px] w-full">
        {/* Input Fields */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 border-2 border-[#2A3C36] rounded-[4px] p-[18px] text-[#B2B2B2] placeholder:text-[#B2B2B2] placeholder:text-[12px] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 border-2 border-[#2A3C36] rounded-[4px] p-[18px] text-[#B2B2B2] placeholder:text-[#B2B2B2]  placeholder:text-[12px] focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="flex-1 border-2 border-[#2A3C36] rounded-[4px] p-[18px] text-[#B2B2B2] placeholder:text-[#B2B2B2]  placeholder:text-[12px] focus:outline-none"
          />
        </div>

        {/* Button below inputs */}
        <button className="flex items-center justify-center gap-2 bg-[#1FFFA5] text-[#0A0F0D] font-medium rounded-lg px-8 py-4 w-full shadow-[0px_9px_24px_0px_rgba(31,255,165,0.25)] mt-4">
          Get my high-converting landing page <ArrowRightIcon />
        </button>
      </div>

      {/* Guarantee List */}
      <ul className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 text-[#F5F5F5] text-[12px] font-normal">
        <li className="flex items-center gap-2">
          <LockClosedIcon className="w-[16px] h-[16px]" />
          SSL secure
        </li>
        <li className="flex items-center gap-2">
          <CheckIcon className="w-[16px] h-[16px]" />
          Money-back guaranteed
        </li>
        <li className="flex items-center gap-2">
          <StarIcon className="w-[16px] h-[16px]" />
          Satisfaction guaranteed
        </li>
      </ul>
    </section>
  );
}
