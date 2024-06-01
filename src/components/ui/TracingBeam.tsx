"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

export const TracingBeam = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setSvgHeight(ref.current.clientHeight);
    }
  }, [className]); // Recalculate height when className changes

  const y2 = useSpring(
    useTransform(scrollYProgress, [-0.6, 0.6], [0, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative mx-auto flex w-full max-w-4xl justify-center pt-[10rem]",
        className,
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          aria-hidden="true"
        >
          <motion.path
            d={`M 10 0 V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            strokeWidth="1.25"
            transition={{
              duration: 10,
            }}
          />
          <motion.path
            d={`M 10 0 V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={0}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
};
