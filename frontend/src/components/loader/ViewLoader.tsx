import { useEffect } from "react";

export const ViewLoader = () => {
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div
      className="fixed w-full
                 h-screen flex
                 items-center
                 justify-center
                 bg-gray-200
                 flex-col
                 gap-y-10
                 z-[2]"
    >
      <div
        className="w-[240px]
                   h-[240px]
                   relative flex
                   justify-center
                   items-center"
      >
        <div
          className="absolute
                     w-full h-full
                     rounded-full
                     animate-spin
                     border-[20px]
                     border-dashed
                     border-[#02ADDE]
                     border-t-transparent"
        ></div>
        <div className="flex absolute">
          <p
            className="text-greyDarkText
                       font-[500]"
          >
            Cargando Vista{" "}
          </p>
          <div className="relative pl-[5px]">
            <div
              className="flex h-[8px]
                         gap-x-[2px]
                         absolute bottom-0"
            >
              <div
                className="h-[3px] w-[3px]
                           bg-greyDarkText
                           rounded-full
                           animate-bounce
                           [animation-delay:-0.3s]"
              ></div>
              <div
                className="h-[3px] w-[3px]
                           bg-greyDarkText
                           rounded-full
                           animate-bounce
                           [animation-delay:-0.15s]"
              ></div>
              <div
                className="h-[3px] w-[3px]
                           bg-greyDarkText
                           rounded-full
                           animate-bounce"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
