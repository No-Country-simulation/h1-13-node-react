import { useEffect, useState } from "react";
import { useDateStore } from "../../store/date.store";
import { AppointmentCardList, Schedule, ViewLoader } from "../../components";
import { compareDates, getMonthNumber, getYear } from "../../utils/dateUtils";

const testData = [
  {
    date: new Date(2024, 6, 24),
    content1: "09:00 | Extracción de sangre.",
    content2: "Hospital Sagrado corazón ( Bleur 1202).",
  },
  {
    date: new Date(2024, 6, 24),
    content1: "09:35 | Turno clínico.",
    content2: "Hospital Sagrado corazón ( Bleur 1202)",
  },
];

export const AppointmentSchedulePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const daySelected = useDateStore((state) => state.daySelected);
  const setAppointments = useDateStore((state) => state.setAppointments);
  const setDayIndices = useDateStore((state) => state.setDayIndices);

  useEffect(() => {
    if (getMonthNumber(daySelected) === 6 && getYear(daySelected) === 2024) {
      const dayIndices = [
        ...new Set(testData.map((item) => item.date.getDate() - 1)),
      ];
      setDayIndices(dayIndices);

      if (compareDates(daySelected, new Date(2024, 6, 24))) {
        setAppointments(testData);
      } else {
        setAppointments([]);
      }
    } else {
      setDayIndices([]);
      setAppointments([]);
    }
  }, [daySelected]);

  return (
    <section
      className="w-full
                 min-h-screen
                 h-full
                 bg-[#FBF3FF]
                 flex
                 flex-col
                 overflow-hidden"
    >
      {!isLoaded && <ViewLoader />}
      <div
        className="w-full
                   min-h-[252px]
                   h-[64.2857vw]
                   bg-[#D9D9D9]
                   relative"
      >
        <img
          src="https://res.cloudinary.com/djarwlymo/image/upload/v1721357936/38562603-fa3e-4b8a-b636-dc417a4e314a.png"
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full object-cover"
        />
        <div
          className="w-[105.36vw] h-[44px]
                     absolute
                     -bottom-[22px]
                     -left-[11px]"
          style={{
            background:
              "linear-gradient(190.23deg, #FBF3FF -0.28%, #FBF3FF 95.06%)",
            filter: "blur(7.45px)",
          }}
        ></div>
      </div>

      <div
        className="w-full
                   flex flex-col
                   px-[27px]
                   pt-[12px]"
      >
        <h1
          className="text-2xl
                     text-pinkDark
                     font-jost
                     font-[600]
                     leading-9
                     z-[1]
                     "
        >
          Calendario de turnos.
        </h1>
        <Schedule />
        <AppointmentCardList />
      </div>
    </section>
  );
};
