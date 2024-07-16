import { useState } from "react";
import { ClosedEyeIcon, OpenEyeIcon } from "../../svg";

type InputProps = {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  icon?: React.ComponentType;
  placeholder: string;
  type: "text" | "password";
  label?: string;
  errorMessage: string | null;
};

export const Input: React.FC<InputProps> = ({
  name,
  handleChange,
  value,
  icon: Icon,
  placeholder,
  type,
  label,
  errorMessage,
}) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);

  const inputType = isPasswordVisible && type === "password" ? "text" : type;

  return (
    <div
      className="w-full flex
                 flex-col"
    >
      {label && (
        <label
          className="mb-[1px]
                     lg:mb-1
                     pl-1
                     text-xs
                     lg:text-base
                     font-[600]
                     text-pinkDark"
        >
          {label}
        </label>
      )}
      <div
        className="w-full
                   h-[43px]
                   flex relative"
      >
        {Icon && (
          <div
            className="absolute h-full
                       flex
                       items-center
                       ml-2
                       w-[24px]"
          >
            <Icon />
          </div>
        )}
        <input
          name={name}
          value={value}
          onChange={handleChange}
          type={inputType}
          className={`h-full w-full
                      text-sm
                      text-greyDarkText
                      border-pinkLight
                      bg-transparent
                      border-2 rounded-lg
                      font-normal
                      ${Icon ? `pl-9` : `pl-2`}
                      ${type === `password` ? `pr-11` : `pr-2`}
                      `}
          placeholder={placeholder}
        />
        {type === "password" && (
          <div
            className="absolute h-full
                       flex
                       items-center
                       right-0
                       mr-2
                       w-7
                       fill-pinkLight
                       text-pinkLight
                       cursor-pointer"
            onClick={
              isPasswordVisible
                ? () => setisPasswordVisible(false)
                : () => setisPasswordVisible(true)
            }
          >
            {isPasswordVisible ? <OpenEyeIcon /> : <ClosedEyeIcon />}
          </div>
        )}
      </div>
      {errorMessage && (
        <div
          className="w-full
                     text-red
                     text-sm h-6
                     py-1
                     translate-x-2"
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};
