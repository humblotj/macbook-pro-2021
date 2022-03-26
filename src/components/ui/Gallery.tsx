import './Gallery.scss';

import { gsap } from 'gsap';
import { Fragment, ReactNode, useEffect, useRef, useState } from 'react';

import FakeLink from './FakeLink';

const Separator = () => (
  <span className="separator" aria-hidden="true">
    /
  </span>
);

const TabNav = ({
  href,
  index,
  active = false,
  children,
  onClick,
}: {
  href: string;
  index: number;
  active?: boolean;
  children: string;
  onClick: () => void;
}) => {
  return (
    <li
      role="presentation"
      className={'tabnav-item' + (active ? ' current' : '')}
    >
      <FakeLink
        role="tab"
        href={href}
        className={'tabnav-link' + (active ? ' current' : '')}
        aria-controls={`cpu-gallery-gallery-item-${index}`}
        tabIndex={0}
        aria-selected={!!active}
        onClick={onClick}
      >
        {children}
      </FakeLink>
    </li>
  );
};

const Bar = ({
  className,
  children,
  value,
  tabActive,
  delay = 0,
}: {
  className?: string;
  children: ReactNode;
  value: number;
  tabActive: number;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { width: 0 },
      { width: `${value}%`, duration: 0.8, delay },
    );
    gsap.fromTo(
      ref.current!.querySelector('.bar'),
      { opacity: 0 },
      { opacity: 1, duration: 0.8, delay },
    );
  }, [tabActive]);

  return (
    <div
      className={'bar-content-container' + (className ? ' ' + className : '')}
    >
      <div ref={ref} className="bar-mask">
        <div className="bar"></div>
      </div>
      <span className="bar-caption">{children}</span>
    </div>
  );
};

const Badge = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <figure className={'badge' + (className ? ' ' + className : '')}>
      <div className="badge-content">
        <div className="badge-value-container">
          <span className="badge-value">{children}</span>
          <span className="badge-unit">x</span>
        </div>
        <span className="badge-caption"></span>
      </div>
    </figure>
  );
};

const TabPanel = ({
  disclamer1,
  footnote1,
  disclamer2,
  footnote2,
  m1max14,
  m1max16,
  m1pro14,
  m1pro16,
  tabActive,
}: {
  disclamer1: string;
  footnote1: number;
  disclamer2?: string;
  footnote2?: number;
  m1max14: string;
  m1max16: string;
  m1pro14: string;
  m1pro16: string;
  tabActive: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  }, [tabActive]);

  return (
    <div ref={ref} className="gallery-item current grid" role="tabpanel">
      {!disclamer2 && (
        <div className="disclaimer single-disclaimer">
          {disclamer1}
          <sup className="footnote footnote-number">
            <FakeLink aria-label={`Footnote ${footnote1}`}>
              {footnote1}
            </FakeLink>
          </sup>
        </div>
      )}
      <div className="group total-column-2">
        {disclamer2 && (
          <div className="disclaimer single-disclaimer">
            {disclamer1}
            <sup className="footnote footnote-number">
              <FakeLink aria-label={`Footnote ${footnote1}`}>
                {footnote1}
              </FakeLink>
            </sup>
          </div>
        )}
        <h3 className="gallery-model-headline">14” model</h3>
        <div className="bars-container">
          <Bar tabActive={tabActive} className="bar-m1-max" value={100}>
            M1 Max with 10‑core&nbsp;CPU
          </Bar>
          <Badge className="bar-m1-max">{m1max14}</Badge>
          <Bar
            tabActive={tabActive}
            className="bar-m1-pro"
            value={(+m1pro14 / +m1max14) * 100}
            delay={0.1}
          >
            M1 Pro with 10‑core&nbsp;CPU
          </Bar>
          <Badge className="bar-m1-pro">{m1pro14}</Badge>
          <Bar
            tabActive={tabActive}
            className="bar-legacy"
            value={100 / +m1max14}
            delay={0.2}
          >
            Quad-core Intel Core i7
            <br />
            13-inch MacBook Pro
          </Bar>
        </div>
      </div>
      <div className="group total-column-2">
        {disclamer2 && (
          <div className="disclaimer single-disclaimer">
            {disclamer2}
            <sup className="footnote footnote-number">
              <FakeLink aria-label={`Footnote ${footnote1}`}>
                {footnote2}
              </FakeLink>
            </sup>
          </div>
        )}
        <h3 className="gallery-model-headline">16” model</h3>
        <div className="bars-container">
          <Bar
            tabActive={tabActive}
            className="bar-m1-max"
            value={100}
            delay={0.3}
          >
            M1 Max with 10‑core&nbsp;CPU
          </Bar>
          <Badge className="bar-m1-max">{m1max16}</Badge>
          <Bar
            tabActive={tabActive}
            className="bar-m1-pro"
            value={(+m1pro16 / +m1max16) * 100}
            delay={0.4}
          >
            M1 Pro with 10‑core&nbsp;CPU
          </Bar>
          <Badge className="bar-m1-pro">{m1pro16}</Badge>
          <Bar
            tabActive={tabActive}
            className="bar-legacy"
            value={100 / +m1max14}
            delay={0.5}
          >
            8-core Intel Core i9
            <br />
            16-inch MacBook Pro
          </Bar>
        </div>
      </div>
    </div>
  );
};

const Gallery = ({
  className,
  headline,
  tabs,
}: {
  className: string;
  headline: string;
  tabs: {
    label: string;
    href: string;
    disclamer1: string;
    footnote1: number;
    disclamer2?: string;
    footnote2?: number;
    m1max14: string;
    m1pro14: string;
    m1max16: string;
    m1pro16: string;
  }[];
}) => {
  const [tabActive, setTabActive] = useState(0);

  return (
    <div className={'subsection-gallery ready ' + className}>
      <div className="subsection-gallery-content">
        <div className="subsection-gallery-copy">
          <h2 className="typography-configuration-gallery-headline gallery-headline">
            {headline}
          </h2>
        </div>
        <div className="tablist-wrapper typography-manifesto">
          <div className="tabnav">
            <ul role="tablist" className="tabnav-items">
              {tabs.map(({ label, href }, i) => (
                <Fragment key={label}>
                  <TabNav
                    href={href}
                    index={i + 1}
                    active={tabActive === i}
                    onClick={() => setTabActive(i)}
                  >
                    {label}
                  </TabNav>
                  {i !== tabs.length - 1 && <Separator />}
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
        <div className="item-container">
          <TabPanel {...tabs[tabActive]} tabActive={tabActive} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
