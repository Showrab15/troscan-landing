// "use client";

// export default function FAQCard({ question, answer }) {
//   return (
//     <div className="border border-gray-700 rounded-[12px] bg-[#192420] p-[24px] ">
//       <div className="flex flex-col items-left space-y-[24px]">
//         <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
//         <h3
//           className="text-[#F5F5F5] text-[24px] font-bold leading-[26px] -tracking-[1px]
//          font-manrope"
//         >
//           {question}
//         </h3>
//         <p className="text=[18px] text-[#B2B2B2] leading-[26px]  font-normal ">
//           {answer}
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";

export default function FAQCard({ question, answer }) {
  return (
    <div
      className=" rounded-[12px] bg-[#192420] p-[24px] transition-all
     duration-300 ease-in-out hover:bg-gradient-to-b
      hover:from-[#192420] hover:to-[#192420] 
      hover:shadow-[inset_0_0_0_1px_rgba(31,255,165,0.2)] relative overflow-hidden group"
    >
      {/* Radial gradient overlay for hover effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gradient-radial from-[rgba(31,255,165,0.2)] via-[rgba(31,255,165,0.1)] to-[rgba(31,255,165,0.02)] pointer-events-none"
        style={{
          background:
            "radial-gradient(51.72% 51.72% at 50% 92.16%, rgba(31, 255, 165, 0.2) 0%, rgba(31, 255, 165, 0.02) 100%)",
        }}
      />

      <div className="flex flex-col items-left space-y-[24px] relative z-10">
        <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
        <h3
          className="text-[#F5F5F5] text-[24px] font-semibold leading-[26px] -tracking-[1px]"
          style={{
            fontFamily: "Manrope, sans-serif",
          }}
        >
          {question}
        </h3>
        <p className="text-[18px] text-[#B2B2B2] leading-[26px] font-normal">
          {answer}
        </p>
      </div>
    </div>
  );
}
