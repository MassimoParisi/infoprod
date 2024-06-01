"use client";
import Image from "next/image";
import type { FC } from "react";
import Underline from "~/components/ui/Underline";

interface TestimonalCardProps {
  name: string;
  description: string;
  image: string;
  profession: string;
}

const TestimonialCard: FC<TestimonalCardProps> = ({
  name,
  description,
  image,
  profession,
}) => {
  return (
    <div
      className={`card-shadow border-neutral-90 relative flex h-auto max-w-[22rem] flex-col items-start justify-center overflow-hidden rounded-2xl border border-neutral-800 p-5 shadow-sm `}
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-2xl bg-gradient-to-r from-[#fb3a5d]  to-[#fb3a5d] opacity-20 blur-3xl"></div>
      <div className="mb-0 flex h-fit flex-row items-center gap-3">
        <Image
          className="m-0 block h-11 w-11 rounded-full object-cover"
          src={image}
          alt={image}
          width={120}
          height={80}
        />
        <div className="mb-0 flex h-fit flex-col items-start">
          <h3 className="m-0 text-base font-medium text-gray-100">{name}</h3>
          <p className="font-regular m-0 text-center text-sm text-gray-400">
            {profession}
          </p>
        </div>
      </div>
      <p className="mb-0 mt-3 text-left text-sm font-light text-gray-400 md:text-base">
        {description}
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="z-10 flex flex-col items-center justify-center gap-5 py-12">
      <h1 className="mb-1 max-w-2xl text-center text-2xl font-semibold tracking-tighter text-gray-100 md:text-4xl">
        Why people love NaaS
      </h1>
      <p className="max-w-2xl text-center text-sm font-light text-gray-400 md:text-base">
        Discover the Benefits of Nothing: Real Experiences from Satisfied Users
      </p>
      <cite className="flex flex-col gap-5 text-center italic">
        <div className="inline-block text-3xl">
          <div className="inline-flex gap-3 text-nowrap">
            &apos;&apos;Finally, a service that delivers exactly what it
            promises:{" "}
            <div className="relative">
              <p>nothing!</p>
              <Underline className="absolute -bottom-1 left-0 right-0 w-32 -translate-x-4 rotate-180" />
            </div>
          </div>
          <p>
            No more hidden fees, no more complexity. Just pure, unadulterated
            simplicity.&quot;
          </p>
        </div>
        <p>Morgan Stevens, Freelancer</p>
      </cite>
      <div className="relative mt-12 flex h-full w-full flex-col items-center justify-center gap-5 md:flex-row">
        <div className="flex flex-col justify-center gap-4">
          <TestimonialCard
            name="Ethan Pollack"
            description="NaaS changed everything for us. We went from dealing with countless unnecessary features to enjoying the simplicity of nothing at all. It's a breath of fresh air!"
            profession="Software Developer"
            image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
          />
          <TestimonialCard
            name="Alena Zhukova"
            profession="Software Engineer"
            description="With NaaS, our team no longer has to worry about updates, maintenance, or unexpected costs. It's the perfect solution for businesses tired of the SaaS rat race."
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <TestimonialCard
            name="Tom Anderson"
            profession="Design Engineer"
            description="As a small business owner, I was overwhelmed by the complexity and constant updates of SaaS products. Then I found NaaS. The simplicity of getting exactly what I pay for — nothing — has been liberating. No hidden fees, no unnecessary features, just pure simplicity."
            image="https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a"
          />

          <TestimonialCard
            name="Lisa Kemp"
            profession="Frontend Developer"
            description="In the tech industry, we're always bombarded with new features and updates. NaaS has been a game-changer for us. By embracing nothing as a service, we've eliminated distractions and unnecessary costs. Our team is happier and more focused, and we’ve saved both time and money. NaaS truly proves that less is more."
            image="https://images.unsplash.com/photo-1569913486515-b74bf7751574"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <TestimonialCard
            name="Arthur Morgan"
            profession="Game Developer"
            description="I was skeptical at first, but NaaS has proven to be the most reliable non-service on the market. It does nothing perfectly, every time."
            image="https://images.unsplash.com/photo-1645830166230-187caf791b90"
          />
          <TestimonialCard
            name="Paula Smith"
            profession="UX Designer"
            description="Switching to NaaS was the best decision we made. It’s refreshing to have no distractions, no complications, and no nonsense. Just nothing, exactly as advertised."
            image="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
