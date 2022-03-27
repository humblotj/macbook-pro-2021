import './PerformanceIntro.scss';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import gradientBackground from 'assets/m1_bg_large_2x.png';
import m1max from 'assets/m1max.json';
import m1pro from 'assets/m1pro.json';
import useLottie from 'hooks/useLottie';

const useAnimateOnScroll = (
  triggerRef: React.RefObject<HTMLDivElement>,
  proChipRef: React.RefObject<HTMLDivElement>,
  maxChipRef: React.RefObject<HTMLDivElement>,
) => {
  const loadAnimation = useLottie();

  useEffect(() => {
    const trigger = triggerRef.current!;

    const showHeadline = () => {
      gsap.to('div.performance-alt-headline', {
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger,
          scrub: false,
          start: `${window.innerHeight * 0.93} bottom`,
          toggleActions: 'play none none reverse',
        },
      });
    };

    const animateLottieChips = () => {
      const m1proAnimation = loadAnimation(proChipRef, m1pro);
      const m1maxAnimation = loadAnimation(maxChipRef, m1max);

      ScrollTrigger.create({
        trigger,
        scrub: true,
        start: `${window.innerHeight * 2} bottom`,
        end: `+=${window.innerHeight}`,
        onUpdate: (self) => {
          m1proAnimation.goToAndStop(
            self.progress * (m1proAnimation.totalFrames - 1),
            true,
          );
          m1maxAnimation.goToAndStop(
            self.progress * (m1maxAnimation.totalFrames - 1),
            true,
          );
        },
      });
    };

    const animateChipsText = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          scrub: true,
          start: `${window.innerHeight * 2} bottom`,
          end: `+=${window.innerHeight}`,
        },
      });
      tl.to('.pro-text-container .chip-copy', {
        backgroundImage:
          'linear-gradient(90deg, rgb(37, 47, 255) -100%, rgb(37, 106, 243) -50%, rgb(124, 192, 226) 0%, rgb(37, 106, 243) 50%, rgb(37, 47, 255) 100%)',
      });

      tl.to('.max-text-container .chip-copy', {
        backgroundImage:
          'linear-gradient(90deg, rgb(135, 39, 255) -100%, rgb(157, 68, 253) -50%, rgb(255, 159, 225) 0%, rgb(157, 68, 253) 50%, rgb(135, 39, 255) 100%)',
      });
    };

    const translateGradient = () => {
      gsap.to('.performace-swipe', {
        clipPath: 'inset(0% 0px 0px)',
        scrollTrigger: {
          trigger,
          scrub: true,
          start: `${window.innerHeight} bottom`,
          end: `+=${window.innerHeight}`,
          toggleActions: 'play none none reverse',
        },
      });
    };

    const translateChips = () => {
      gsap.to('.outer-chip-container', {
        y: 0,
        scrollTrigger: {
          trigger,
          scrub: true,
          start: `${window.innerHeight * 0.5} bottom`,
          end: `+=${window.innerHeight * 0.5}`,
          toggleActions: 'play none none reverse',
        },
      });
    };

    const animateHeader = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          scrub: false,
          start: `${window.innerHeight * 2} bottom`,
          toggleActions: 'play none none reverse',
        },
        defaults: {
          duration: 0.5,
          ease: 'cubic-bezier(0.28, 0.11, 0.32, 1)',
        },
      });

      tl.set('.macbook-nav', { backgroundColor: 'rgba(29,29,31,0.72)' }, 0);
      tl.to('.mn-title, .mn-menu a', { color: '#fff' }, 0);
      tl.to('.mn-hr', { backgroundColor: 'rgba(0, 0, 0, 0.16)' }, 0);
    };

    showHeadline();
    animateLottieChips();
    translateChips();
    animateChipsText();
    translateGradient();
    animateHeader();
  }, []);
};

const PerformanceIntro = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const proChipRef = useRef<HTMLDivElement>(null);
  const maxChipRef = useRef<HTMLDivElement>(null);
  useAnimateOnScroll(triggerRef, proChipRef, maxChipRef);

  return (
    <section className="subsection-performance-intro">
      <div ref={triggerRef} className="sticky-container">
        <div className="sticky-element">
          <div className="chip-container outer-chip-container section-content">
            <div className="pro-chip-container">
              <div ref={proChipRef} className="image-sequence" />
            </div>
            <div className="max-chip-container">
              <div ref={maxChipRef} className="image-sequence" />
            </div>
          </div>
          <div className="performance-swipe-alt performance-section-pad-top">
            <div className="performance-alt-headline typography-headline-super">
              <h2 className="performance-alt-headline typography-headline-super">
                Pro to the Max.
              </h2>
            </div>
          </div>
          <div className="performace-swipe theme-dark performance-section-pad-bottom">
            <div className="performance-section-pad-top">
              <h2 className="performance-swipe-headline typography-headline-super">
                Pro to the Max.
              </h2>
              <div className="chip-container section-content">
                <div className="gradient-container">
                  <img src={gradientBackground} alt="" />
                </div>
                <div className="pro-chip-container">
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAHAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    alt=""
                  />
                  <div className="pro-text-container">
                    <h3 className="chip-headline typography-section-eyebrow">
                      Scary fast.
                    </h3>
                    <div>
                      <p className="chip-copy typography-performance-stat">
                        Up to 10-core CPU
                      </p>
                      <p className="chip-copy typography-performance-stat">
                        Up to 16-core GPU
                      </p>
                      <p className="chip-copy typography-performance-stat">
                        Up to 32GB of unified memory
                      </p>
                      <p className="chip-copy typography-performance-stat">
                        Up to 200GB/s memory bandwidth
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-chip-container">
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAHAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    alt=""
                  />
                  <div className="max-text-container">
                    <h3 className="chip-headline typography-section-eyebrow">
                      Scary faster.
                    </h3>
                    <div>
                      <p className="chip-copy typography-performance-stat">
                        10-core CPU
                      </p>
                      <p className="chip-copy typography-performance-stat">
                        Up to 32-core GPU
                      </p>
                      <p className="chip-copy typography-performance-stat">
                        Up to 64GB of unified memory
                      </p>
                      <p className="chip-copy typography-performance-stat">
                        Up to 400GB/s memory bandwidth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-copy-container section-content">
                <p className="typography-section-copy large-10 medium-12 small-11 hero-copy">
                  M1 Pro and M1 Max scale the amazing M1 architecture to new
                  heights — and for the first time, they bring a system on a
                  chip (SoC) architecture to a pro notebook. Both have more CPU
                  cores, more GPU cores, and more unified memory than M1. Along
                  with a powerful Neural Engine for supercharged machine
                  learning and upgraded media engines with ProRes support, M1
                  Pro and M1 Max allow pros to do things they never could
                  before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-trigger-container">
        <button type="button">Go inside M1 Pro and M1 Max</button>
      </div>
    </section>
  );
};

export default PerformanceIntro;
