type Option = {
  value: string;
  label: string;
};

type InputProps = {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  label?: string;
  options: Option[];
  errorMessage: string | null;
};

export const Select: React.FC<InputProps> = ({
  name,
  handleChange,
  value,
  label,
  options,
  errorMessage,
}) => {
  return (
    <div
      className="w-full flex
                 flex-col relative"
    >
      {label && (
        <label
          className={`mb-[1px]
                      lg:mb-1
                      pl-1
                      text-xs
                      lg:text-base
                      font-[600]
                      ${errorMessage ? `text-red` : `text-pinkDark`}`}
        >
          {label}
        </label>
      )}
      <div
        className="w-full
                   h-[43px]
                   flex relative"
      >
        <select
          name={name}
          value={value}
          onChange={handleChange}
          className={`h-full w-full
                      text-sm
                      text-greyDarkText
                      ${errorMessage ? `border-red` : `border-pinkLight`}
                      bg-transparent
                      border-2 rounded-lg
                      font-normal
                      pl-2
                      pr-2
                      `}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && (
        <div
          className="w-full
                     text-red
                     text-xs h-6
                     py-1
                     translate-x-2
                     leading-4
                     font-[500]
                     lg:absolute
                     lg:-bottom-[20px]"
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};
