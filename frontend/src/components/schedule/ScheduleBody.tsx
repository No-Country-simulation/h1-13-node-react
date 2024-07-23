import { generateDaysArray } from "../../utils/dateUtils";
import { CalendarDay } from "./CalendarDay";
import { OutOfMonthDay } from "./OuthOfMonthDay";

type Props = {
  daysInMonth: string[];
  firstDayOfMonthIndex: number;
  lastDayOfMonthIndex: number;
  lastSixDaysOfPreviousMonth: string[];
};

export const ScheduleBody: React.FC<Props> = ({
  daysInMonth,
  firstDayOfMonthIndex,
  lastDayOfMonthIndex,
  lastSixDaysOfPreviousMonth,
}) => {
  return (
    <tbody>
      <tr
        className="w-full
                   grid
                   grid-cols-7"
      >
        {firstDayOfMonthIndex > 0 &&
          lastSixDaysOfPreviousMonth
            .slice(-firstDayOfMonthIndex)
            .map((day, index) => <OutOfMonthDay key={index} day={day} />)}

        {daysInMonth.map((day, index) => (
          <CalendarDay key={index} index={index} day={day} />
        ))}

        {lastDayOfMonthIndex >= 0 &&
          lastDayOfMonthIndex < 6 &&
          generateDaysArray(6 - lastDayOfMonthIndex).map((day, index) => (
            <OutOfMonthDay key={index} day={day} />
          ))}
      </tr>
    </tbody>
  );
};
