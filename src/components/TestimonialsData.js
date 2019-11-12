import React from 'react';
import styled from 'styled-components';

import Testimonials from './Testimonials';

const Section = styled.div``;

const TestimonialsData = () => (
  <Section className="section is-block is-relative is-light">
    <div className="container">
      <div className="columns is-centered">
        <div className="column">
          <Testimonials
            names="Sarah Kline"
            img="./images/cardimageone.jpeg"
            subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
          />
        </div>
        <div className="column">
          {' '}
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
            img="./images/cardimagethree.jpeg"
            subtext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
          />
        </div>
      </div>
    </div>
  </Section>
);
export default TestimonialsData;
