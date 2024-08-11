import Image from "next/image";
import Navbar from "./_components/home/layout/Navbar";
import Hero from "./_components/home/layout/Hero";
import Highlight from "./_components/home/layout/Highlight";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
    </div>
  );
}
