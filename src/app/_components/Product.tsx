import Image from "next/image";
import { FancyTitle } from "~/components/FancyTitle";

export const Product: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <FancyTitle>introducing</FancyTitle>
      <div className="flex flex-col items-center gap-0">
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
        <div className="relative flex h-[35rem] w-screen items-center justify-center overflow-clip">
          {/* Trade offer image */}
          <Image
            src={"/static/trade-offer.png"}
            alt="trade offer"
            width={200}
            height={200}
            className="absolute bottom-0 left-auto right-auto w-[30rem] select-none drop-shadow-[0px_0px_40px_rgba(255,255,255,0.5)]"
          />
          {/* Trade offer base */}
          <div className="absolute bottom-0 flex items-center gap-0">
            <Image
              src={"/static/divider.svg"}
              alt="left divider"
              width={85}
              height={2}
              className="-mr-1 h-[3px] w-[85px] select-none"
            />
            <div className="h-px w-[40rem] bg-white bg-gradient-to-r from-[#A1A1A1] via-white to-[#A1A1A1]" />
            <Image
              src={"/static/divider.svg"}
              alt="left divider"
              width={85}
              height={2}
              className="-ml-1 h-[3px] w-[85px] rotate-180 select-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
