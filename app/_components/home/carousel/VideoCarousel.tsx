"use client";

import { hightlightsSlides } from "@/constants";
import { VideoState } from "@/types/global";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { pauseImg, playImg, replayImg } from "@/utils";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const VideoCarousel: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const videoSpanRef = useRef<HTMLSpanElement[]>([]);
  const videoDivRef = useRef<HTMLDivElement[]>([]);

  const [video, setVideo] = useState<VideoState>({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState<HTMLVideoElement[]>([]);

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  // Handles video playback
  useEffect(() => {
    const currentVideo = videoRef.current[videoId];
    if (currentVideo) {
      if (isPlaying) {
        if (startPlay) {
          currentVideo.play().catch((error) => {
            console.error("Error playing video:", error);
          });
        }
      } else {
        currentVideo.pause();
      }
    }
  }, [videoId, startPlay, isPlaying, loadedData]);

  const handleLoadedMetaData = (
    i: number,
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    setLoadedData((prev) => [...prev, e.currentTarget]);
  };

  // Handles animation for video progress
  useEffect(() => {
    const span = videoSpanRef.current[videoId];
    let currentProgress = 0;

    if (span) {
      // Example GSAP animation; adjust as needed
      let anim = gsap.to(span, {
        // Add relevant properties for animation
        // Example: progress of a video playhead
        // This is just a placeholder; adjust based on actual animation requirements
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress != currentProgress) {
            currentProgress = progress;

            gsap.to("#videoDivRef.current[videoId]", {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth > 1200
                  ? "10vw"
                  : "4vw",
            });
          }
        },
        onComplete: () => {},
      });
    }
  }, [videoId, startPlay]);

  // GSAP animation setup
  useGSAP(() => {
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  const handleProcess = (action: string, i?: number) => {
    switch (action) {
      case "video-end":
        setVideo((prev) => ({
          ...prev,
          isEnd: true,
          videoId: (i ?? 0) + 1,
        }));
        break;
      case "video-last":
        setVideo((prev) => ({
          ...prev,
          isLastVideo: true,
        }));
        break;
      case "video-reset":
        setVideo((prev) => ({
          ...prev,
          isLastVideo: false,
          videoId: 0,
        }));
        break;
      case "play":
        setVideo((prev) => ({
          ...prev,
          isPlaying: true,
        }));
        break;
      case "pause":
        setVideo((prev) => ({
          ...prev,
          isPlaying: false,
        }));
        break;
      default:
        return;
    }
  };

  return (
    <>
      <div className="flex items-center ">
        {hightlightsSlides.map((item, index) => (
          <div key={item.id} className="sm:pr-20 pr-10">
            <div className="video-carousel_container ">
              <div className=" h-full  flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  muted
                  preload="auto"
                  playsInline
                  ref={(element) => {
                    if (element) videoRef.current[index] = element;
                  }}
                  onPlay={() => {
                    console.log(`Video ${index} started playing.`);
                    setVideo((prev) => ({
                      ...prev,
                      isPlaying: true,
                    }));
                  }}
                  onPause={() => {
                    console.log(`Video ${index} paused.`);
                  }}
                  onLoadedMetadata={(e) => handleLoadedMetaData(index, e)}
                >
                  <source src={item.video} type="video/mp4" className="" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {item.textLists.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-center mt-10    sm:w-[70vw] w-[88vw] ">
        <div className="flex-center py-5 px-7 bg-zinc-700 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) videoDivRef.current[i] = el;
              }}
              className="mx-2 w-3 h-3 bg-zinc-200 rounded-full relative cursor-pointer inline-block"
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => {
                  if (el) videoSpanRef.current[i] = el;
                }}
              />
            </div>
          ))}
        </div>

        <button className="control-btn">
          <Image
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "Replay" : !isPlaying ? "Play" : "Pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
            width={20}
            height={20}
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
