import './IntroHero.scss';

import { gsap } from 'gsap';
import { SyntheticEvent } from 'react';

import largeVideo from '../../assets/intro-hero_large_2x.mp4';
import mediumVideo from '../../assets/intro-hero_medium_2x.mp4';
import smallVideo from '../../assets/intro-hero_small_2x.mp4';
import useSize from '../../hooks/useSize';
import { largeBreakpoint, mediumBreakpoint } from '../../utils/utils';
import FakeLink from '../ui/FakeLink';

const useVideo = () => {
  const [width] = useSize();

  const getVideo = () => {
    if (width > largeBreakpoint) {
      return largeVideo;
    }
    if (width > mediumBreakpoint) {
      return mediumVideo;
    }
    return smallVideo;
  };

  const setDarkBackground = () => {
    if (width > largeBreakpoint) {
      gsap.set('.mn-title, .mn-menu a, .mn-hr', {
        color: '#fff',
      });
      gsap.set('.mn-hr', {
        backgroundColor: ' rgba(255,255,255,0.24)',
      });
    }
  };

  const animateHeader = (timeStamp: number) => {
    const timeTrigger = width > largeBreakpoint ? 1900 : 0;

    if (timeStamp > timeTrigger) {
      gsap.set('.macbook-nav', {
        backdropFilter: 'saturate(180%) blur(20px)',
        backgroundColor: 'rgba(255,255,255,0.72)',
      });
      gsap.to('.mn-title, .mn-menu a', {
        color: '#000',
        duration: 0.5,
        ease: 'cubic-bezier(0.28, 0.11, 0.32, 1)',
      });
      gsap.to('.mn-hr', {
        backgroundColor: 'rgba(0, 0, 0, 0.16)',
        duration: 0.5,
        ease: 'cubic-bezier(0.28, 0.11, 0.32, 1)',
      });
      gsap.set('.mn-hr', {
        maxWidth: 'none',
      });
    }
  };

  const animateIntro = (timeStamp: number) => {
    if (timeStamp > 1900 && width <= largeBreakpoint) {
      const tl = gsap.timeline({
        defaults: {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
      });
      tl.to('h2.intro-paragraph', {});
      tl.to('.typography-eyebrow-super', {}, 0.15);
      tl.to('.intro-price', {}, 0.25);
      tl.to('.cta-container', {}, 0.3);
    }
  };

  const onVideoProgress = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
    animateHeader(e.timeStamp);
    animateIntro(e.timeStamp);
  };

  return { video: getVideo(), setDarkBackground, onVideoProgress };
};

const IntroHero = () => {
  const { video, setDarkBackground, onVideoProgress } = useVideo();

  return (
    <div className="intro-hero">
      <div className="video-container">
        <video
          src={video}
          autoPlay
          muted
          onLoadStart={setDarkBackground}
          onTimeUpdate={onVideoProgress}
        ></video>
      </div>
      <div className="intro-text-container">
        <div className="section-content">
          <h2 className="intro-paragraph medium-10 small-12">
            Supercharged for pros.
          </h2>
          <p className="intro-paragraph typography-eyebrow-super large-10 medium-12">
            The most powerful MacBook Pro ever is here. With the blazing-fast M1
            Pro or M1 Max chip — the first Apple silicon designed for pros — you
            get groundbreaking performance and amazing battery life. Add to that
            a stunning Liquid Retina XDR display, the best camera and audio ever
            in a Mac notebook, and all the ports you need. The first notebook of
            its kind, this MacBook Pro is a beast.
          </p>
          <p className="intro-paragraph intro-price typography-hero-cta">
            <span>From $1999</span>
          </p>
          <ul className="cta-container typography-hero-cta">
            <li>
              <FakeLink>
                <span>Watch the event</span>
                <span className="more" />
              </FakeLink>
            </li>
            <li>
              <FakeLink>
                <span>Watch the film</span>
                <span className="play-circle" />
              </FakeLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntroHero;
