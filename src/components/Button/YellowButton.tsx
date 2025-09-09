import type { FC, MouseEvent } from "react";

interface DeepBlueButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  css?: string;
  buttonId: string;
  googleEventId?: string;
}

const YellowButton: FC<DeepBlueButtonProps> = ({
  text,
  onClick,
  type = "button",
  buttonId,
  googleEventId,
  disabled = false,
  css,
}) => {
  return (
    <button
      className={` font-Secondary text-[12px] lg:text-[14px]  transition-all duration-300  font-medium rounded-[8px] h-[45px] ${css} px-6 border border-white font-bold hover:bg-yellow-500   text-black  ${
        disabled ? "bg-[#F9CA4C] cursor-not-allowed" : "bg-[#FABA11]  hover:font-bold"
      }`}
      id={buttonId}
      onClick={disabled ? undefined : onClick}
      type={type}
      disabled={disabled}
      data-ga-event={googleEventId}
    >
      {text}
    </button>
  );
};

export default YellowButton;
