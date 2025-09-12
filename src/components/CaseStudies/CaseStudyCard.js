// // Case Study Card Component
// const CaseStudyCard = ({ study, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="bg-[#1A1F1D] border border-[#2A2F2D] rounded-lg overflow-hidden hover:border-[#1FFFA5]/30 transition-all duration-300 group"
//     >
//       {/* Image Container */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-[#2A2F2D] to-[#1A1F1D] p-4">
//         <div className="aspect-[4/3] bg-[#0A0F0D] rounded border border-[#2A2F2D] overflow-hidden">
//           <img
//             src={study.image}
//             alt={study.title}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         {/* Company Badge */}
//         <div className="absolute top-6 right-6 bg-[#0A0F0D]/80 backdrop-blur-sm px-3 py-1 rounded-full">
//           <span className="text-[#1FFFA5] text-xs font-medium">
//             {study.company}
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <div className="mb-4">
//           <h3 className="font-semibold text-[#F5F5F5] text-lg leading-tight mb-2">
//             {study.title}
//           </h3>
//           {study.subtitle && (
//             <p className="text-[#A0A5A3] text-sm">{study.subtitle}</p>
//           )}
//         </div>

//         {/* Tags */}
//         <div className="space-y-2">
//           {study.tags.map((tag, tagIndex) => (
//             <div key={tagIndex} className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-[#1FFFA5] rounded-full flex-shrink-0" />
//               <span className="text-[#A0A5A3] text-xs leading-relaxed">
//                 {tag}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };
