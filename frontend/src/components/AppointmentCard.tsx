import { TrashLogo } from "../svg";

interface AppointmentData {
  appointmentTime: string;
  medicalSubject: string;
  address: string;
}

export const AppointmentCard: React.FC<AppointmentData> = ({
  appointmentTime,
  medicalSubject,
  address,
}) => {
  return (
    <div
      className="w-full
                 py-[9.5px]
                 rounded-[10px]
                 bg-gradient-to-b
                 from-[#A1DCF4]
                 to-[#FBF3FF]
                 pl-[15px]
                 leading-[15.73px]
                 relative
                 flex
                 items-center"
    >
      <p
        className="text-[#49454F]
                   text-[12px]
                   font-inter
                   font-[500]
                   text-[#323232]"
      >
        {appointmentTime} hs | {medicalSubject}
        <br />
        {address}
      </p>
      <div
        className="absolute
                   right-[15px]
                   w-[20px] h-[20px]
                   bg-[#02ADDE]
                   flex items-center
                   justify-center
                   rounded-full"
      >
        <TrashLogo />
      </div>
    </div>
  );
};
