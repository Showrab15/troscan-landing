import { CheckIcon, LockClosedIcon, StarIcon } from "@radix-ui/react-icons";
import Button from "./Button";

export default function Form() {
  return (
    <div className="w-full">
      <div
        className="bg-[var(--Color-Background,#151E1B)]
         border border-[var(--Color-Stroke,#2A3C36)] 
         rounded-lg sm:p-9 p-4 flex flex-col gap-6 w-full"
      >
        {/* Input Fields */}
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full cursor-pointer hover:bg-[#192420] border-2 border-[#2A3C36]
                  rounded-[4px] md:p-[18px] p-[14px] text-[#B2B2B2]
                  placeholder:text-[#B2B2B2] placeholder:text-[12px] focus:outline-none
                   focus:border-[#1FFFA5] transition-all duration-300 ease-out bg-transparent"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full cursor-pointer hover:bg-[#192420] border-2 border-[#2A3C36] 
                 rounded-[4px] md:p-[18px] p-[14px] 
                 text-[#B2B2B2] placeholder:text-[#B2B2B2] placeholder:text-[12px] 
                 focus:outline-none focus:border-[#1FFFA5] transition-all duration-300 ease-out bg-transparent"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full cursor-pointer hover:bg-[#192420] border-2 border-[#2A3C36]
                  rounded-[4px] md:p-[18px] p-[14px]
                  text-[#B2B2B2] placeholder:text-[#B2B2B2] placeholder:text-[12px] 
                  focus:outline-none focus:border-[#1FFFA5] transition-all duration-300 ease-out bg-transparent"
          />
        </div>
        <Button fullWidth text="Get my high-converting landing page" />
      </div>

      <div className="mt-[16px] w-full  text-[12px] text-[#B2B2B2] font-normal font-general">
        {/* Mobile layout */}
        <div className="flex justify-between md:hidden ">
          {/* Left Side */}
          <div className="flex flex-col gap-4 ">
            <div className="flex items-center gap-2">
              <LockClosedIcon className="w-[16px] h-[16px]" />
              SSL secure
            </div>
            <div className="flex text-left items-center gap-2 whitespace-nowrap">
              <StarIcon className="w-[16px] h-[16px]" />
              Satisfaction guaranteed
            </div>
          </div>

          {/* Right Side */}
          <div className="text-[12px] flex text-right items-center gap-2 whitespace-nowrap">
            <CheckIcon className="text-right w-[16px] h-[16px]" />
            Money-back guaranteed
          </div>
        </div>

        {/* Desktop layout */}
        {/* Desktop layout */}
        <ul className="hidden md:flex justify-center items-center gap-[64px]">
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
      </div>
    </div>
  );
}
