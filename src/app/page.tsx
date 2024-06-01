"use client";

import Footer from "~/components/Footer";
import { BeamSeparator } from "./_components/BeamSeparator";
import { Community } from "./_components/Community";
import { Hero } from "./_components/Hero";
import { OldWay } from "./_components/OldWay";
import Pricing from "./_components/Pricing";
import { Product } from "./_components/Product";
import Testimonials from "./_components/Testimonial";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center gap-12 ">
        <Hero />
        <OldWay />
        <BeamSeparator />
        <Product />
        <BeamSeparator />
        <Testimonials />
        <Pricing />
        <Community />
        {/* <SkewedInfiniteScroll /> */}
      </div>
      <Footer />
    </main>
  );
}
