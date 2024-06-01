import { FancyTitle } from "~/components/FancyTitle";
import { AnimatedTooltipPreview } from "~/components/ui/AnimatedTooltipPreview";

export const Community = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <FancyTitle>join our community</FancyTitle>
      <div className="flex flex-col items-center gap-5">
        <AnimatedTooltipPreview />
        <h4 className="w-2/3 text-center text-lg">
          {
            "Connect with fellow enthusiasts and embrace the simplicity of nothingness. Share experiences, enjoy the humor, and be part of a revolution where less is truly more. Sign up today and join the NaaS movement!"
          }
        </h4>
      </div>
    </div>
  );
};
