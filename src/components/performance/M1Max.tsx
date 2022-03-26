import './M1.scss';

import largeFinalCutScene from '../../assets/finalcutpro_scene_large_2x.mp4';
import mediumFinalCutScene from '../../assets/finalcutpro_scene_medium_2x.mp4';
import smallFinalCutScene from '../../assets/finalcutpro_scene_small_2x.mp4';
import largeGraphicScreen from '../../assets/graphic_screen_large_2x.mp4';
import mediumGraphicScreen from '../../assets/graphic_screen_medium_2x.mp4';
import smallGraphicScreen from '../../assets/graphic_screen_small_2x.mp4';
import useSize from '../../hooks/useSize';
import { largeBreakpoint, mediumBreakpoint } from '../../utils/utils';
import HardwareLockup from '../ui/HardwareLockup';
import VideoPlayer from '../ui/VideoPlayer';
import ContentStats from './ContentStats';

const useVideo = () => {
  const [width] = useSize();

  const getBackgroundVideo = () => {
    if (width > largeBreakpoint) {
      return largeFinalCutScene;
    }
    if (width > mediumBreakpoint) {
      return mediumFinalCutScene;
    }
    return smallFinalCutScene;
  };

  const getHardwareVideo = () => {
    if (width > largeBreakpoint) {
      return largeGraphicScreen;
    }
    if (width > mediumBreakpoint) {
      return mediumGraphicScreen;
    }
    return smallGraphicScreen;
  };

  return {
    backgroundVideo: getBackgroundVideo(),
    hardwareVideo: getHardwareVideo(),
  };
};

const M1Max = () => {
  const { backgroundVideo, hardwareVideo } = useVideo();

  return (
    <section className="subsection-m1-max section-pad-top">
      <div className="section-content">
        <h2 className="section-eyebrow subsection-performance-eyebrow typography-tout">
          M1 Max
        </h2>
        <h3 className="subsection-performance-headline typography-section-headline-reduced">
          Scary faster
        </h3>
        <div className="subsection-performance-copy typography-performance-section-copy large-10 medium-11 small-12">
          <p>
            M1 Max is the most powerful chip ever created for a pro notebook,
            with 10 CPU cores, up to 32 GPU cores, and a 16-core Neural Engine.
            It delivers two times faster graphics processing and double the
            memory bandwidth of M1 Pro. And it has a dedicated media engine for
            decode and two for encode — with up to two times faster video
            encoding — and two ProRes accelerators for even higher multistream
            performance.
          </p>
        </div>
      </div>
      <ContentStats
        className="m1-max"
        video={backgroundVideo}
        gpuDesc="Up to 32‑core GPU"
        memoryDesc="Up to 64GB of unified memory"
        bandwidthDesc="Up to 400GB/s memory bandwidth"
        displayDesc="Support for four external displays"
        resDesc="Up to 7 streams of 8K ProRes video playback"
        footnoteNumber={6}
      />
      <div className="section-content">
        <HardwareLockup caption="Final Cut Pro">
          <VideoPlayer src={hardwareVideo} />
        </HardwareLockup>
      </div>
    </section>
  );
};

export default M1Max;
