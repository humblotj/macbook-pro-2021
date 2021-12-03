import './HardwareLockup.scss';

import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import hardwareSmall from '../../assets/m1_laptop_small.jpeg';
import hardwareSmall2x from '../../assets/m1_laptop_small_2x.jpeg';
import hardwareMedium from '../../assets/m1_laptop_medium.jpeg';
import hardwareMedium2x from '../../assets/m1_laptop_medium_2x.jpeg';
import hardwareLarge from '../../assets/m1_laptop_large.jpeg';
import hardwareLarge2x from '../../assets/m1_laptop_large_2x.jpeg';

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
      <picture className="hardware-image">
        <source
          srcSet={`${hardwareSmall}, ${hardwareSmall2x} 2x`}
          media="(max-width:734px)"
        />
        <source
          srcSet={`${hardwareMedium}, ${hardwareMedium2x} 2x`}
          media="(max-width:1068px)"
        />
        <source
          srcSet={`${hardwareLarge}, ${hardwareLarge2x} 2x`}
          media="(min-width:0px)"
        />
        <img src={hardwareLarge} alt="" />
      </picture>
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
