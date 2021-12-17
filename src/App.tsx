import './App.scss';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { initializeApp, FirebaseOptions } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

gsap.registerPlugin(ScrollTrigger);

const firebaseConfig: FirebaseOptions = JSON.parse(
  process.env.REACT_APP_API_KEY || '{}',
);
initializeApp(firebaseConfig);
if (process.env.NODE_ENV !== 'development') {
  getAnalytics();
}

import useScrollToTopOnRefresh from './hooks/useScrollToTopOnRefresh';
import AppleNav from './components/AppleNav';
import IntroHero from './components/hero/IntroHero';
import MacbookNav from './components/MacbookNav';
import HeroSequence from './components/hero/HeroSequence';
import HeroPorts from './components/hero/HeroPorts';
import PerformanceIntro from './components/performance/PerformanceIntro';
import M1Pro from './components/performance/M1Pro';
import M1Max from './components/performance/M1Max';
import Note from './components/Note';

const App = () => {
  useScrollToTopOnRefresh();

  return (
    <>
      <Note />
      <AppleNav />
      <MacbookNav />
      <section className="section-hero">
        <IntroHero />
        <HeroSequence />
        <HeroPorts />
      </section>
      <section className="section-performance theme-dark">
        <PerformanceIntro />
        <M1Pro />
        <M1Max />
      </section>
    </>
  );
};

export default App;
