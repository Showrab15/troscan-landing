"use client";

import { reviewsData } from "@/utils/reviewsData";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Testimonial = () => {
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
    <div className="bg-[#152921] py-16 px-4 sm:px-6 lg:px-8">
      <h2
        className="text-center text-[#F5F5F5] text-[36px] leading-[42px] xl:text-[48px] font-medium xl:leading-[72px] -tracking-[2px]"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        What Our Clients Are Saying{" "}
        <span className="text-[#1FFFA5]">About Us</span>
      </h2>
      <p className="text-[#F5F5F5] text-center mt-[8px] font-normal font-general-sans sm:text-[16px] text-[14px] leading-[18px] sm:leading-[24px]">
        Real feedback from real businesses {`who've`} seen real results.
      </p>

      {/* Slider */}
      <div className="mt-12 overflow-hidden relative">
        <motion.div
          ref={carouselRef}
          className="flex md:gap-6 gap-4 cursor-grab"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {reviewsData.map((review) => (
            <motion.div
              key={review.id}
              className="flex-none w-[330px] sm:w-[45%] lg:w-[30%]  snap-start rounded-[12px] bg-[#192420] p-[24px]"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Image
                    key={index}
                    src="/star.svg"
                    alt="star"
                    width={16}
                    height={16}
                  />
                ))}
              </div>

              <p className="md:max-w-[266px] text-[12px] md:text-[16px] text-[#F5F5F5] leading-[24px] font-normal font-general-sans mb-4">
                {review.description}
              </p>

              <div className="flex gap-[12px] items-center">
                <Image
                  src={review.icon}
                  alt={review.name}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-[#F5F5F5] text-[16px] font-medium font-general-sans">
                    {review.name}
                  </h3>
                  <p className="mt-1 text-[12px] text-[#F5F5F5] leading-[18px] font-normal font-general-sans">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
