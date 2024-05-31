"use client";
import { AnimatedTooltipPreview } from "~/components/ui/AnimatedTooltipPreview";
import { Spotlight } from "~/components/ui/Spotlight";
import { cn } from "~/lib/utils";

export const Hero = () => {
  return (
    <div className="relative">
      <Spotlight className="left-0 top-0 md:-top-20 md:left-60" fill="white" />
      <div className="min-w-screen mx-auto flex flex-col items-center justify-center gap-10 px-4 py-16 sm:w-3/4">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1
            className={cn(
              `font-acorn z-10 flex items-start gap-3 bg-gradient-to-br from-slate-200 to-slate-500 bg-clip-text pb-1 text-2xl tracking-tighter text-transparent sm:text-[2rem]`,
              //   acorn.variable,
            )}
          >
            <span className="inline-block bg-gradient-to-r from-blue-300 via-pink-400 to-blue-400 bg-clip-text align-middle text-xl font-black italic text-transparent sm:text-[2rem]">
              F
            </span>{" "}
            <div className="flex flex-col items-start font-thin leading-none tracking-widest sm:text-[1rem]">
              <span>FORGIA</span> <span>CORPORATE</span>
            </div>
          </h1>
          <h2 className="z-10 text-center text-sm font-bold leading-none tracking-tight sm:text-[2.5rem]">
            Crafting Digital Excellence for{" "}
            <span className="bg-gradient-to-r from-blue-300 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Visionary
            </span>{" "}
            Enterprises
          </h2>
        </div>
        <iframe
          // width="560"
          // height="315"
          className="aspect-video h-[24rem] self-center"
          src="https://www.youtube.com/embed/zVf7wNnVbI0?modestbranding=1&showinfo=0&controls=0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {/* <div className="min-w-screen absolute top-0 z-0 aspect-square">
        <Image
          src={"/static/bg-pattern.svg"}
          alt="hero background pattern"
          width={800}
          height={800}
          className="h-screen w-[1200vw] select-none object-cover opacity-100 invert-[100%]"
        />
      </div> */}
    </div>
  );
};