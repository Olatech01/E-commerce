"use client"
import BestSelling from "@/components/Home/BestSelling";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <div className="flex flex-col gap-[4rem]">
      <Hero />
      <Services />
      <BestSelling />
    </div>
  );
}
