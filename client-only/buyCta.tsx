"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";

const BuyCta = () => {
  useGSAP(() => {
    gsap.to("buycta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <div id="buycta" className="flex flex-col  w-full translate-y-20 ">
      <Link href="#" className="btn">
        Buy
      </Link>
      <p className="text-red-700">regergwerg</p>;
    </div>
  );
};

export default BuyCta;
