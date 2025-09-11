// // src/components/HeroFormSection.js
// import {
//   ArrowRightIcon,
//   CheckIcon,
//   LockClosedIcon,
//   StarIcon,
// } from "@radix-ui/react-icons";

// export default function Contact() {
//   return (
//     <section
//       className="bg-[var(--Color-Background-dark,#0A0F0D)] py-16 flex flex-col
//      items-center text-center px-4 sm:px-6 lg:px-12"
//     >
//       {/* Title */}
//       <h2
//         className=" text-[36px] leading-[36px] md:text-[64px]
//          md:leading-[72px] xl:text-[72px] xl:leading-[72px] font-bold
//        text-[#F5F5F5] mb-4 font-sans"
//       >
//         Ready to Turn <br className="xl:hidden md:block hidden" /> Visitors Into{" "}
//         <br className="md:block hidden" />
//         <span className="text-[#1FFFA5]">Real Customers?</span>
//       </h2>
//       <p className="font-normal text-[#F5F5F5]  xl:text-[18px] text-[14px] sm:text-[16px] mb-8 max-w-[600px]">
//         {`Don't`} settle for an average page. Get a premium, conversion-focused
//         landing page that pays for itself.
//       </p>

//       {/* Form Container */}
//       <div>
//         <div
//           className="bg-[var(--Color-Background,#151E1B)] border border-[var(--Color-Stroke,#2A3C36)]
//              rounded-lg p-9 flex flex-col gap-6 md:max-w-[794px] max-w-[616px] w-full"
//         >
//           {/* Input Fields */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="flex-1 border-2 border-[#1FFFA5] rounded-[4px] p-[18px] text-[#B2B2B2] placeholder:text-[#B2B2B2] placeholder:text-[12px] focus:outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="flex-1 border-2 border-[#1FFFA5] rounded-[4px] p-[18px]
//               text-[#B2B2B2] placeholder:text-[#B2B2B2]  placeholder:text-[12px] focus:outline-none"
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="flex-1 border-2 border-[#1FFFA5] rounded-[4px] p-[18px] text-[#B2B2B2] placeholder:text-[#B2B2B2]  placeholder:text-[12px] focus:outline-none"
//             />
//           </div>

//           {/* Button below inputs */}
//           <button
//             className="mx-auto flex items-center justify-center gap-2 bg-[#1FFFA5]
//          text-[#002013] font-medium font-sans rounded-lg px-8
//          py-4
//           w-full shadow-[0px_9px_24px_0px_rgba(31,255,165,0.25),0px_7px_8px_0px_rgba(255,255,255,0.5)_inset] text-[12px] md:text-[16px]"
//           >
//             Get my high-converting landing page <ArrowRightIcon />
//           </button>
//         </div>
//         <div className="mt-[16px] w-full max-w-[794px] text-[#F5F5F5] text-[12px] font-normal">
//           {/* Mobile layout */}
//           <div className="flex justify-between md:hidden px-[ 16px]">
//             {/* Left Side */}
//             <div className="flex flex-col gap-4">
//               <div className="flex items-center gap-2">
//                 <LockClosedIcon className="w-[16px] h-[16px]" />
//                 SSL secure
//               </div>
//               <div className="flex items-center gap-2">
//                 <StarIcon className="w-[16px] h-[16px]" />
//                 Satisfaction guaranteed
//               </div>
//             </div>

//             {/* Right Side */}
//             <div className="flex items-center gap-2">
//               <CheckIcon className="w-[16px] h-[16px]" />
//               Money-back guaranteed
//             </div>
//           </div>

//           {/* Desktop layout */}
//           <ul className="hidden md:flex justify-center items-center gap-[64px]">
//             <li className="flex items-center gap-2">
//               <LockClosedIcon className="w-[16px] h-[16px]" />
//               SSL secure
//             </li>
//             <li className="flex items-center gap-2">
//               <CheckIcon className="w-[16px] h-[16px]" />
//               Money-back guaranteed
//             </li>
//             <li className="flex items-center gap-2">
//               <StarIcon className="w-[16px] h-[16px]" />
//               Satisfaction guaranteed
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/* Guarantee List */}
//     </section>
//   );
// }
// src/components/HeroFormSection.js
import {
  ArrowRightIcon,
  CheckIcon,
  LockClosedIcon,
  StarIcon,
} from "@radix-ui/react-icons";

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
      <p className="font-normal text-[#F5F5F5]  xl:text-[18px] text-[14px] sm:text-[16px] mb-8 max-w-[600px]">
        {`Don't`} settle for an average page. Get a premium, conversion-focused
        landing page that pays for itself.
      </p>

      {/* Form Container */}
      <div>
        <div
          className="bg-[var(--Color-Background,#151E1B)] border border-[var(--Color-Stroke,#2A3C36)] 
             rounded-lg p-9 flex flex-col gap-6 md:max-w-[794px] max-w-[616px] w-full"
        >
          {/* Input Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className=" cursor-pointer hover:bg-[#192420] flex-1 border-2 border-[#2A3C36] rounded-[4px] p-[18px] text-[#B2B2B2]
               placeholder:text-[#B2B2B2] placeholder:text-[12px] focus:outline-none
                focus:border-[#1FFFA5] transition-all duration-300 ease-out"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="cursor-pointer hover:bg-[#192420] flex-1 border-2 border-[#2A3C36] rounded-[4px] p-[18px] 
              text-[#B2B2B2] placeholder:text-[#B2B2B2]  placeholder:text-[12px] 
              focus:outline-none focus:border-[#1FFFA5] transition-all duration-300 ease-out"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="cursor-pointer hover:bg-[#192420] flex-1 border-2 border-[#2A3C36] rounded-[4px] p-[18px]
               text-[#B2B2B2] placeholder:text-[#B2B2B2]  placeholder:text-[12px] 
               focus:outline-none focus:border-[#1FFFA5] transition-all duration-300 ease-out"
            />
          </div>

          <button
            className="mx-auto flex items-center justify-center gap-2 hover:gap-4 bg-[#1FFFA5]
         text-[#002013] font-medium font-sans rounded-lg hover:rounded-[16px] px-8 
         py-4
          w-full  text-[12px] md:text-[16px] shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset] hover:shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset]"
          >
            Get my high-converting landing page <ArrowRightIcon />
          </button>
        </div>
        <div className="mt-[16px] w-full max-w-[794px] text-[#F5F5F5] text-[12px] font-normal">
          {/* Mobile layout */}
          <div className="flex justify-between md:hidden px-[ 16px]">
            {/* Left Side */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <LockClosedIcon className="w-[16px] h-[16px]" />
                SSL secure
              </div>
              <div className="flex items-center gap-2">
                <StarIcon className="w-[16px] h-[16px]" />
                Satisfaction guaranteed
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              <CheckIcon className="w-[16px] h-[16px]" />
              Money-back guaranteed
            </div>
          </div>

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
      {/* Guarantee List */}
    </section>
  );
}
