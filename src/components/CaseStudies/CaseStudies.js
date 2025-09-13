// import { ArrowRightIcon } from "@radix-ui/react-icons";

// export default function CaseStudies() {
//   return (
//     <div className="bg-[#0A0F0D]">
//       <h3 className="font-manrope font-medium text-center text-[#F5F5F5]  md:text-[36px]  md:leading-[42px] xl:text-[48px] xl:leading-[72px] -tracking-[2px]">
//         Case Studies
//       </h3>
//       <p className="mr-2 text-center  text-sm sm:text-[16px] leading-[18px] sm:leading-[24px] font-normal font-general-sans text-[#F5F5F5]">
//         See the designs that delivered results
//       </p>
//       <button
//         className=" px-8 py-4 w-auto mt-[24px] sm:mt-[48px]  mx-auto flex items-center justify-center
//                            gap-2 hover:gap-4 bg-[#1FFFA5]
//                        text-[#002013] font-medium font-sans rounded-lg hover:rounded-[16px]
//                           text-[12px] md:text-[16px]
//                          shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset]
//                           hover:shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset]"
//       >
//         I want similar results{" "}
//         <ArrowRightIcon className="text-[#002013] w-4 h-4" />
//       </button>
//     </div>
//   );
// }

// "use client";
// import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";
// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const caseStudies = [
//   {
//     id: 1,
//     title: "We Plan, You Shine",
//     subtitle: "Event Management Platform",
//     image: "/api/placeholder/400/300",
//     stats: [
//       "97% high conversion that average in first week",
//       "Clean and modern design with clear CTA",
//     ],
//     category: "Web Design",
//   },
//   {
//     id: 2,
//     title: "Flowpilot",
//     subtitle: "Instant team clarity. Will track the time.",
//     image: "/api/placeholder/400/300",
//     stats: [
//       "90% high conversion that average in first week",
//       "Clean and modern design with clear CTA",
//     ],
//     category: "Dashboard",
//   },
//   {
//     id: 3,
//     title: "GrowthSummit",
//     subtitle: "Learn What Works in 2025 - From Those Making It Happen",
//     image: "/api/placeholder/400/300",
//     stats: [
//       "95% high conversion that average in first week",
//       "Clean and modern design with clear CTA",
//     ],
//     category: "Landing Page",
//   },
// ];

// const CaseStudyCard = ({ study, index, isActive = false }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className={`
//         relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1f1d] to-[#0f1412]
//         border border-[#1FFFA5]/20 hover:border-[#1FFFA5]/40 transition-all duration-500
//         group cursor-pointer
//         ${isActive ? "ring-2 ring-[#1FFFA5]/50" : ""}
//       `}
//     >
//       {/* Card Header */}
//       <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D]/80 to-transparent z-10" />
//         <img
//           src={study.image}
//           alt={study.title}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//         />

//         {/* Category Badge */}
//         <div className="absolute top-4 left-4 z-20">
//           <span className="px-3 py-1 text-xs font-medium bg-[#1FFFA5]/20 text-[#1FFFA5] rounded-full backdrop-blur-sm">
//             {study.category}
//           </span>
//         </div>
//       </div>

//       {/* Card Content */}
//       <div className="p-6">
//         <h4 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-2 group-hover:text-[#1FFFA5] transition-colors duration-300">
//           {study.title}
//         </h4>
//         <p className="text-sm text-[#F5F5F5]/70 mb-4 line-clamp-2">
//           {study.subtitle}
//         </p>

//         {/* Stats */}
//         <div className="space-y-3">
//           {study.stats.map((stat, idx) => (
//             <div key={idx} className="flex items-start gap-3">
//               <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1FFFA5]/20 flex items-center justify-center mt-0.5">
//                 <CheckIcon className="w-3 h-3 text-[#1FFFA5]" />
//               </div>
//               <span className="text-sm text-[#F5F5F5]/80 leading-relaxed">
//                 {stat}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Hover Effect Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#1FFFA5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//     </motion.div>
//   );
// };

// const AutoSlider = ({ studies }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % studies.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [studies.length]);

