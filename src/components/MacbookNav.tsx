import './MacbookNav.scss';

import FakeLink from './ui/FakeLink';

const MacbookNav = () => {
  return (
    <nav className="macbook-nav">
      <div className="mn-content">
        <FakeLink className="mn-title">
          MacBook Pro
          <span>14” and 16” models</span>
        </FakeLink>
        <div>
          <ul className="mn-menu">
            <li>
              <FakeLink>Overview</FakeLink>
            </li>
            <li>
              <FakeLink>Why Mac</FakeLink>
            </li>
            <li>
              <FakeLink>Tech Specs</FakeLink>
            </li>
          </ul>
          <div className="mn-actions">
            <div className="mn-action-menu-cta">
              <span className="chevron" />
            </div>
            <FakeLink>Buy</FakeLink>
          </div>
        </div>
      </div>
      <div className="mn-hr" />
    </nav>
  );
};

export default MacbookNav;
