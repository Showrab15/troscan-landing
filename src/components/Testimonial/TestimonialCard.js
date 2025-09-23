import { motion } from "framer-motion";
import Image from "next/image";

const TestimonialCard = ({ rating, description, icon, name, role }) => {
  return (
    <motion.div className="flex-none w-[330px] sm:w-[45%] lg:w-[30%] snap-start rounded-[12px] bg-[#192420] p-[24px]">
      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Image key={i} src="/star.svg" alt="star" width={16} height={16} />
        ))}
      </div>

      <p className="md:max-w-[266px] text-[12px] md:text-[16px] text-[#F5F5F5] leading-[24px] font-normal font-general mb-4">
        {description}
      </p>

      <div className="flex gap-[12px] items-center">
        <Image
          src={icon}
          alt={name}
          width={36}
          height={36}
          className="rounded-full"
        />
        <div>
          <h3 className="text-[#F5F5F5] text-[16px] font-medium font-general">
            {name}
          </h3>
          <p className="mt-1 text-[12px] text-[#F5F5F5] leading-[18px] font-normal font-general">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
