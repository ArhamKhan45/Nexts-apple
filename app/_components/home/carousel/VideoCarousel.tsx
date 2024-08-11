import { hightlightsSlides } from "@/constants";
import { VideoState } from "@/types/global";
import React, { useRef, useState } from "react";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);
  const [video, setVideo] = useState<VideoState>({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((item) => (
          <div key={item.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video muted preload="auto" playsInline={true} id="video">
                  <source src={item.video} type="video/mp4" />
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
    </>
  );
};

export default VideoCarousel;
