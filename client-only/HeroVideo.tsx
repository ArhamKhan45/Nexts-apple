"use client";
import React, { useEffect, useState } from "react";

import { heroVideo, smallHeroVideo } from "@/utils/index";
const HeroVideo = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const handleVideoSrcSet = () => {
    window.innerWidth < 760
      ? setVideoSrc(smallHeroVideo)
      : setVideoSrc(heroVideo);
  };
  useEffect(() => {
    handleVideoSrcSet();
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);
  return (
    <div className="md:w-10/12 w-9/12  flex-center ">
      <video
        className=" pointer-events-none max-h-[400px] md:max-h-none"
        autoPlay
        muted
        loop
        playsInline={true}
        key={videoSrc}
      >
        <source src={videoSrc ?? ""} type="video/mp4" className="" />
      </video>
    </div>
  );
};

export default HeroVideo;
