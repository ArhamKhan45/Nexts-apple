"use client";
import VideoCarousel from "@/app/_components/home/carousel/videoCarousel";
import { rightImg, watchImg } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const HighlightClient = () => {
  useGSAP(() => {
    gsap.to("#getTheHighlight-Title", { opacity: 1, y: 0, delay: 2 });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      delay: 2,
      duration: 1,
      stagger: 0.25,
    });
  }, []);
  return (
    <section
      id="Highlight"
      className="w-screen overflow-hidden h-full common-padding bg-zinc-900"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="getTheHighlight-Title" className="section-heading">
            Get the Highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <div className="link">
              Watch the film
              <Image
                src={watchImg}
                alt="Watch"
                width={18}
                height={18}
                className="ml-2"
              />
            </div>
            <div className="link">
              Watch the event
              <Image
                src={rightImg}
                alt="event"
                width={8}
                height={8}
                className="ml-2"
              />
            </div>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default HighlightClient;
