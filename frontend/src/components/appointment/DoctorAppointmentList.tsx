import { useDateStore } from "../../store/date.store";
import { AppointmentCard } from "./AppointmentCard";

export const DoctorAppointmentList = () => {
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
      {appointments.length === 0 && (
        <div>No hay turnos disponibles para la fecha seleccionada.</div>
      )}
      {appointments.map((appointment, index) => (
        <AppointmentCard key={index} style={"pink"}>
          <>{appointment.content1}</>
        </AppointmentCard>
      ))}
    </div>
  );
};
