import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  img {
    max-width: 300px;
    margin: 30px auto;
  }
`;

const FeaturesData = props => {
  const { title, subtitle, img, Image, text, subtext } = props;
  return (
    <Wrapper>
      <div className="columns is-variable is-8 is-vcentered has-text-centered-mobile">
        <div className="column is-half">
          <h1 className="title has-text-weight-bold is-spaced is-3">{title}</h1>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className="column">
          <figure className="image">
            <img src={img} alt="first-feature" />
          </figure>
        </div>
        <div className="column">
          <figure className="image">
            <img src={Image} alt="second-feature" />
          </figure>
        </div>
        <div className="column is-half">
          <h1 className="title has-text-weight-bold is-spaced is-3">{text}</h1>
          <p className="subtitle">{subtext}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default FeaturesData;
