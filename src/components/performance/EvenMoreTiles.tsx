import './EvenMoreTiles.scss';

import coolestPartLarge from 'assets/coolest_part_large.jpeg';
import coolestPartLarge2x from 'assets/coolest_part_large_2x.jpeg';
import coolestPartMedium from 'assets/coolest_part_medium.jpeg';
import coolestPartMedium2x from 'assets/coolest_part_medium_2x.jpeg';
import coolestPartSmall from 'assets/coolest_part_small.jpeg';
import coolestPartSmall2x from 'assets/coolest_part_small_2x.jpeg';
import fastAndVastLarge from 'assets/fast_and_vast_large.jpeg';
import fastAndVastLarge2x from 'assets/fast_and_vast_large_2x.jpeg';
import fastAndVastMedium from 'assets/fast_and_vast_medium.jpeg';
import fastAndVastMedium2x from 'assets/fast_and_vast_medium_2x.jpeg';
import fastAndVastSmall from 'assets/fast_and_vast_small.jpeg';
import fastAndVastSmall2x from 'assets/fast_and_vast_small_2x.jpeg';
import FakeLink from '../ui/FakeLink';
import Picture from '../ui/Picture';

const EvenMoreTiles = () => {
  return (
    <section className="subsection subsection-even-more-tiles">
      <div className="section-content-tiles">
        <div className="even-more-tiles tiles grid">
          <div className="grid-item large-span-6 small-span-12">
            <div className="tile tile-coolest">
              <div className="tile-content">
                <p className="tile-headline typography-bento-copy">
                  <span className="highlight">The coolest part.</span> Advanced
                  thermal systems move 50&nbsp;percent more air, even at lower
                  fan speeds. And thanks to the efficiency of Apple silicon, the
                  fans never turn on for many tasks you do every day.
                </p>
                <Picture
                  className="overview-performance-coolest-part tile-image loaded"
                  srcSet={{
                    small: coolestPartSmall,
                    small2x: coolestPartSmall2x,
                    medium: coolestPartMedium,
                    medium2x: coolestPartMedium2x,
                    large: coolestPartLarge,
                    large2x: coolestPartLarge2x,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="grid-item large-span-6 small-span-12">
            <div className="tile tile-fast">
              <div className="tile-content">
                <p className="tile-headline typography-bento-copy">
                  <span className="highlight">Fast. And vast.</span> Get
                  jaw-dropping 7.4GB/s read speeds
                  <sup className="footnote footnote-number">
                    <FakeLink href="#footnote-25" aria-label="Footnote 23">
                      23
                    </FakeLink>
                  </sup>{' '}
                  from the up to 8TB SSD — up to two times faster than the
                  previous generation.
                  <sup className="footnote footnote-number">
                    <FakeLink href="#footnote-26" aria-label="Footnote 24">
                      24
                    </FakeLink>
                  </sup>{' '}
                  So you can open 8K videos instantly or store hundreds of
                  thousands of RAW photos at once.
                </p>
                <Picture
                  className="overview-performance-fast-and-vast tile-image tile-image--up-to loaded"
                  srcSet={{
                    small: fastAndVastSmall,
                    small2x: fastAndVastSmall2x,
                    medium: fastAndVastMedium,
                    medium2x: fastAndVastMedium2x,
                    large: fastAndVastLarge,
                    large2x: fastAndVastLarge2x,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvenMoreTiles;
