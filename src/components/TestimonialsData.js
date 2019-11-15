import React from 'react';
import styled from 'styled-components';

import Testimonials from './Testimonials';

const Section = styled.div`
  background-color: ${props => props.theme.lightAccent};
  padding: 6rem 1.5rem;
`;

const TestimonialsData = () => (
  <Section className="section">
    <div className="container">
      <h1 className="title  has-text-centered is-spaced has-text-weight-bold is-3 main-text">
        Here s what people are saying
      </h1>
      <div className="columns">
        <div className="column">
          <Testimonials
            names="Sarah Kline"
            img="./images/cardimagetwo.jpeg"
            subtext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
            company="company"
          />
        </div>
        <div className="column">
          {' '}
          <Testimonials
            names="Sarah Kline"
            img="./images/cardimageone.jpeg"
            subtext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
            company="company"
          />
        </div>
        <div className="column">
          {' '}
          <Testimonials
            names="Sarah Kline"
            img="./images/cardimagethree.jpeg"
            subtext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
            company="company"
          />
        </div>
      </div>
    </div>
  </Section>
);
export default TestimonialsData;
