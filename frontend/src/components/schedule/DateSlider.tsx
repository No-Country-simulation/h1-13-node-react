import {
  createDateFromIndex,
  getDayIndex,
  getDayOfWeek,
  getDaysInMonth,
  getMonthNumber,
  getYear,
} from "../../utils/dateUtils";
import { useDateStore } from "../../store/date.store";
import { Swiper, SwiperSlide } from "swiper/react";

export const DateSlider = () => {
  const daySelected = useDateStore((state) => state.daySelected);
  const selectDay = useDateStore((state) => state.selectDay);

  const daysInMonth = getDaysInMonth(daySelected);
  const monthNumber = getMonthNumber(daySelected);
  const year = getYear(daySelected);

  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={7}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      centeredSlides={true}
      initialSlide={getDayIndex(daySelected)}
    >
      {daysInMonth.map((day, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-[69px]
                           flex
                           justify-center
                           items-center"
          >
            <button
              className={`flex
                             flex-col
                             justify-center
                             items-center
                             h-[49px]
                             w-full
                             rounded-[14px]
                             font-inter
                             px-[2px]
                             font-[500]
                             ${
                               index === getDayIndex(daySelected)
                                 ? `text-black
                                    bg-gradient-to-b
                                    from-[#F4A0D0]
                                    to-[#F5DDEB]`
                                 : `text-[#49454F]`
                             }
                             `}
              onClick={() =>
                selectDay(createDateFromIndex(index, monthNumber, year))
              }
            >
              <span className="text-2xl h-[29px]">{day}</span>
              <span className="text-[10px]">
                {getDayOfWeek(day, monthNumber, year)}
              </span>
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
