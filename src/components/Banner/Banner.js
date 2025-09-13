"use-client";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import Form from "../ui/Form";

export default function Banner() {
  return (
    <div>
      <section className="min-h-scr een  overflow-hidden">
        {/* Navbar Logo */}
        <Navbar />
        <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-20 ">
          <div className="flex flex-col items-center text-center mx-auto ">
            {/* Badge/Tagline */}
            <div
              className="mb-6 inline-flex items-center gap-2 px-[18px] py-2 rounded-full
               border-[1px] border-t-[#1FFFA5]
            bg-[#192420] whitespace-nowrap  text-[#B2B2B2] text-[12px] leading-[18px] font-normal font-general"
            >
              <Image
                src="/doubleStar.svg"
                alt="icon"
                width={12}
                height={12}
                priority
              />
              Currently 20+ startups & entrepreneurs worldwide
            </div>

            {/* Main Heading */}
            <h1 className="text-[36px] leading-[36px] -tracking-[1px] md:text-[64px] xl:text-[72px] md:leading-[72px] md:-tracking-[4px] font-bold font-manrope text-[#F5F5F5] mb-3 lg:mb-4">
              Strategic Landing <br className="lg:hidden block" /> Pages That{" "}
              <br className="lg:block hidden" />
              Convert <br className="lg:hidden block" /> From Just{" "}
              <span className="text-[#1FFFA5] relative">$200</span>
            </h1>

            {/* Subtitle */}
            <p className="mb-12 text-[#F5F5F5] md:text-lg text-[12px] leading-[18px] md:leading-[26px] font-normal font-general">
              Stop wasting traffic on generic pages. We deliver premium,
              conversion-
              <br className="lg:hidden md:block hidden" /> focused landing pages
              designed, <br className="hidden lg:block" /> developed, and{" "}
              <br className="br-400" /> launched in just 5 days.
            </p>

            {/* Form Component - Full width on mobile */}
            <div className="w-full max-w-4xl">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
