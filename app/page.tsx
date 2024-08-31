import Image from "next/image";
import Navbar from "./_components/home/layout/Navbar";
import Hero from "./_components/home/layout/Hero";
import Highlight from "./_components/home/layout/Highlight";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARM Apple | Home",
  description: "Developed By Arham Ullah khan",
};

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
    </div>
  );
}
