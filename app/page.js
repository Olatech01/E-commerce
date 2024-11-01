"use client"
import BestSelling from "@/components/Home/BestSelling";
import Browser from "@/components/Home/Browser";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Newsletter from "@/components/Home/Newsletter";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <div className="flex flex-col gap-[7rem]">
      <Hero />
      <Services />
      <BestSelling />
      <Browser />
      <Features />
      <Newsletter />
    </div>
  );
}
