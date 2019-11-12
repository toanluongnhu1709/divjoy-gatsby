import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Testimonials = props => {
  const { title, subtitle, subtext } = props;
  return (
    <Wrapper>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{subtitle}</p>
            </div>
          </div>

          <div className="content">{subtext}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;
