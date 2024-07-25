import "swiper/css";
import { useDateStore } from "../../store/date.store";
import {
  compareDates,
  getFirstDayOfNextMonth,
  getFirstDayOfPreviousMonth,
  getMonthName,
  getYearAsString,
} from "../../utils/dateUtils";
import { ArrowIcon } from "../../svg";
import { useEffect, useState } from "react";
import { DoctorAppointmentList } from "../../components/appointment/DoctorAppointmentList";
import { DateSlider } from "../../components/schedule/DateSlider";

const testData2 = [
  {
    date: new Date(2024, 6, 24),
    content1: "09:00 hs Maria Soriano",
    content2: null,
  },
  {
    date: new Date(2024, 6, 24),
    content1: "09:35 hs Nara Solimo",
    content2: null,
  },
  {
    date: new Date(2024, 6, 24),
    content1: "10:05 hs Virginia Vieiria",
    content2: null,
  },
  {
    date: new Date(2024, 6, 24),
    content1: "10:05 hs Virginia Vieiria",
    content2: null,
  },
  {
    date: new Date(2024, 6, 24),
    content1: "10:45 hs Zulma Roldan",
    content2: null,
  },
  {
    date: new Date(2024, 6, 24),
    content1: "11:00 hs Renato Gorgon",
    content2: null,
  },
  {
    date: new Date(2024, 6, 24),
    content1: "11:20 hs Maria Mascotena",
    content2: null,
  },
  {
    date: new Date(2024, 6, 24),
    content1: "11:40 hs Agustina Pitra",
    content2: null,
  },
  {
    date: new Date(2024, 6, 24),
    content1: "12:10 hs Augusto Pitelli",
    content2: null,
  },
  {
    date: new Date(2024, 6, 24),
    content1: "12:30 hs Agustin Miran",
    content2: null,
  },
  {
    date: new Date(2024, 6, 24),
    content1: "12:50 hs Barbara Norman",
    content2: null,
  },
  {
    date: new Date(2024, 6, 24),
    content1: "13:10 hs Aurora Ravelli",
    content2: null,
  },
  {
    date: new Date(2024, 6, 24),
    content1: "13:30 hs Abril Coraza",
    content2: null,
  },
];

export const AppointmentScheduleDoctorPage = () => {
  const daySelected = useDateStore((state) => state.daySelected);
  const selectDay = useDateStore((state) => state.selectDay);
  const setAppointments = useDateStore((state) => state.setAppointments);

  const [key, setKey] = useState<number>(0);

  const handleNextMonth = (daySelected: Date): void => {
    selectDay(getFirstDayOfNextMonth(daySelected));

    setKey((prevKey) => prevKey + 1);
  };

  const handlePreviusMonth = (daySelected: Date): void => {
    selectDay(getFirstDayOfPreviousMonth(daySelected));

    setKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    if (compareDates(daySelected, new Date(2024, 6, 24))) {
      console.log(testData2);
      setAppointments(testData2);
    } else {
      setAppointments([]);
    }
  }, [daySelected]);

  return (
    <div
      className="w-full
                 px-[20px]
                 mt-[58px]"
    >
      <div
        className="mt-[13px]
                   w-full h-[31px]
                   rounded-[5px]
                   flex
                   justify-center
                   items-center
                   relative"
      >
        <div
          className="
             xs:w-[20.9vw] w-[10.9vw] h-full
             absolute
             left-6
             flex
             items-center
             justify-end"
        >
          <button
            className="fill-pinkDark
                       w-[18px]"
            onClick={() => handlePreviusMonth(daySelected)}
          >
            <ArrowIcon />
          </button>
        </div>
        <h3
          className="font-[500]
                     text-[#49454F]
                     text-lg"
        >
          {getMonthName(daySelected)}&nbsp;&nbsp;&nbsp;
          {getYearAsString(daySelected)}
        </h3>
        <div
          className="
             xs:w-[20.9vw] w-[10.9vw] h-full
             absolute
             right-6
             flex
             items-center"
        >
          <button
            className="fill-pinkDark
                       rotate-180
                       w-[18px]"
            onClick={() => handleNextMonth(daySelected)}
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
      <div
        className="w-full
                   h-[49px]
                   border-[1px]
                   border-[#F4BDDD]
                   rounded-full
                   flex
                   items-center
                   overflow-hidden
                   mt-[10px]"
      >
        <DateSlider key={key} />
      </div>
      <div className="mt-[30px]">
        <h1
          className="text-inter
                     text-pinkDark
                     font-[600]"
        >
          TURNERO
        </h1>
        <div className="mt-[10px]">
          <DoctorAppointmentList />
        </div>
      </div>
    </div>
  );
};
