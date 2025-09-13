"use client";

import { reviewsData } from "@/utils/reviewsData";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

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
      <h2 className="font-manrope text-center text-[#F5F5F5] text-[36px] leading-[42px] xl:text-[48px] font-medium xl:leading-[72px] -tracking-[2px]">
        What Our Clients Are Saying{" "}
        <span className="text-[#1FFFA5]">About Us</span>
      </h2>
      <p className="text-[#F5F5F5] text-center mt-[8px] font-normal font-general sm:text-[16px] text-[14px] leading-[18px] sm:leading-[24px]">
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
            <TestimonialCard key={review.id} {...review} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
