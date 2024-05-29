"use client";

import { Hero } from "./_components/Hero";
import Pricing from "./_components/Pricing";
import Testimonials from "./_components/Testimonial";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center gap-12 ">
        {/* <Header /> */}
        {/* <Lamp /> */}
        <Hero />
        <Testimonials />
        <Pricing />
        {/* <HeroScroll /> */}
        {/* <CrudShowcase /> */}
        <div className="h-[300rem]"></div>

        {/* <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>
        </div>
        <CrudShowcase /> */}
      </div>
    </main>
  );
}
