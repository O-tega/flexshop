import React from "react";
import type { TSelectInput } from "../../utils/types/componentTypes";

const SelectInput: React.FC<TSelectInput> = ({
  options,
  name,
  value,
  onChange,
  css,
  disabled,
  defaultValue,
  error,
}) => {
  return (
    <div className=" flex flex-col w-[100%]">
      <select
        name={name}
        disabled={disabled || false}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={`rounded-[8px] border-[1px] border-[#DFE5EC] pl-2 outline-none mt-1 bg-[#FAFAFA] font-secondary text-sm ${css}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-white cursor-pointer">
            {option.label}
          </option>
        ))}
      </select>
      <p className="text-[12px] text-red-500">{error}</p>
    </div>
  );
};

export default SelectInput;
