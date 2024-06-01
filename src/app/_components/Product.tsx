import { FancyTitle } from "~/components/FancyTitle";

export const Product: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <FancyTitle>introducing</FancyTitle>
      <div className="text-center leading-none">
        <div className="relative">
          <p className="text-shadow text-[8rem] font-bold [text-shadow:_0_0px_2rem_rgb(255_255_255_/_60%)]">
            NaaS
          </p>
          <p className="absolute top-[5rem] translate-x-2 rotate-180 skew-x-12 scale-x-[-1] bg-gradient-to-t from-white from-0% to-transparent to-35% bg-clip-text text-[8rem] font-bold text-transparent">
            NaaS
          </p>
          <p className="text-lg font-thin tracking-widest text-gray-300">
            Nothing as a Service
          </p>
        </div>
      </div>
    </div>
  );
};
