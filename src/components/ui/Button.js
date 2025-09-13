import { ArrowRightIcon } from "@radix-ui/react-icons";

const Button = ({
  text,
  icon: Icon = ArrowRightIcon,
  onClick,
  type = "button",
  fullWidth = false,
  variant = "primary", // new prop
}) => {
  const baseClasses =
    "whitespace-nowrap flex items-center justify-center px-4 py-4 text-[12px] md:text-[16px] font-medium font-general gap-2 rounded-lg transition-all duration-300";

  const variants = {
    primary: `text-[#002013] bg-[#1FFFA5] hover:gap-4 hover:rounded-[16px] 
      shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset]
      hover:shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset]`,

    secondary: `bg-[#003D25] text-[#00E58A] text-[16px] font-medium  hover:rounded-[16px] `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${fullWidth ? "w-full" : "w-auto mx-auto"} ${baseClasses} ${
        variants[variant]
      }`}
    >
      {text}
      {Icon && <Icon className="w-[10px] h-[10px] flex-shrink-0" />}
    </button>
  );
};

export default Button;
