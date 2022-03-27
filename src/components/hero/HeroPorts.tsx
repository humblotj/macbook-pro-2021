import './HeroPorts.scss';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import leftPorts from 'assets/side_left_large_2x.jpeg';
import rightPorts from 'assets/side_right_large_2x.jpeg';

const HeroPorts = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current!,
        scrub: true,
        start: 'top bottom',
        end: `+=${window.innerHeight * 0.45}`,
      },
    });
    tl.to('.left-ports-container', { x: 0 });
    tl.to('.right-ports-container', { x: 0 }, 0.05);
  }, []);

  return (
    <div ref={ref} className="hero-ports">
      <div className="left-ports-container ports-container">
        <img src={leftPorts} alt="" />
      </div>
      <div className="right-ports-container ports-container">
        <img src={rightPorts} alt="" />
      </div>
    </div>
  );
};

export default HeroPorts;
