import './AppleNav.scss';

import FakeLink from './ui/FakeLink';

const AppleNav = () => {
  const getSmallHeader = () => (
    <ul className="apple-mobile-nav-header">
      <li className="mobile-burger">
        <FakeLink>
          <span>Open menu</span>
          <span className="burger">
            <span className="line-burger">
              <span />
            </span>
            <span className="line-burger">
              <span />
            </span>
          </span>
        </FakeLink>
      </li>
      <li>
        <FakeLink className="logo">
          <span>Apple</span>
        </FakeLink>
      </li>
      <li>
        <FakeLink className="bag" />
      </li>
    </ul>
  );

  const getLargeHeader = () => (
    <ul className="apple-nav-list">
      <li>
        <FakeLink className="logo">
          <span>Apple</span>
        </FakeLink>
      </li>
      <li>
        <FakeLink>Store</FakeLink>
      </li>
      <li>
        <FakeLink>Mac</FakeLink>
      </li>
      <li>
        <FakeLink>iPad</FakeLink>
      </li>
      <li>
        <FakeLink>iPhone</FakeLink>
      </li>
      <li>
        <FakeLink>Watch</FakeLink>
      </li>
      <li>
        <FakeLink>AirPods</FakeLink>
      </li>
      <li>
        <FakeLink>TV & Home</FakeLink>
      </li>
      <li>
        <FakeLink>Only on Apple</FakeLink>
      </li>
      <li>
        <FakeLink>Accessories</FakeLink>
      </li>
      <li>
        <FakeLink>Support</FakeLink>
      </li>
      <li>
        <FakeLink className="search" />
      </li>
      <li>
        <FakeLink className="bag" />
      </li>
    </ul>
  );

  return (
    <nav className="apple-nav">
      <div>
        {getLargeHeader()}
        {getSmallHeader()}
      </div>
    </nav>
  );
};

export default AppleNav;
