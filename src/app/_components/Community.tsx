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
            "We'd love to welcome you to our 1,600+ global community of entrepreneurs radically improving online education while profiting massively."
          }
        </h4>
      </div>
    </div>
  );
};
