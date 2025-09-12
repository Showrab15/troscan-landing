import Form from "../ui/Form";

export default function Contact() {
  return (
    <section
      className="bg-[#0b1913] py-16 flex flex-col
     items-center text-center px-4 sm:px-6 lg:px-12"
    >
      {/* Title */}
      <h2
        className=" text-[36px] leading-[36px] md:text-[64px]
         md:leading-[72px] xl:text-[72px] xl:leading-[72px] font-bold
       text-[#F5F5F5] mb-4 font-sans"
      >
        Ready to Turn <br className="xl:hidden md:block hidden" /> Visitors Into{" "}
        <br className="md:block hidden" />
        <span className="text-[#1FFFA5]">Real Customers?</span>
      </h2>
      <p className="font-normal text-[#F5F5F5]  xl:text-[18px] text-[14px] sm:text-[16px] mb-[48px] lg:mb-8 max-w-[600px]">
        {`Don't`} settle for an average page. Get a premium, conversion-focused
        landing page that pays for itself.
      </p>

      <div className="w-full max-w-4xl">
        <Form />
      </div>
    </section>
  );
}
