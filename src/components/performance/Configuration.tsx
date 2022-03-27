import './Configuration.scss';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import chooseSizeLarge from 'assets/choose_size_large.jpeg';
import chooseSizeLarge2x from 'assets/choose_size_large_2x.jpeg';
import chooseSizeMedium from 'assets/choose_size_medium.jpeg';
import chooseSizeMedium2x from 'assets/choose_size_medium_2x.jpeg';
import chooseSizeSmall from 'assets/choose_size_small.jpeg';
import chooseSizeSmall2x from 'assets/choose_size_small_2x.jpeg';
import Gallery from '../ui/Gallery';
import Picture from '../ui/Picture';

const CPUTabs = [
  {
    label: 'Xcode',
    href: '#cpu-gallery-gallery-item-1-xcode',
    disclamer1: 'Faster project build',
    footnote1: 7,
    m1max14: '3.7',
    m1pro14: '3.7',
    m1max16: '2.1',
    m1pro16: '2.1',
  },
  {
    label: 'NASA TetrUSS',
    href: '#cpu-gallery-gallery-item-2-nasa-tetruss',
    disclamer1: 'Faster computational fluid dynamics performance',
    footnote1: 8,
    m1max14: '2.8',
    m1pro14: '2.8',
    m1max16: '3.0',
    m1pro16: '3.0',
  },
  {
    label: 'Logic Pro',
    href: '#cpu-gallery-gallery-item-3-logic-pro',
    disclamer1: 'More Amp Designer plug-ins',
    footnote1: 9,
    m1max14: '3.0',
    m1pro14: '3.0',
    m1max16: '1.7',
    m1pro16: '1.7',
  },
  {
    label: 'Vectorworks',
    href: '#cpu-gallery-gallery-item-4-vectorworks',
    disclamer1: 'Faster publish performance',
    footnote1: 10,
    m1max14: '2.1',
    m1pro14: '2.1',
    m1max16: '2.1',
    m1pro16: '2.1',
  },
  {
    label: 'Affinity Photo',
    href: '#cpu-gallery-gallery-item-5-affinity-photo',
    disclamer1: 'Faster multicore vector performance',
    footnote1: 11,
    m1max14: '2.4',
    m1pro14: '2.4',
    m1max16: '1.7',
    m1pro16: '1.7',
  },
];

const GPUTabs = [
  {
    label: 'Final Cut Pro',
    href: '#gpu-gallery-gallery-item-1-final-cut-pro',
    disclamer1: 'Faster 4K render speed',
    disclamer2: 'Faster 8K render speed',
    footnote1: 12,
    footnote2: 13,
    m1max14: '13.4',
    m1pro14: '9.2',
    m1max16: '2.9',
    m1pro16: '1.7',
  },
  {
    label: 'Maxon Cinema 4D',
    href: '#gpu-gallery-gallery-item-2-maxon-cinema-4d',
    disclamer1: 'Faster real-time 3D\xa0performance',
    disclamer2: 'Faster render with Redshift',
    footnote1: 14,
    footnote2: 15,
    m1max14: '4.1',
    m1pro14: '3.6',
    m1max16: '4.0',
    m1pro16: '2.5',
  },
  {
    label: 'Blackmagic DaVinci Resolve Studio',
    href: '#gpu-gallery-gallery-item-3-blackmagic-davinci-resolve-studio',
    disclamer1: 'Faster effect render',
    footnote1: 16,
    m1max14: '5.0',
    m1pro14: '3.6',
    m1max16: '1.9',
    m1pro16: '1.4',
  },
  {
    label: 'Adobe Photoshop',
    href: '#gpu-gallery-gallery-item-4-adobe-photoshop',
    disclamer1: 'Faster GPU-accelerated filters and functions',
    footnote1: 17,
    m1max14: '3.5',
    m1pro14: '3.3',
    m1max16: '2.1',
    m1pro16: '2.0',
  },
  {
    label: 'Affinity Photo',
    href: '#gpu-gallery-gallery-item-5-affinity-photo',
    disclamer1: 'Faster combined vector and raster GPU performance',
    footnote1: 18,
    m1max14: '8.5',
    m1pro14: '5.6',
    m1max16: '4.5',
    m1pro16: '2.9',
  },
];

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

const Configuration = () => {
  const ref = useRef<HTMLElement>(null);
  useFadeInOnScroll(ref);

  return (
    <div className="subsection-configuration section-pad-top">
      <div className="section-content">
        <h2 className="typography-section-headline-reduced configuration-headline large-7 medium-10 small-12">
          Choose your&nbsp;size. Choose your&nbsp;chip.
          <br />
          Let&nbsp;it&nbsp;rip.
        </h2>
        <figure ref={ref} className="hardware-lockup">
          <Picture
            srcSet={{
              small: chooseSizeSmall,
              small2x: chooseSizeSmall2x,
              medium: chooseSizeMedium,
              medium2x: chooseSizeMedium2x,
              large: chooseSizeLarge,
              large2x: chooseSizeLarge2x,
            }}
          />
          <div className="figcaption-container">
            <figcaption className="configuration-caption caption-1 typography-body-reduced-tight">
              Final Cut Pro
            </figcaption>
            <figcaption className="configuration-caption caption-2 typography-body-reduced-tight">
              Logic Pro
            </figcaption>
          </div>
        </figure>
        <p className="typography-performance-section-copy configuration-copy">
          The new MacBook&nbsp;Pro is available in 14- and 16-inch models. Each
          can be configured with the M1&nbsp;Pro or M1&nbsp;Max chip and offers
          unprecedented levels of pro performance. So you can manipulate
          millions of polygons in Cinema 4D, edit up to seven streams of 8K
          ProRes video in Final Cut Pro, or grade color in HDR on 8K 4444 ProRes
          video — all miles away from the edit bay.
        </p>
      </div>
      <Gallery
        className="cpu-gallery-gallery"
        headline="CPU Performance"
        tabs={CPUTabs}
      />
      <Gallery
        className="gpu-gallery-gallery"
        headline="GPU Performance"
        tabs={GPUTabs}
      />
    </div>
  );
};

export default Configuration;
