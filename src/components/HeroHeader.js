import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  img {
    background-repeat: no-repeat;
    width: 100%;
  }
  button {
    margin-top: 1rem;
  }
  .image {
    max-width: 570px;
    margin: 0px auto;
  }
`;
const HeroHeader = () => (
  <Section className="section">
    <div className="container">
      <div className="columns is-vcentered is-desktop">
        <div className="column is-5-desktop has-text-centered-touch">
          <h1 className="title is-spaced has-text-weight-bold is-1 is-size-2-mobile">
            Your landing page title here
          </h1>
          <h2 className="subtitle">
            This landing page is perfect for showing off your awesome product
            and driving people to sign up for a paid plan.
          </h2>
          <button className="button is-primary is-medium" type="button">
            Get Started
          </button>
        </div>
        <div className="column">
          <figure className="image">
            <img src="./images/undraw.svg" alt="placeholder" />
          </figure>
        </div>
      </div>
    </div>
  </Section>
);

export default HeroHeader;
