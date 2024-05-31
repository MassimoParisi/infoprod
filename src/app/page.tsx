"use client";

import { Community } from "./_components/Community";
import { Hero } from "./_components/Hero";
import AnimatedLogoCloud from "./_components/LogoCloud";
import { OldWaySection } from "./_components/OldWaySection";
import Pricing from "./_components/Pricing";
import SkewedInfiniteScroll from "./_components/SkewedInfiniteScroll";
import Testimonials from "./_components/Testimonial";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center gap-12 ">
        <Hero />
        <Community />
        <OldWaySection />
        <Testimonials />
        <Pricing />
        <AnimatedLogoCloud />
        <SkewedInfiniteScroll />
        <div className="h-[300rem]"></div>
      </div>
    </main>
  );
}
