import { useDateStore } from "../../store/date.store";
import {
  createDateFromIndex,
  getDayIndex,
  getMonthNumber,
  getYear,
} from "../../utils/dateUtils";

type CalendarDayProps = {
  day: string;
  index: number;
};

export const CalendarDay: React.FC<CalendarDayProps> = ({ day, index }) => {
  const daySelected = useDateStore((state) => state.daySelected);
  const selectDay = useDateStore((state) => state.selectDay);
  const dayIndex = getDayIndex(daySelected);

  const monthNumber = getMonthNumber(daySelected);
  const year = getYear(daySelected);

  const dayIndices = useDateStore((state) => state.dayIndices);

  return (
    <td
      className={`col-span-1 
                  w-full
                  h-[29px]
                  text-center
                  text-2xl
                  text-inter
                  flex
                  justify-center
                  text-[#323232]`}
    >
      <button
        className={`inline-block
                    whitespace-nowrap
                    px-[4px] relative ${
                      index === dayIndex &&
                      `rounded
                       bg-gradient-to-b
                       from-[#A1DCF4]
                       to-[#FBF3FF]`
                    }
                      ${
                        dayIndices.includes(index) &&
                        `after:content-['']
                         after:block
                         after:absolute
                         after:-bottom-[1px] 
                         after:left-[10%]
                         after:right-[10%]
                         after:h-[2px]
                         after:bg-[#02ADDE]`
                      }`}
        onClick={() => selectDay(createDateFromIndex(index, monthNumber, year))}
      >
        {day}
      </button>
    </td>
  );
};
