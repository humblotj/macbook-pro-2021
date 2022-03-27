import './M1.scss';

import largeArtworkVideo from 'assets/artwork_video_large_2x.mp4';
import mediumArtworkVideo from 'assets/artwork_video_medium_2x.mp4';
import smallArtworkVideo from 'assets/artwork_video_small_2x.mp4';
import screenProcessing from 'assets/screen_processing_large_2x.jpeg';
import useSize from 'hooks/useSize';
import { largeBreakpoint, mediumBreakpoint } from 'utils/utils';
import HardwareLockup from '../ui/HardwareLockup';
import ContentStats from './ContentStats';

const useVideo = () => {
  const [width] = useSize();

  const getVideo = () => {
    if (width > largeBreakpoint) {
      return largeArtworkVideo;
    }
    if (width > mediumBreakpoint) {
      return mediumArtworkVideo;
    }
    return smallArtworkVideo;
  };

  return getVideo();
};

const M1Pro = () => {
  const video = useVideo();

  return (
    <section className="subsection-m1-pro section-pad-top">
      <div className="section-content">
        <h2 className="section-eyebrow subsection-performance-eyebrow typography-tout">
          M1 Pro
        </h2>
        <h3 className="subsection-performance-headline typography-section-headline-reduced">
          Scary fast
        </h3>
        <div className="subsection-performance-copy typography-performance-section-copy large-10 medium-11 small-12">
          <p>
            M1 Pro takes the exceptional performance of the M1 architecture to a
            whole new level for pro users. Even the most ambitious projects are
            easily handled with up to 10 CPU cores, up to 16 GPU cores, a
            16‑core Neural Engine, and dedicated encode and decode media engines
            that support H.264, HEVC, and ProRes codecs.
          </p>
        </div>
      </div>
      <ContentStats
        className="m1-pro"
        video={video}
        gpuDesc="Up to 16‑core GPU"
        memoryDesc="Up to 32GB of unified memory"
        bandwidthDesc="Up to 200GB/s memory bandwidth"
        displayDesc="Support for two external displays"
        resDesc="Up to 20 streams of 4K ProRes video playback"
        footnoteNumber={5}
      />
      <div className="section-content">
        <HardwareLockup caption="Xcode">
          <img src={screenProcessing} alt="" />
        </HardwareLockup>
      </div>
    </section>
  );
};

export default M1Pro;
