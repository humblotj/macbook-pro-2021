import './HardwareLockup.scss';

import { gsap } from 'gsap';
import { ReactNode, useEffect, useRef } from 'react';

import hardwareLarge from '../../assets/m1_laptop_large.jpeg';
import hardwareLarge2x from '../../assets/m1_laptop_large_2x.jpeg';
import hardwareMedium from '../../assets/m1_laptop_medium.jpeg';
import hardwareMedium2x from '../../assets/m1_laptop_medium_2x.jpeg';
import hardwareSmall from '../../assets/m1_laptop_small.jpeg';
import hardwareSmall2x from '../../assets/m1_laptop_small_2x.jpeg';
import Picture from './Picture';

const useFadeInOnScroll = (triggerRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const trigger = triggerRef.current!;

    gsap.to(trigger.querySelectorAll('img, video'), {
      scrollTrigger: {
        trigger,
        scrub: false,
        once: true,
        start: '90% bottom',
      },
      opacity: 1,
    });
  }, []);
};

interface Props {
  caption?: string;
  children: ReactNode;
}

const HardwareLockup = ({ caption, children }: Props) => {
  const triggerRef = useRef<HTMLElement>(null);
  useFadeInOnScroll(triggerRef);

  return (
    <div className={'harware-lockup' + (caption ? ' with-caption' : '')}>
      <Picture
        className="hardware-image"
        srcSet={{
          small: hardwareSmall,
          small2x: hardwareSmall2x,
          medium: hardwareMedium,
          medium2x: hardwareMedium2x,
          large: hardwareLarge,
          large2x: hardwareLarge2x,
        }}
      />
      <figure ref={triggerRef} className="hardware-lockup-figure">
        <div className="hardware-lockup-media">{children}</div>
        {caption && (
          <figcaption className="hardware-lockup-caption typography-body-reduced-tight">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default HardwareLockup;
