import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .media-content {
    margin-top: auto;
    padding-top: 40px;
    .align {
      display: inline-flex !important;
    }
  }
`;

const Testimonials = props => {
  const { subtext, names, img } = props;
  return (
    <Wrapper>
      <div className="card">
        <div className="card-content has-text-centered ">
          <div className="media align">
            <figure className="image is-96x96">
              <img className="is-rounded" src={img} alt="" />
            </figure>
          </div>
          <div className="content">
            <p>{subtext}</p>
          </div>
          <div className="media-content has-text-centered">
            <p className="has-text-weight-bold">{names}</p>
            <p className="is-size-7">company</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;
