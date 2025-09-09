import React, { useState } from "react";
import { LuAsterisk } from "react-icons/lu";
import { SlArrowDown } from "react-icons/sl";

type TCustomSelectInput = {
  text: string;
  required?: boolean;
  error?: string;
  name: string;
  options: { label: string; value: string }[];
  textCss?: string;
  setFieldValue: (field: string, value: string) => void;
  css: string;
  placeholder?: string;
};

const CustomSelectInput: React.FC<TCustomSelectInput> = ({
  text,
  required,
  error,
  name,
  options,
  textCss,
  setFieldValue,
  placeholder,
  css,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelect = ({ label, value }: { label: string; value: string }) => {
    setFieldValue(name, value);
    setSelectedOption(label);
  };
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
      <div
        className={`${css} rounded-[8px] border-[1px] border-[#DFE5EC] text-black h-[40px] outline-none  bg-[#FAFAFA] focus:outline-4 placeholder:text-sm font-secondary mt-1 flex items-center ${
          error ? "border-error" : ""
        }`}
      >
        <div
          className="flex items-center justify-between px-3 cursor-pointer w-full"
          onClick={() => setOpen(!open)}
        >
          <div className="text-[14px]">
            {selectedOption !== ""
              ? selectedOption
              : placeholder || "select option"}
          </div>
          <div>
            <SlArrowDown size={12} />
          </div>
        </div>
      </div>
      <div className="relative">
        {open && (
          <div className="absolute border rounded-md border-gray-200 mt-1 max-h-[200px] overflow-y-auto divide-y divide-gray-200 w-full bg-white">
            {options.map((option: { label: string; value: string }) => (
              <div
                key={option.value}
                className="cursor-pointer"
                onClick={() => {
                  handleSelect({ label: option.label, value: option.value });
                  setOpen(false);
                }}
              >
                <div className="flex items-center space-x-3 p-2 hover:bg-gray-100">
                  <div
                    className={`w-[30px] h-[30px] overflow-hidden rounded-full`}
                    style={{ backgroundColor: option.value }}
                  ></div>
                  <div>{option.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {error && (
        <small className="text-error text-xs transition-all duration-300">
          {error}
        </small>
      )}
    </div>
  );
};

export default CustomSelectInput;
