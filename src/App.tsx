import './App.scss';

import { getAnalytics } from 'firebase/analytics';
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import AppleNav from './components/AppleNav';
import HeroPorts from './components/hero/HeroPorts';
import HeroSequence from './components/hero/HeroSequence';
import IntroHero from './components/hero/IntroHero';
import MacbookNav from './components/MacbookNav';
import Note from './components/Note';
import Configuration from './components/performance/Configuration';
import EvenMore from './components/performance/EvenMore';
import EvenMoreTiles from './components/performance/EvenMoreTiles';
import M1Max from './components/performance/M1Max';
import M1Pro from './components/performance/M1Pro';
import PerformanceIntro from './components/performance/PerformanceIntro';
import useScrollToTopOnRefresh from './hooks/useScrollToTopOnRefresh';

gsap.registerPlugin(ScrollTrigger);

const firebaseConfig: FirebaseOptions = JSON.parse(
  process.env.REACT_APP_API_KEY || '{}',
);
initializeApp(firebaseConfig);
if (process.env.NODE_ENV !== 'development') {
  getAnalytics();
}

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
        <Configuration />
        <EvenMore />
        <EvenMoreTiles />
      </section>
    </>
  );
};

export default App;
