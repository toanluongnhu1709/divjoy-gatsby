/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';

const Section = styled.div`

img {
  width="112"
  height="28"
}
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar is-white"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a className="navbar-item" href="">
                <img src="./images/logo-1024.png" alt="mainlogo" />
              </a>

              <a
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-light">Sign in</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
