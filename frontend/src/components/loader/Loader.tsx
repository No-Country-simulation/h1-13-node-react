import { useLoaderStore } from "../../store/loader.store";

export const Loader = () => {
  const isLoading = useLoaderStore((state) => state.isLoading);

  return (
    <>
      {isLoading && (
        <div
          className="bg-pinkLight
                     w-full
                     fixed
                     h-screen
                     z-[900]
                     opacity-95 flex
                     items-center
                     justify-center"
        >
          <div
            className="w-[400px]
                       h-[400px]
                       flex flex-col
                       gap-y-[44px]
                       justify-center
                       items-center"
          >
            <div
              className="rounded-md
                         h-24 w-24
                         border-4
                         border-t-4
                         border-pinkDark
                         animate-spin"
            ></div>
            <p
              className="text-pinkDark
                         font-bold
                         animate-trackingInContract"
            >
              Cargando...
            </p>
          </div>
        </div>
      )}
    </>
  );
};
