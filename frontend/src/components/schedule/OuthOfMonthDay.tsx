type OutOfMonthDayProps = {
  day: string;
};

export const OutOfMonthDay: React.FC<OutOfMonthDayProps> = ({ day }) => {
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
                    text-[#939393]`}
    >
      <div
        className={`inline-block
                      whitespace-nowrap
                      px-[4px] relative`}
      >
        {day}
      </div>
    </td>
  );
};
