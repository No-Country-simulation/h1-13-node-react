import { useState } from "react";
import { ClosedEyeIcon, OpenEyeIcon } from "../../svg";

type InputProps = {
  icon?: React.ComponentType;
  placeholder: string;
  type: "text" | "password";
  label?: string;
};

export const Input: React.FC<InputProps> = ({
  icon: Icon,
  placeholder,
  type,
  label,
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
    </div>
  );
};
