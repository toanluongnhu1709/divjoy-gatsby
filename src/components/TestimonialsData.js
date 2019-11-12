import React from 'react';
import styled from 'styled-components';

import Testimonials from './Testimonials';

const Section = styled.div``;

const TestimonialsData = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <Testimonials title="Chat" subtitle="Imagine" subtext="imdv" />
        </div>
        <div className="column">
          {' '}
          <Testimonials title="Chat" subtitle="Imagine" subtext="imdv" />
        </div>
        <div className="column">
          {' '}
          <Testimonials title="Chat" subtitle="Imagine" subtext="imdv" />
        </div>
      </div>
    </div>
  </Section>
);
export default TestimonialsData;
