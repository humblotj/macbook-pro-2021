import './ContentStats.scss';

import { RefObject, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import FakeLink from '../ui/FakeLink';

const useAnimateOnScrollIn = (
  className: string,
  triggerRef: RefObject<HTMLDivElement>,
) => {
  useEffect(() => {
    const trigger = triggerRef.current!;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        scrub: false,
        once: true,
        start: `${trigger.offsetHeight - window.innerHeight * 0.45} bottom`,
      },
      defaults: {
        duration: 0.5,
      },
    });
    tl.from(`.${className} .stat-border`, { scale: 0 }, 0);
    tl.to(`.${className} .stat-value`, { opacity: 1, duration: 0.2 }, 0.1);
    tl.from(`.${className} .stat-value`, { y: 147 }, 0.1);
  }, []);
};

const ContentStats = ({
  className,
  video,
  gpuDesc,
  memoryDesc,
  bandwidthDesc,
  displayDesc,
  resDesc,
  footnoteNumber,
}: {
  className: string;
  video: string;
  gpuDesc: string;
  memoryDesc: string;
  bandwidthDesc: string;
  displayDesc: string;
  resDesc: string;
  footnoteNumber: number;
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  useAnimateOnScrollIn(className, triggerRef);

  return (
    <div className="section-content-stats">
      <div
        ref={triggerRef}
        className={'subsection-performance-stats ' + className}
      >
        <div className="inline-media">
          <video src={video} autoPlay muted loop></video>
        </div>
        <div className="subsection-performance-stats-copy typography-performance-section-stats">
          <p className="subsection-performance-stat">
            <span className="stat-border"></span>
            <span className="stat-value">{gpuDesc}</span>
          </p>
          <p className="subsection-performance-stat">
            <span className="stat-border"></span>
            <span className="stat-value">{memoryDesc}</span>
          </p>
          <p className="subsection-performance-stat">
            <span className="stat-border"></span>
            <span className="stat-value">{bandwidthDesc}</span>
          </p>
          <p className="subsection-performance-stat">
            <span className="stat-border"></span>
            <span className="stat-value">{displayDesc}</span>
          </p>
          <p className="subsection-performance-stat">
            <span className="stat-border"></span>
            <span className="stat-value">
              {resDesc}
              <sup className="footnote footnote-number">
                <FakeLink>{footnoteNumber}</FakeLink>
              </sup>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentStats;
