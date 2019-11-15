import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  padding: 6rem 1.5rem;
`;
const NewsLetterSection = () => (
  <Section className="section is-block is-relative">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-12 is-10-fullhd">
          <div className="columns is-vcentered">
            <div className="column is-half">
              <div className="title">Stay in the know</div>
              <div className="subtitle">
                Receive our latest articles and feature updates
              </div>
            </div>
            <div className="column is-half">
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    className="input is-medium"
                    type="email"
                    placeholder="Enter your email"
                  />
                </p>
                <p className="control">
                  <a className="button is-primary is-medium">Subscribe</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default NewsLetterSection;
