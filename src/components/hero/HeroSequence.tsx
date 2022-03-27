import './HeroSequence.scss';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import heroLarge from 'assets/hero_large.json';
import heroMedium from 'assets/hero_medium.json';
import heroSmall from 'assets/hero_small.json';
import useLottie from 'hooks/useLottie';
import useSize from 'hooks/useSize';
import { largeBreakpoint, mediumBreakpoint } from 'utils/utils';
import FakeLink from '../ui/FakeLink';

const StatItem = ({
  stat,
  copy,
  footnote,
}: {
  stat: string;
  copy: string;
  footnote: number;
}) => (
  <p className="stat-item">
    <span className="stats-border" />
    <span className="stat-up-to">Up to</span>
    <span className="stat-stat">{stat}</span>
    <span className="stat-copy">
      {copy}
      <sup className="footnote-number">
        <FakeLink>{footnote}</FakeLink>
      </sup>
    </span>
  </p>
);

const useHero = () => {
  const [width] = useSize();
  if (width > largeBreakpoint) {
    return heroLarge;
  }
  if (width > mediumBreakpoint) {
    return heroMedium;
  }
  return heroSmall;
};

const useAnimateOnScroll = (
  triggerRef: React.RefObject<HTMLDivElement>,
  heroRef: React.RefObject<HTMLDivElement>,
) => {
  const loadAnimation = useLottie();
  const hero = useHero();
  const [width] = useSize();

  useEffect(() => {
    const heroAnimation = loadAnimation(heroRef, hero);

    if (width > mediumBreakpoint) {
      ScrollTrigger.create({
        trigger: triggerRef.current!,
        scrub: true,
        start: '0 0',
        end: `+=${window.innerHeight * 2.7}`,
        onUpdate: (self) => {
          heroAnimation.goToAndStop(
            self.progress * (heroAnimation.totalFrames - 1),
            true,
          );
        },
      });
    } else {
      ScrollTrigger.create({
        trigger: triggerRef.current!,
        scrub: true,
        start: 'top bottom',
        end: `+=${window.innerHeight}`,
        onUpdate: (self) => {
          heroAnimation.goToAndStop(
            self.progress * (heroAnimation.totalFrames - 1),
            true,
          );
        },
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current!,
        scrub: false,
        start:
          width > mediumBreakpoint ? `+=${window.innerHeight * 2.65}` : '0 50%',
        toggleActions: 'play none none reverse',
      },
      defaults: {
        duration: 0.5,
      },
    });
    tl.from('.stats-border', { scale: 0 }, 0);
    tl.from(
      '.stat-up-to, .stat-stat, .stat-copy',
      {
        opacity: 0,
        duration: 0.2,
      },
      0,
    );
    tl.from('.stat-up-to', { y: 30 }, 0.1);
    tl.from('.stat-stat', { y: 119 }, 0.2);
    tl.from('.stat-copy', { y: 57 }, 0.3);
  }, []);
};

const HeroSequence = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useAnimateOnScroll(triggerRef, heroRef);

  return (
    <div ref={triggerRef} className="hero-sequence">
      <div className="sticky-element">
        <div className="sequence-element">
          <div ref={heroRef} className="sequence" />
          <div className="stats-container">
            <StatItem
              stat="3.7x"
              copy={'faster CPU\nperformance'}
              footnote={1}
            />
            <StatItem
              stat="13x"
              copy={'faster\ngraphics\nperformance'}
              footnote={2}
            />
            <StatItem
              stat="11x"
              copy={'faster\nmachine\nlearning'}
              footnote={3}
            />
            <StatItem stat="21" copy={'hours\nbattery life'} footnote={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSequence;
