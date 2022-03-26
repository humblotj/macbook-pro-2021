import './EvenMore.scss';

import screenAllDayLarge from '../../assets/screen_all_day_large.jpeg';
import screenAllDayLarge2x from '../../assets/screen_all_day_large_2x.jpeg';
import screenAllDayMedium from '../../assets/screen_all_day_medium.jpeg';
import screenAllDayMedium2x from '../../assets/screen_all_day_medium_2x.jpeg';
import screenAllDaySmall from '../../assets/screen_all_day_small.jpeg';
import screenAllDaySmall2x from '../../assets/screen_all_day_small_2x.jpeg';
import FakeLink from '../ui/FakeLink';
import HardwareLockup from '../ui/HardwareLockup';
import Picture from '../ui/Picture';

const EvenMore = () => {
  return (
    <section className="subsection subsection-even-more section-pad-top">
      <div className="section-content">
        <h2 className="subsection-even-more-headline typography-section-headline-reduced">
          We can do this all day.
        </h2>
        <HardwareLockup caption="Final Cut Pro">
          <Picture
            srcSet={{
              small: screenAllDaySmall,
              small2x: screenAllDaySmall2x,
              medium: screenAllDayMedium,
              medium2x: screenAllDayMedium2x,
              large: screenAllDayLarge,
              large2x: screenAllDayLarge2x,
            }}
          />
        </HardwareLockup>
        <div className="performance-section-copy typography-performance-section-copy large-10 small-12">
          <p>
            Ferocious performance with game‑changing battery life — that
            efficiency is the magic of Apple silicon. A single charge lets you
            compile up to four times as much code in Xcode
            <sup className="footnote footnote-number">
              <FakeLink href="#footnote-21" aria-label="Footnote 19">
                19
              </FakeLink>
            </sup>{' '}
            or edit images for up to twice as long in Lightroom Classic.
            <sup className="footnote footnote-number">
              <FakeLink href="#footnote-22" aria-label="Footnote 20">
                20
              </FakeLink>
            </sup>{' '}
            And unlike other notebooks, MacBook&nbsp;Pro delivers the same
            amazing performance whether it’s plugged in or not.
          </p>
        </div>
        <div className="even-more-badges row">
          <div className="column column-14in-model large-5 medium-12 small-12">
            <h3 className="badge-headline typography-badge-headline">
              14” model
            </h3>
            <div className="badges row">
              <div className="column large-6 medium-5 small-12 badge1">
                <figure className="badge">
                  <div className="badge-content">
                    <span className="badge-caption">Up to</span>
                    <span className="badge-value">
                      17<span className="badge-unit">hrs</span>
                    </span>
                    <span className="badge-caption">
                      video playback
                      <sup className="footnote footnote-number">
                        <FakeLink href="#footnote-23" aria-label="Footnote 21">
                          21
                        </FakeLink>
                      </sup>
                    </span>
                  </div>
                </figure>
              </div>
              <div className="column large-6 medium-5 small-12 badge2">
                <figure className="badge">
                  <div className="badge-content">
                    <span className="badge-caption">Up to</span>
                    <span className="badge-value">
                      11<span className="badge-unit">hrs</span>
                    </span>
                    <span className="badge-caption">
                      wireless web browsing
                      <sup className="footnote footnote-number">
                        <FakeLink href="#footnote-23" aria-label="Footnote 21">
                          21
                        </FakeLink>
                      </sup>
                    </span>
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <div className="column column-16in-model large-offset-2 large-5 medium-offset-0 medium-12 small-12">
            <h3 className="badge-headline typography-badge-headline">
              16” model
            </h3>
            <div className="badges row">
              <div className="column large-6 medium-5 small-12 badge1">
                <figure className="badge">
                  <div className="badge-content">
                    <span className="badge-caption">Up to</span>
                    <span className="badge-value">
                      21<span className="badge-unit">hrs</span>
                    </span>
                    <span className="badge-caption">
                      video playback
                      <sup className="footnote footnote-number">
                        <FakeLink href="#footnote-24" aria-label="Footnote 22">
                          22
                        </FakeLink>
                      </sup>
                    </span>
                  </div>
                </figure>
              </div>
              <div className="column large-6 medium-5 small-12 badge2">
                <figure className="badge">
                  <div className="badge-content">
                    <span className="badge-caption">Up to</span>
                    <span className="badge-value">
                      14<span className="badge-unit">hrs</span>
                    </span>
                    <span className="badge-caption">
                      wireless web browsing
                      <sup className="footnote footnote-number">
                        <FakeLink href="#footnote-24" aria-label="Footnote 22">
                          22
                        </FakeLink>
                      </sup>
                    </span>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvenMore;
