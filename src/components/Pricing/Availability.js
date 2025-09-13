import Image from "next/image";

export default function Availability() {
  return (
    <div className="flex gap-[20px] items-center my-[48px]">
      <Image src="/FlashIcon.svg" alt="Flash Icon" width={25} height={36} />
      <div>
        <h6 className="font-manrope font-bold text-[24px] leading-[26px] -tracking-[1px] text-[#F5F5F5]">
          Limited Availability
        </h6>
        <p className="mt-[8px] font-normal font-general text-[14px] leading-[18px] text-[#B2B2B2]">
          We only onboard 5 new clients per month. 2 spots left for this month —
          secure yours today.
        </p>
      </div>
    </div>
  );
}
