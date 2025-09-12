"use client";

import Image from "next/image";

export default function FeaturesCard({
  icon,
  title,
  description,
  className = "",
}) {
  return (
    <div className="cursor-pointer rounded-[8px] bg-[#192420] p-6 border hover:border hover:border-[#1FFFA5] hover:bg-gradient-to-b hover:from-[#192420] hover:to-[#192420] relative hover:before:absolute hover:before:inset-0 hover:before:bg-[radial-gradient(51.72%_51.72%_at_50%_92.16%,rgba(31,255,165,0.2)_0%,rgba(31,255,165,0.02)_100%)] hover:before:pointer-events-none transition-all duration-300">
      <Image
        src={icon}
        alt={title}
        width={39}
        height={39}
        priority
        className="w-[39px] h-[39px]"
      />{" "}
      <h3 className="mt-[38px] text-[16px] font-medium font-manrope leading-[24px] text-[#F5F5F5]">
        {title}
      </h3>
      <p className="mt-3 text-[#B2B2B2] text-sm leading-[18px] font-general-sans regular">
        {description}
      </p>
    </div>
  );
}
