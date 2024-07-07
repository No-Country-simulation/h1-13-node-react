type InputProps = {
  label?: string;
};

export const Select: React.FC<InputProps> = ({ label }) => {
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
        <select
          className={`h-full w-full
                      text-sm
                      text-greyDarkText
                      border-pinkLight
                      bg-transparent
                      border-2 rounded-lg
                      font-normal
                      pl-2
                      pr-2
                      `}
        />
      </div>
    </div>
  );
};
