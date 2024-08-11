import HeroTitle from "@/client-only/HeroTitle";
import React from "react";
import HeroVideo from "@/client-only/HeroVideo";
import BuyCta from "@/client-only/buyCta";

const HeroComponent = () => {
  return (
    <section className="w-full  bg-black relative  nav-height">
      <div className="h-5/6 w-full  flex-center flex-col">
        <HeroTitle
          id={"Iphone-15-pro-max-herotitle"}
          title={"Iphone 15 pro max"}
        />
        <HeroVideo />
      </div>
      <BuyCta />
    </section>
  );
};

export default HeroComponent;
