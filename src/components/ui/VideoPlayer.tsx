import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const useReplayOnScrollIn = (ref: React.RefObject<HTMLVideoElement>) => {
  useEffect(() => {
    const video = ref.current!;

    const replayVideo = () => {
      video.currentTime = 0;
      video.play();
    };

    ScrollTrigger.create({
      trigger: video,
      scrub: false,
      start: 'top bottom',
      end: `+=${window.innerHeight}`,
      onEnter: replayVideo,
    });
  }, []);
};

const VideoPlayer = ({ src }: { src: string }) => {
  const ref = useRef<HTMLVideoElement>(null);
  useReplayOnScrollIn(ref);

  return <video ref={ref} playsInline={true} muted src={src}></video>;
};

export default VideoPlayer;
