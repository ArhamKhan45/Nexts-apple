"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";

const BuyCta = () => {
  useGSAP(() => {
    gsap.to("#buycta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <div
      id="buycta"
      className="flex flex-col items-center opacity-0 w-full translate-y-10 "
    >
      <Link href="#" className="btn">
        Buy
      </Link>
      <p className="">Form $199/month or $999</p>
    </div>
  );
};

export default BuyCta;
