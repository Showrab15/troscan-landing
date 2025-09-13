import Image from "next/image";

export default function Navbar() {
  return (
    <div className="relative bg-[#1FFFA5]/20 backdrop-blur-[351.4px] left-1/2 -translate-x-1/2 mx-auto">
      <Image
        src="/top-logo.png"
        alt="Navbar Logo"
        width={120}
        height={127}
        className="absolute top-6 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
