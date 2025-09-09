interface IButtonProps {
  type?: "submit" | "reset" | "button";
  text: string;
  variant: "filled" | "transparent" | "outlined" | "danger" | "dark";
  css?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  buttonId: string;
  googleEventId?: string;
}

const PrimaryButton = ({
  type,
  text,
  variant,
  css,
  onClick,
  disabled,
  isLoading,
  leftIcon,
  rightIcon,
  buttonId,
  googleEventId,
}: IButtonProps) => {
  return (
    <button
      id={buttonId}
      className={`${css} flex h-[45px] w-full items-center justify-center rounded-lg font-bold font-secondary border disabled:bg-primary-300 active:text-blue-200 px-6 " ${
        variant === "filled" && "border-none bg-primary text-white hover:bg-blue-600"
      } ${variant === "transparent" && " border-none text-black"} ${
        variant === "outlined" && "border border-white text-black"
      } ${variant === "danger" && "bg-destructive-50 text-destructive-500"} 
      ${variant === "dark" && "bg-[#000]"}
      transition-all duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 `}
      type={type}
      disabled={disabled}
      data-ga-event={googleEventId}
      onClick={onClick}
    >
      {isLoading ? (
        <>loading</>
      ) : (
        <>
          {leftIcon}
          <p className={`${leftIcon && "ml-2"} ${rightIcon && "mr-2"} text-[12px] lg:text-[14px]`}>{text}</p>
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default PrimaryButton;
