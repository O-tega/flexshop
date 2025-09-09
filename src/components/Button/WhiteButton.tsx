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

const WhiteButton: FC<DeepBlueButtonProps> = ({
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
      className={` font-Secondary  transition-all duration-300  font-medium rounded-[8px] h-[45px] ${css} px-6 border border-black font-bold hover:bg-[#2D28FF] hover:border-white hover:text-white  ${
        disabled ? "opacity-[0.6] cursor-not-allowed" : "bg-white  shadow-sm  hover:font-bold"
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

export default WhiteButton;
