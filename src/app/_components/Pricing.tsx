"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { FancyTitle } from "~/components/FancyTitle";
import { cn } from "~/lib/utils";

const pricingPlans = [
  {
    name: "Basic",
    description: "Start with essential tools to boost your online presence.",
    monthlyPrice: 2,
    annualPrice: 20,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      "Nothingness Starter Pack: access to our exclusive collection of absolutely nothing. Perfect for those who want to dip their toes into the void.",
      "Silent Support: our customer support team is always on standby... silently. Experience the peace of mind that comes with no responses.",
      "Zero Updates Guarantee: rest assured, your NaaS experience will remain unchanged forever. Say goodbye to annoying updates!",
    ],
  },
  {
    name: "Professional",
    description:
      "Unlock enhanced features and premium content to supercharge your business.",
    monthlyPrice: 299,
    annualPrice: 199,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      // "Everything in Basic plan, plus:", TODO: add back
      "Enhanced Emptiness: Dive deeper into the abyss with our upgraded collection of emptiness. Double the nothing, double the fun!",
      "VIP Void Lounge: Gain access to our exclusive VIP void lounge, where you can bask in the glory of absolute nothingness with other like-minded individuals.",
      "Customizable Null Interface: Customize your NaaS experience by choosing from a variety of different shades of nothing. Because why settle for one type of nothing when you can have them all?",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Ultimate customization and dedicated support for enterprises.",
    monthlyPrice: 2499,
    annualPrice: 1666,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      // "Everything in Professional plan, plus:", TODO: add back
      "Ultimate Void Access: Unlock the ultimate void access with our enterprise plan. Experience nothingness like never before with unlimited access to our premium void collection.",
      "Nothing as a Service Concierge: Need assistance with nothing? Our dedicated NaaS concierge is here to provide absolutely no help whatsoever.",
      "Exclusive Nihilist Networking Events: Join our exclusive networking events where you can network with other NaaS enthusiasts while discussing the meaninglessness of existence. Plus, enjoy complimentary refreshments (which also happen to be nothing).",
    ],
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"M" | "A">("M");

  const Heading = () => (
    <div className="relative z-10 my-12 flex flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-col items-center justify-center gap-8 ">
        <FancyTitle>Pricing</FancyTitle>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Pay Less, Get Even Lower.
          </p>
          <p className="text-md max-w-xl text-gray-300 md:text-center">
            Get started with NaaS today and keep your business to the same
            level.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setBillingCycle("M")}
          className={cn(
            `rounded-lg px-4 py-2 text-sm font-medium `,
            billingCycle === "M"
              ? "relative bg-blue-400 text-white "
              : " text-gray-300 hover:bg-red-100 hover:text-black",
          )}
        >
          Monthly
          {billingCycle === "M" && <BackgroundShift shiftKey="monthly" />}
        </button>
        <button
          onClick={() => setBillingCycle("A")}
          className={cn(
            `rounded-lg px-4 py-2 text-sm font-medium `,
            billingCycle === "A"
              ? "relative bg-blue-400 text-white "
              : " text-gray-300 hover:bg-red-100 hover:text-black",
          )}
        >
          Annual
          {billingCycle === "A" && <BackgroundShift shiftKey="annual" />}
        </button>
      </div>
    </div>
  );

  const PricingCards = () => (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:gap-4">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className="w-full rounded-xl border-[1px] border-gray-600 p-6 text-left"
        >
          <p className="text-gamer mb-1 mt-0 text-sm font-medium uppercase">
            {plan.name}
          </p>
          <p className="my-0 mb-6 text-sm text-gray-600">{plan.description}</p>
          <div className="mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle === "M" ? "monthly" : "annual"}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="my-0 text-3xl font-semibold text-gray-100"
              >
                <span>
                  ${billingCycle === "M" ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-sm font-medium">
                  /{billingCycle === "M" ? "month" : "year"}
                </span>
              </motion.p>
            </AnimatePresence>
            <motion.button
              whileTap={{ scale: 0.985 }}
              onClick={() => {
                window.open(plan.link);
              }}
              className="mt-8 w-full rounded-lg bg-blue-400 py-2 text-sm font-medium text-white hover:bg-blue-500/90"
            >
              Get Started
            </motion.button>
          </div>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="mb-3 flex items-start gap-2">
              <Check className="w-20 pt-1 text-pink-400" size={18} />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden  py-12 text-black lg:px-2 lg:py-12">
      <Heading />
      <PricingCards />
    </section>
  );
};

const BackgroundShift = ({ shiftKey }: { shiftKey: string }) => (
  <motion.span
    key={shiftKey}
    layoutId="bg-shift"
    className="absolute inset-0 -z-10 rounded-lg bg-blue-400"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  />
);

export default function PricingPage() {
  return <Pricing />;
}
