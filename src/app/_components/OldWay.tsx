import { FancyTitle } from "~/components/FancyTitle";
import { redaction } from "~/styles/fonts";
import AnimatedLogoCloud from "./LogoCloud";

export const OldWay: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <FancyTitle>the old way</FancyTitle>
      <div className="text-no-wrap flex gap-2 text-center text-4xl">
        <span>Let&apos;s face it: the SaaS model is</span>{" "}
        <div
          className={`${redaction.variable} font-redaction flex gap-0.5 text-5xl text-red-900`}
        >
          <p>brok</p>
          <p className={`animate-dangle`}>en</p>
        </div>
      </div>
      <p className="max-w-2xl text-center text-sm font-light text-gray-400 md:text-base">
        The traditional “Software as a Service” model is showing its
        limitations, burdening users with subscription costs, lack of ownership,
        and centralized control.
      </p>
      <AnimatedLogoCloud />
    </div>
  );
};
