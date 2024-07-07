import { useState } from "react";
import { ClosedEyeIcon, OpenEyeIcon } from "../../svg";

type InputProps = {
  icon?: React.ComponentType;
  placeholder: string;
  type: "text" | "password";
  label?: string;
};

export const LoginInput: React.FC<InputProps> = ({
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
          className="mb-1 pl-2
                     text-xs
                     font-[600]
                     text-pinkDark"
        >
          {label}
        </label>
      )}
      <div
        className="w-full
                   h-[43px]
                   flex relative
                   lg:h-[54px]"
      >
        {Icon && (
          <div
            className="absolute h-full
                       flex
                       items-center
                       ml-2
                       w-[24px]
                       lg:w-[32px]
                       lg:ml-3"
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
                      lg:text-[20px]
                      ${Icon ? `pl-9 lg:pl-12` : `pl-2`}
                      ${type === `password` ? `pr-11 lg:pr-14` : `pr-2`}
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
                       lg:mr-3
                       lg:w-9
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
