import { useDateStore } from "../../store/date.store";
import { DropDownLogo } from "../../svg";
import { AppointmentCard } from "./AppointmentCard";

export const AppointmentCardList = () => {
  const appointments = useDateStore((state) => state.appointments);
  return (
    <div
      className="w-full
                 flex
                 flex-col
                 text-[13px]
                 font-inter
                 font-[500]
                 text-[#323232]
                 gap-y-[10px]"
    >
      <div
        className="h-[24px]
                   w-[115px]
                   flex
                   items-center
                   rounded-[10px]
                   bg-gradient-to-t
                   from-[#B6ECFB80]
                   to-[#02ADDE80]
                   pl-[15px]
                   relative"
      >
        Mis Turnos
        <div
          className="fill-[#49454F]
                     absolute
                     right-[9px]"
        >
          <DropDownLogo />
        </div>
      </div>
      {appointments.length === 0 && (
        <div>No hay turnos disponibles para la fecha seleccionada.</div>
      )}
      {appointments.map((appointment, index) => (
        <AppointmentCard key={index} style={"blue"}>
          <>
            {appointment.content1}
            <br />
            {appointment.content2}
          </>
        </AppointmentCard>
      ))}
    </div>
  );
};
