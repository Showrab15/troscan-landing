// import {
//   ArrowRightIcon,
//   CheckIcon,
//   LockClosedIcon,
//   StarIcon,
// } from "@radix-ui/react-icons";

// export default function Form() {
//   return (
//     <div>
//       <div
//         className="bg-[var(--Color-Background,#151E1B)]
//          border border-[var(--Color-Stroke,#2A3C36)]
//                 rounded-lg sm:p-9 p-[12px] flex flex-col gap-6 "
//       >
//         {/* Input Fields */}
//         <div className="grid sm:grid-cols-1 grid-cols-3 gap-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className=" cursor-pointer hover:bg-[#192420] flex-1 border-2 border-[#2A3C36]
//                   rounded-[4px] md:p-[18px] p-[14px] text-[#B2B2B2]
//                   placeholder:text-[#B2B2B2] placeholder:text-[12px] focus:outline-none
//                    focus:border-[#1FFFA5] transition-all duration-300 ease-out"
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="cursor-pointer hover:bg-[#192420] flex-1 border-2 border-[#2A3C36]
//                  rounded-[4px] md:p-[18px] p-[14px]
//                  text-[#B2B2B2] placeholder:text-[#B2B2B2]  placeholder:text-[12px]
//                  focus:outline-none focus:border-[#1FFFA5] transition-all duration-300 ease-out"
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             className="cursor-pointer hover:bg-[#192420] flex-1 border-2 border-[#2A3C36]
//                   rounded-[4px] md:p-[18px] p-[14px]
//                   text-[#B2B2B2] placeholder:text-[#B2B2B2]  placeholder:text-[12px]
//                   focus:outline-none focus:border-[#1FFFA5] transition-all duration-300 ease-out"
//           />
//         </div>

//         <button
//           className="w-full  whitespace-nowrap mx-auto flex items-center justify-center
//                px-8 py-4 text-[12px] md:text-[16px] font-medium  text-[#002013] bg-[#1FFFA5]
//                 font-sans gap-2 hover:gap-4 rounded-lg hover:rounded-[16px]
//              shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset]
//               hover:shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset]"
//         >
//           Get my high-converting landing page{" "}
//           <ArrowRightIcon className="w-[10px] h-[10px]" />
//         </button>
//       </div>
//       <div className="mt-[16px] w-full max-w-[794px] text-[#F5F5F5] text-[12px] font-normal">
//         {/* Mobile layout */}
//         <div className="flex justify-between md:hidden px-[ 16px]">
//           {/* Left Side */}
//           <div className="flex flex-col gap-4">
//             <div className="flex items-center gap-2">
//               <LockClosedIcon className="w-[16px] h-[16px]" />
//               SSL secure
//             </div>
//             <div className="flex items-center gap-2">
//               <StarIcon className="w-[16px] h-[16px]" />
//               Satisfaction guaranteed
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="flex items-center gap-2">
//             <CheckIcon className="w-[16px] h-[16px]" />
//             Money-back guaranteed
//           </div>
//         </div>

//         {/* Desktop layout */}
//         <ul className="hidden md:flex justify-center items-center gap-[64px]">
//           <li className="flex items-center gap-2">
//             <LockClosedIcon className="w-[16px] h-[16px]" />
//             SSL secure
//           </li>
//           <li className="flex items-center gap-2">
//             <CheckIcon className="w-[16px] h-[16px]" />
//             Money-back guaranteed
//           </li>
//           <li className="flex items-center gap-2">
//             <StarIcon className="w-[16px] h-[16px]" />
//             Satisfaction guaranteed
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import {
  ArrowRightIcon,
  CheckIcon,
  LockClosedIcon,
  StarIcon,
} from "@radix-ui/react-icons";

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
        <button
          className="w-full whitespace-nowrap flex items-center justify-center
               px-4 py-4 text-[12px] md:text-[16px] font-medium text-[#002013] bg-[#1FFFA5]   
                font-sans gap-2 hover:gap-4 rounded-lg hover:rounded-[16px]  
             shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset]
              hover:shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset]
              transition-all duration-300"
        >
          <span className="hidden sm:inline">
            Get my high-converting landing page
          </span>
          <span className="sm:hidden text-center">Get my landing page</span>
          <ArrowRightIcon className="w-[10px] h-[10px] flex-shrink-0" />
        </button>
      </div>

      <div className="mt-[16px] w-full text-[#F5F5F5] text-[12px] font-normal">
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
