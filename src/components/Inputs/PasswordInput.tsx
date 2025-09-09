import React, { useState } from "react";
import { TbEyeOff, TbEye } from "react-icons/tb";
import type { IInputProps } from "../../utils/types/componentTypes";
import { LuAsterisk } from "react-icons/lu";

export const PasswordInput: React.FC<IInputProps> = ({
  name,
  placeholder,
  label,
  error,
  onChange,
  onBlur,
  required,
  labelCss,
}) => {
  const [showPass, setShowPass] = useState(false);
  const inputId = `input_${name}`;

  return (
    <div className="flex flex-col w-full mb-4">
      <label
        className=" text-black font-secondary flex items-center space-x-0.5"
        htmlFor={inputId}
      >
        <div className={labelCss}>{label}</div>
        {required && (
          <div className="text-error">
            <LuAsterisk size={10} />
          </div>
        )}
      </label>

      <div
        className={`border-[1px] border-[#DFE5EC] rounded-[8px] h-[40px] text-sm placeholder:text-sm pl-2 items-center focus:border-blue-200 focus:outline-blue-50 bg-[#FAFAFA] focus:outline-4 space-x-1 flex mt-1 transition-all duration-300 font-secondary ${
          error ? "border-error bg-errorBg" : ""
        }`}
      >
        <input
          id={inputId}
          type={showPass ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          className="focus:outline-none h-[90%] bg-transparent  w-[90%]"
          onChange={onChange}
          onBlur={onBlur}
          data-testid="password-input"
        />

        <div
          className="cursor-pointer text-[16px] pr-3 text-gray-500"
          onClick={() => setShowPass(!showPass)}
          data-testid="toggle-icon"
        >
          {showPass ? (
            <TbEye data-testid="eye-icon1" />
          ) : (
            <TbEyeOff data-testid="eye-icon2" />
          )}
        </div>
      </div>
      {/* class */}

      {error && (
        <small className="text-red-500 text-xs transition-all duration-300">
          {error}
        </small>
      )}
    </div>
  );
};
