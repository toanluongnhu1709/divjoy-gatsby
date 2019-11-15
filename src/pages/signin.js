import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const Wrapper = styled.div`
  h1 {
    margin-bottom: 3rem;
  }
  a {
    font-size: 0.9rem;
    margin: 0px 0.5rem;
  }
`;

export default () => (
  <Wrapper>
    <Header />
    <section className="section is-block is-relative is-white is-medium">
      <div className="container">
        <div className="has-text-centered">
          <h1 className="title is-spaced has-text-weight-bold is-3">
            Welcome back
          </h1>
        </div>
        <div className="columns is-mobile is-centered">
          <div className="column is-two-fifths">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input is-medium"
                  type="email"
                  placeholder="Email"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input is-medium"
                  type="password"
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-primary is-medium is-normal is-fullwidth">
                  Login
                </button>
              </p>
              <div className="has-text-centered forgot">
                <a href="/">Create an account</a>
                <a href="/">Forgot password</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);
