"use client";

import { caseStudies } from "@/utils/caseStudiesData";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";

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
    <div className=" py-[120px] sm:py-[64px] px-4 sm:px-6 lg:px-8">
      <h3
        className="font-manrope font-medium text-center text-[#F5F5F5] leading-[42px]
       -tracking-[2px]  text-[36px] 
      md:text-[48px]  xl:text-[48px] xl:leading-[72px]"
      >
        {" "}
        Case Studies{" "}
      </h3>{" "}
      <p className="  mr-2 text-center text-sm sm:text-[16px] leading-[18px] sm:leading-[24px] font-normal font-general text-[#F5F5F5]">
        {" "}
        See the designs that delivered results{" "}
      </p>
      {/* Mobile: grid, no animation */}
      <div className="mt-12 grid grid-cols-1 gap-4 md:hidden  ">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="rounded-[12px] bg-[#151E1B] border-2 border-[#2A3C36] p-[12px]"
          >
            <div className="flex flex-col justify-between">
              <Image
                src={study.image}
                alt={study.title}
                width={300}
                height={200}
                className="mx-auto"
              />
              <div className="p-[12px] flex flex-col justify-between gap-4 items-start">
                <h3
                  className="text-[#F5F5F5] text-[24px] leading-[26px] font-semibold 
                  font-manrope"
                >
                  {study.title}
                </h3>
                <ul className="flex flex-col gap-2 text-[#F5F5F5] text-[12px] font-general text-right">
                  {study.tags.map((tag, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 px-[16px] py-2 rounded-full border-[1px] border-[#003D25] bg-[#003D25] whitespace-nowrap text-[#B2B2B2] text-[12px] leading-[18px] font-normal font-general"
                    >
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
          </div>
        ))}
      </div>
      {/* Tablet & above: keep draggable carousel */}
      <div className=" mt-12 overflow-hidden relative">
        {" "}
        <motion.div
          ref={carouselRef}
          className="hidden md:flex md:gap-6 gap-4 cursor-grab"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {" "}
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="flex-none snap-start rounded-[12px] bg-[#151E1B] border-2 border-[#2A3C36] p-[12px]"
            >
              {" "}
              <div className="flex flex-col justify-between">
                {" "}
                <Image
                  src={study.image}
                  alt={study.title}
                  width={459}
                  height={372}
                  className="mx-auto"
                />{" "}
                <div className="p-[12px] flex justify-between gap-4 items-start ">
                  {" "}
                  <h3
                    className="text-[#F5F5F5] text-[24px] leading-[26px]
                   font-semibold font-manrope "
                  >
                    {" "}
                    {study.title}{" "}
                  </h3>{" "}
                  <ul className="flex flex-col gap-2 text-[#F5F5F5] text-[12px] font-general space-y-1 text-right ">
                    {" "}
                    {study.tags.map((tag, index) => (
                      <li
                        key={index}
                        className=" flex items-center gap-2 px-[16px] py-2 rounded-full border-[1px] border-[#003D25] bg-[#003D25] whitespace-nowrap text-[#B2B2B2] text-[12px] leading-[18px] font-normal font-general"
                      >
                        {" "}
                        <Image
                          src="/Check.svg"
                          alt="icon"
                          width={12}
                          height={8}
                          priority
                        />{" "}
                        {tag}{" "}
                      </li>
                    ))}{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>
          ))}{" "}
        </motion.div>{" "}
      </div>
      <div className="mt-[24px]">
        <Button text="I want similar results" />
      </div>
    </div>
  );
};

export default CaseStudies;
