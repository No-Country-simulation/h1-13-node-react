import { ArrowIcon } from "../../svg";
import {
  getDaysInMonth,
  getFirstDayOfMonthIndex,
  getFirstDayOfNextMonth,
  getFirstDayOfPreviousMonth,
  getLastDayOfMonthIndex,
  getLastNDaysOfPreviousMonth,
  getMonthName,
  getYearAsString,
} from "../../utils/dateUtils";
import { ScheduleBody } from "./ScheduleBody";
import { ScheduleHead } from "./ScheduleHead";
import { useDateStore } from "../../store/date.store";

export const Schedule = () => {
  const daySelected = useDateStore((state) => state.daySelected);
  const selectDay = useDateStore((state) => state.selectDay);

  const daysInMonth = getDaysInMonth(daySelected);
  const firstDayOfMonthIndex = getFirstDayOfMonthIndex(daySelected);
  const lastDayOfMonthIndex = getLastDayOfMonthIndex(daySelected);
  const lastSixDaysOfPreviousMonth = getLastNDaysOfPreviousMonth(
    daySelected,
    6
  );

  return (
    <div
      className="w-full
                 flex flex-col"
    >
      <div
        className="mt-[13px]
                   w-full h-[31px]
                   bg-[#A1DCF4]
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
             left-0
             flex
             items-center
             justify-end"
        >
          <button
            className="fill-pinkDark
                       w-[18px]"
            onClick={() => selectDay(getFirstDayOfPreviousMonth(daySelected))}
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
             right-0
             flex
             items-center"
        >
          <button
            className="fill-pinkDark
                       rotate-180
                       w-[18px]"
            onClick={() => selectDay(getFirstDayOfNextMonth(daySelected))}
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
      <table
        className="mt-[11px]
                   w-full
                   h-[200px]
                   flex
                   flex-col"
      >
        <ScheduleHead />
        <ScheduleBody
          daysInMonth={daysInMonth}
          firstDayOfMonthIndex={firstDayOfMonthIndex}
          lastDayOfMonthIndex={lastDayOfMonthIndex}
          lastSixDaysOfPreviousMonth={lastSixDaysOfPreviousMonth}
        />
      </table>
    </div>
  );
};