//   return (
//     <div className="relative w-full h-80 sm:h-96 overflow-hidden rounded-2xl">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.5 }}
//           className="absolute inset-0"
//         >
//           <CaseStudyCard
//             study={studies[currentIndex]}
//             index={0}
//             isActive={true}
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Slider Indicators */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
//         {studies.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               index === currentIndex
//                 ? "bg-[#1FFFA5] w-6"
//                 : "bg-[#1FFFA5]/30 hover:bg-[#1FFFA5]/50"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default function CaseStudies() {
//   return (
//     <section className="bg-[#0A0F0D] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(31,255,165,0.1),transparent_50%)]" />
//         <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(31,255,165,0.05),transparent_50%)]" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 sm:mb-16 lg:mb-20"
//         >
//           <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F5F5F5] mb-4 sm:mb-6 tracking-tight">
//             Case Studies
//           </h2>
//           <p className="text-base sm:text-lg lg:text-xl text-[#F5F5F5]/70 max-w-md mx-auto leading-relaxed">
//             See the designs that delivered results
//           </p>
//         </motion.div>

//         {/* Cards Container */}
//         <div className="mb-12 sm:mb-16 lg:mb-20">
//           {/* Large Screens - Grid Layout */}
//           <div className="hidden lg:grid lg:grid-cols-3 gap-8">
//             {caseStudies.map((study, index) => (
//               <CaseStudyCard key={study.id} study={study} index={index} />
//             ))}
//           </div>

//           {/* Medium Screens - 2 Column Grid */}
//           <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
//             {caseStudies.map((study, index) => (
//               <CaseStudyCard key={study.id} study={study} index={index} />
//             ))}
//           </div>

//           {/* Small Screens - Auto Slider */}
//           <div className="md:hidden">
//             <AutoSlider studies={caseStudies} />
//           </div>
//         </div>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="text-center"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="group relative inline-flex items-center justify-center gap-2 px-8 py-4
//                      bg-[#1FFFA5] text-[#002013] font-semibold rounded-xl
//                      shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset]
//                      hover:shadow-[0px_12px_32px_0px_#1FFFA560,0px_9px_12px_0px_#FFFFFF90_inset]
//                      transition-all duration-300 overflow-hidden"
//           >
//             <span className="relative z-10 text-sm sm:text-base font-medium">
//               I want similar results
//             </span>
//             <motion.div
//               className="relative z-10"
//               animate={{ x: [0, 4, 0] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
//             </motion.div>

//             {/* Button Background Animation */}
//             <div
//               className="absolute inset-0 bg-gradient-to-r from-[#1FFFA5] via-[#00E5A0] to-[#1FFFA5]
//                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             />
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#1FFFA5]/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#1FFFA5]/3 rounded-full blur-3xl" />
//     </section>
//   );
// }

"use client";

import { caseStudies } from "@/utils/caseStudiesData";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CaseStudies = () => {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <div className="] py-16 px-4 sm:px-6 lg:px-8">
      <h3 className="font-manrope font-medium text-center text-[#F5F5F5]  md:text-[36px]  md:leading-[42px] xl:text-[48px] xl:leading-[72px] -tracking-[2px]">
        Case Studies
      </h3>
      <p className=" font-general mr-2 text-center  text-sm sm:text-[16px] leading-[18px] sm:leading-[24px] font-normal font-general-sans text-[#F5F5F5]">
        See the designs that delivered results
      </p>

      {/* Slider */}
      <div className="mt-12 overflow-hidden relative">
        <motion.div
          ref={carouselRef}
          className="flex md:gap-6 gap-4 cursor-grab"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="flex-none 
      snap-start rounded-[12px]
      bg-[#151E1B] border-2 border-[#2A3C36] p-[12px]"
            >
              <div className="flex flex-col justify-between">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={459}
                  height={372}
                  className=""
                />

                <div className="flex justify-between items-start ">
                  <h3 className="text-[#F5F5F5] text-[16px] font-medium font-general-sans">
                    {study.title}
                  </h3>
                  <ul className="text-[#F5F5F5] text-[12px] font-general-sans space-y-1 text-right max-w-[220px]">
                    {study.tags.map((tag, index) => (
                      <li
                        key={index}
                        className="mb-6 inline-flex items-center gap-2 px-[16px] py-2
                         rounded-full border-[1px] border-[#003D25] bg-[#003D25]
                          whitespace-nowrap text-[#B2B2B2] text-[12px] leading-[18px]
                           font-normal font-general-sans"
                      >
                        {" "}
                        <Image
                          src="/Check.svg"
                          alt="icon"
                          width={12}
                          height={8}
                          priority
                        />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;
