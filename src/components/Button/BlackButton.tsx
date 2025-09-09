import type { CSSProperties, FC, MouseEvent } from "react";
import { RiseLoader } from "react-spinners";

interface DeepBlueButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  css?: string;
  buttonId: string;
  loading?: boolean;
  googleEventId?: string;
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const BlackButton: FC<DeepBlueButtonProps> = ({
  text,
  onClick,
  type = "button",
  buttonId,
  disabled = false,
  css,
  loading,
  googleEventId,
}) => {
  return (
    <button
      className={`text-white transition-fontWeight ease-in-out font-medium rounded-[4px] h-[40px] font-Secondary transition-all duration-300 ${css} px-6 ${
        disabled
          ? "bg-gray-500  cursor-not-allowed"
          : "bg-gray-800 shadow-sm hover:bg-black hover:shadow-sm hover:font-semibold cursor-pointer active:bg-gray-900"
      }`}
      onClick={disabled ? undefined : onClick}
      type={type}
      disabled={disabled}
      id={buttonId}
      data-ga-event={googleEventId}
    >
      {loading ? (
        <RiseLoader
          color={"#fff"}
          loading={loading}
          cssOverride={override}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        text
      )}
    </button>
  );
};

export default BlackButton;
