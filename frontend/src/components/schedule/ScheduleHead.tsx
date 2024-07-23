import { daysOfWeek } from "../../utils/dateUtils";

export const ScheduleHead = () => {
  return (
    <thead>
      <tr
        className="w-full
                           grid
                           grid-cols-7"
      >
        {daysOfWeek.map((day, index) => (
          <th
            key={index}
            className="col-span-1
                               font-[500]
                               text-[10px]
                               text-[#323232]
                               text-center"
          >
            {day}
          </th>
        ))}
      </tr>
    </thead>
  );
};
