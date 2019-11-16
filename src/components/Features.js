import React from 'react';
import styled from 'styled-components';

import FeaturesContent from './FeaturesContent';

const Section = styled.div`
  p {
    max-width: 700px;
    display: inline-block;
  }
`;

const Features = () => (
  <Section className="section">
    <div className="container">
      <div className="has-text-centered	">
        <h1 className="title is-spaced has-text-weight-bold is-3">Features</h1>
        <p clasNames="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
      </div>
      <FeaturesContent />
    </div>
  </Section>
);

export default Features;
