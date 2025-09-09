// // import { countryData } from "../../data/country";
// import React, { useState } from "react";
// import type { ChangeEvent, FocusEvent } from "react";
// import { BiChevronDown } from "react-icons/bi";

// interface PhoneNumberInputProps {
//   name: string;
//   text: string;
//   value: string;
//   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
//   onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
//   error?: string | undefined | false | string[] | null;
//   setSelectedCode: (code: string) => void;
//   selectedCode: string;
//   textCss?: string;
// }

// const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
//   name,
//   text,
//   value,
//   onChange,
//   onBlur,
//   error,
//   setSelectedCode,
//   selectedCode,
//   textCss,
// }) => {
//   const [open, setOpen] = useState(false);

//   const toggleDropdown = () => {
//     setOpen(!open);
//   };

//   const handleClick = (code: string) => {
//     setSelectedCode(code);

//     const event = {
//       target: { name: "phone", value },
//     } as ChangeEvent<HTMLInputElement>;

//     onChange(event);
//     toggleDropdown();
//   };

//   return (
//     <div className="flex flex-col w-[100%]">
//       <label
//         htmlFor={name}
//         className={`text-[#292D32] text-m font-[400] font-secondary ${textCss}`}
//       >
//         {text}
//       </label>

//       <div className="border-[#D0D5DD] border-[1px] bg-white flex items-center rounded-[8px] mb-2 mt-1 relative ">
//         <div
//           className="flex items-center px-3 space-x-1 cursor-pointer"
//           onClick={toggleDropdown}
//         >
//           <p className="ml-2 text-s">{selectedCode}</p>
//           <BiChevronDown />
//         </div>

//         {open ? (
//           <div className="flex flex-col shadow-xl h-[250px] overflow-y-scroll absolute bg-white z-20 top-[3em] border border-[#D0D5DD] border-t-0 rounded-b-[8px]">
//             {countryData.map((el) => {
//               return (
//                 <div
//                   key={el.flag}
//                   className="flex space-x-2 text-ss w-[200px] p-2 border-b-[1px] border-[#D0D5DD] cursor-pointer items-center hover:text-black text-gray-500"
//                   onClick={() => handleClick(el.number)}
//                 >
//                   <p className="ml-2 w-[40px] font-secondary font-[400]">
//                     {el.number}
//                   </p>
//                   <p className="ml-2 font-secondary font-[400] text-[11px]">
//                     {el.name}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         ) : null}

//         <input
//           type="tel"
//           placeholder="8025556792"
//           onChange={onChange}
//           value={value}
//           name="phone"
//           onBlur={onBlur}
//           className="border-l-[1px] rounded-r-[8px] border-[#D0D5DD] h-[40px] pl-2 outline-none bg-[#FAFAFA] w-full text-m"
//           maxLength={10}
//         />
//       </div>
//       <p className="text-[12px] text-red-500">{error}</p>
//     </div>
//   );
// };

// export default PhoneNumberInput;
