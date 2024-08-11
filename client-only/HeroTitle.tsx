"use client";
import React from "react";
import gsap from "gsap";
import { HeroTitleProps } from "@/types/global";
import { useGSAP } from "@gsap/react";

function HeroTitle({ title, id }: HeroTitleProps) {
  useGSAP(() => {
    gsap.to(`#${id} `, { opacity: 1, duration: 1, delay: 2 });
  }, []);

  return (
    <p className="hero-title" id={id}>
      {title}
    </p>
  );
}

export default HeroTitle;
