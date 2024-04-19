import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [active, SetActive] = React.useState(1);

  const onClickHandle = (id) => {
    SetActive(id);
  };

  return (
    <div className="placeholder">
      <div
        className="parallax-window"
        data-parallax="scroll"
        data-image-src="../../src/assets/img/simple-house-01.jpg">
        <div className="tm-header">
          <div className="row tm-header-inner">
            <div className="col-md-6 col-12">
              <img
                src="../../src/assets/img/simple-house-logo.png"
                alt="Logo"
                className="tm-site-logo"
              />
              <div className="tm-site-text-box">
                <h1 className="tm-site-title">Simple House</h1>
                <h6 className="tm-site-description">new restaurant template</h6>
              </div>
            </div>
            <nav className="col-md-6 col-12 tm-nav">
              <ul className="tm-nav-ul">
                <li className="tm-nav-li">
                  <Link
                    to="/"
                    onClick={() => onClickHandle(1)}
                    className={`tm-nav-link ${active === 1 ? 'active' : ''}`}>
                    Home
                  </Link>
                </li>
                <li className="tm-nav-li">
                  <Link
                    to="/about"
                    onClick={() => onClickHandle(2)}
                    className={`tm-nav-link ${active === 2 ? 'active' : ''}`}>
                    About
                  </Link>
                </li>
                <li className="tm-nav-li">
                  <Link
                    to="/contact"
                    onClick={() => onClickHandle(3)}
                    className={`tm-nav-link ${active === 3 ? 'active' : ''}`}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
