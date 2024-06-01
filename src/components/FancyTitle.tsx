import Image from "next/image";
import type { ReactNode } from "react";
import { nunitoSans } from "~/styles/fonts";

type FanctyTitleProps = {
  children: ReactNode;
};

export const FancyTitle: React.FC<FanctyTitleProps> = ({ children }) => {
  return (
    <div
      className={`flex items-center gap-3 font-thin uppercase tracking-widest ${nunitoSans.variable} font-nunitoSans text-white`}
    >
      <Image
        src={"/static/divider.svg"}
        alt="left divider"
        width={85}
        height={2}
        className="h-[2px] w-[85px] select-none"
      />
      {children}
      <Image
        src={"/static/divider.svg"}
        alt="left divider"
        width={85}
        height={2}
        className="h-[2px] w-[85px] rotate-180 select-none"
      />
    </div>
  );
};
