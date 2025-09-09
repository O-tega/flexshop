import React from "react";
import type { TPrimaryInput } from "../../utils/types/componentTypes";
import { LuAsterisk } from "react-icons/lu";

const PrimaryInput: React.FC<TPrimaryInput> = ({
  text,
  type,
  placeholder,
  onChange,
  required,
  onBlur,
  error,
  value,
  name,
  textCss,
  css,
}) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-black font-[400] font-secondary flex items-center space-x-0.5"
      >
        <div className={textCss}>{text}</div>
        {required && (
          <div className="text-error">
            <LuAsterisk size={10} />
          </div>
        )}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        className={`${css} rounded-[8px] border-[1px] border-[#DFE5EC] text-black h-[40px] pl-2 outline-none  bg-[#FAFAFA] focus:outline-4 placeholder:text-sm font-secondary ${
          error ? "border-error" : ""
        }`}
      />
      {error && (
        <small className="text-error text-xs transition-all duration-300">
          {error}
        </small>
      )}
    </div>
  );
};

export default PrimaryInput;
