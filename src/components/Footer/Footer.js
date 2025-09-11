// // src/components/footer/Footer.js
// import Image from "next/image";
// import {
//   FaBehance,
//   FaDribbble,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer
//       className="mt-20 bg-[#1FFFA5] xl:px-[120px] xl:pt-[64px] px-6 py-8 flex
//      justify-between items-center "
//     >
//       {/* Left Side - Logo */}
//       <div>
//         <Image
//           src="/Logo.png" // just use the path relative to public/
//           alt="Ena Ema Logo"
//           width={160}
//           height={36}
//           className="lg:w-[160px] lg:h-[36px] w-[100px] h-[23px] "
//         />{" "}
//       </div>
//       <div>
//         <p className="text-[#0A0F0D] text-[12px] leading-[18px] font-normal font-sans">
//           &copy; All rights reserved to Ena Ema Technologies
//         </p>
//       </div>
//       {/* Right Side - Social Icons */}
//       <div className="flex space-x-4">
//         <a
//           href="https://www.linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
//         >
//           <FaLinkedin size={20} />
//         </a>
//         <a
//           href="https://www.facebook.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
//         >
//           <FaFacebookF size={20} />
//         </a>
//         <a
//           href="https://www.instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
//         >
//           <FaInstagram size={20} />
//         </a>
//         <a
//           href="https://www.behance.net"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
//         >
//           <FaBehance size={20} />
//         </a>
//         <a
//           href="https://dribbble.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
//         >
//           <FaDribbble size={20} />
//         </a>
//       </div>
//     </footer>
//   );
// }
// src/components/footer/Footer.js
import Image from "next/image";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#1FFFA5] xl:px-[120px] xl:pt-[64px] px-6 py-8">
      {/* Desktop Layout */}
      <div className="hidden sm:flex justify-between items-center">
        {/* Left Side - Logo */}
        <div>
          <Image
            src="/Logo.png"
            alt="Ena Ema Logo"
            width={160}
            height={36}
            className="w-[160px] h-[36px]"
          />
        </div>

        {/* Center - Copyright */}
        <div>
          <p className="text-[#0A0F0D] text-[12px] leading-[18px] font-normal font-sans">
            &copy; All rights reserved to Ena Ema Technologies
          </p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
          >
            <FaBehance size={20} />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
          >
            <FaDribbble size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden flex justify-between items-start">
        {/* Left Side - Logo */}
        <div>
          <Image
            src="/Logo.png"
            alt="Ena Ema Logo"
            width={100}
            height={23}
            className="w-[100px] h-[23px]"
          />
        </div>

        {/* Right Side - Copyright and Icons */}
        <div className="flex flex-col items-end space-y-3">
          {/* Copyright Text */}
          <p className="text-[#0A0F0D] text-[12px] leading-[18px] font-normal font-sans text-right">
            &copy; All rights reserved to Ena Ema Technologies
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
            >
              <FaLinkedin className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] lg:h-[22px]  lg:w-[22px]" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
            >
              <FaBehance size={20} />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0F0D] hover:text-[#FFFFFF] transition-colors"
            >
              <FaDribbble size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
