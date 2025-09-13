import Button from "../ui/Button";

export default function Special() {
  return (
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
      <p className="mt-2 font-general font-normal text-[#F5F5F5]  xl:text-[16px] text-[14px] sm:text-[16px] leading-[24px]">
        Get 10% OFF + Free Hosting Setup when you book this week.
      </p>
      <div className="mt-[24px] sm:mt-[48px]">
        <Button text="Claim my 10% discount" />
      </div>
    </section>
  );
}
