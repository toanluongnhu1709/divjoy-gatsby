import React from 'react';
import styled from 'styled-components';

import Testimonials from './Testimonials';

const Section = styled.div`
  background-color: #f5f5f5;
`;

const TestimonialsData = () => (
  <Section className="section">
    <div className="container">
      <h6 className="title  has-text-centered is-spaced has-text-weight-bold is-3">
        Here s what people are saying
      </h6>
      <div className="columns">
        <div className="column">
          <Testimonials
            names="Sarah Kline"
            img="./images/cardimagetwo.jpeg"
            subtext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
          />
        </div>
        <div className="column">
          {' '}
          <Testimonials
            names="Sarah Kline"
            img="./images/cardimageone.jpeg"
            subtext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
          />
        </div>
        <div className="column">
          {' '}
          <Testimonials
            names="Sarah Kline"
            img="./images/cardimagethree.jpeg"
            subtext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
          />
        </div>
      </div>
    </div>
  </Section>
);
export default TestimonialsData;
