type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <section
      className="w-full h-screen
                 bg-patternWithOverlay
                 flex justify-center
                 items-center
                 lg:min-h-[728px]"
    >
      <div
        className="w-full
                   h-full
                   flex
                   lg:w-[791px]
                   lg:h-[708px]
                   px-8
                   lg:px-[42px]
                   bg-white
                   lg:rounded-[30px]
                   lg:shadow-md"
      >
        <div className="h-max w-full pb-[40px]">{children}</div>
      </div>
    </section>
  );
};
