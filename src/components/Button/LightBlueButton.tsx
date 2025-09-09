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

const LightBlueButton: FC<DeepBlueButtonProps> = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  css,
  googleEventId,
}) => {
  return (
    <button
      className={`text-white transition-fontWeight ease-in-out font-medium rounded-[4px] h-[45px] font-Secondary transition-all duration-300 ${css} px-6 text-[14px] ${
        disabled
          ? "bg-blue-600  cursor-not-allowed"
          : "bg-blue-600 shadow-sm hover:bg-blue-800 hover:shadow-sm hover:text-white active:text-blue-800"
      }`}
      onClick={disabled ? undefined : onClick}
      type={type}
      disabled={disabled}
      data-ga-event={googleEventId}
    >
      {text}
    </button>
  );
};

export default LightBlueButton;
