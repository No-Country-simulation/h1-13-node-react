import { TrashLogo } from "../../svg";

interface AppointmentData {
  children: string | JSX.Element | JSX.Element[];
  style: "blue" | "pink";
}

export const AppointmentCard: React.FC<AppointmentData> = ({
  children,
  style,
}) => {
  return (
    <div
      className={`w-full
                 py-[9.5px]
                 rounded-[10px]
                 bg-gradient-to-b
                 ${
                   style === "blue" &&
                   `from-[#A1DCF4]
                    to-[#FBF3FF]`
                 }
                 ${
                   style === "pink" &&
                   `from-[#F4BDDD]
                    to-[#FBF3FF]`
                 }
                 pl-[15px]
                 leading-[15.73px]
                 relative
                 flex
                 items-center`}
    >
      <p
        className="text-[12px]
                   font-inter
                   font-[500]
                   text-[#323232]"
      >
        {children}
      </p>
      <div
        className={`absolute
                   right-[15px]
                   w-[20px] h-[20px]
                   ${style === "blue" && `bg-[#02ADDE]`}
                   ${style === "pink" && `bg-[#AD79F0]`}
                   flex items-center
                   justify-center
                   rounded-full`}
      >
        <TrashLogo />
      </div>
    </div>
  );
};
