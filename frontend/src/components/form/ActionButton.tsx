type Props = {
  type?: "button" | "submit";
  href?: string;
  icon?: React.ComponentType;
  value: string;
  style: "pink" | "grey";
};

export const ActionButton: React.FC<Props> = ({
  type,
  href,
  icon: Icon,
  value,
  style,
}) => {
  if (href)
    return (
      <a
        href={href}
        className={`w-full h-[43px]
                   ${style === "grey" && `bg-greyButton`}
                   ${style === "pink" && `bg-pinkDark`}
                   ${style === "grey" && `text-greyDarkText`}
                   ${style === "pink" && `text-white`}
                   text-base
                   font-[600]
                   rounded-lg
                   ${style === "grey" && `hover:bg-greyButtonHover`}
                   ${style === "pink" && `hover:bg-pinkDarkHover`}
                   duration-300
                   ease-in-out
                   flex
                   justify-center
                   items-center
                   gap-x-2`}
        aria-label="Volver al inicio de sesión"
        title="Volver al inicio de sesión"
      >
        <div
          className="w-full h-full flex
                     justify-center
                     items-center gap-x-2"
        >
          {Icon && <Icon />}
          <span>{value}</span>
        </div>
      </a>
    );

  return (
    <button
      className={`w-full h-[43px]
                 ${style === "grey" && `bg-greyButton`}
                 ${style === "pink" && `bg-pinkDark`}
                 ${style === "grey" && `text-greyDarkText`}
                 ${style === "pink" && `text-white`}
                 text-base
                 font-[600]
                 rounded-lg
                 ${style === "grey" && `hover:bg-greyButtonHover`}
                 ${style === "pink" && `hover:bg-pinkDarkHover`}
                 duration-300
                 ease-in-out
                 flex
                 justify-center
                 items-center
                 gap-x-2`}
      type={type}
    >
      <div
        className="w-full h-full flex
                   justify-center
                   items-center gap-x-2"
      >
        {Icon && <Icon />}
        <span>{value}</span>
      </div>
    </button>
  );
};
