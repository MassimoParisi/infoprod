import { FancyTitle } from "~/components/FancyTitle";
import { redaction } from "~/styles/fonts";

export const OldWaySection: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <FancyTitle>the old way</FancyTitle>
      <h3 className="text-center text-4xl">
        <span>Let&apos;s face it: the SaaS model is</span>
        <p>
          <span
            className={`${redaction.variable} font-redaction text-6xl text-red-900`}
          >
            broken
          </span>
        </p>
      </h3>
    </div>
  );
};
