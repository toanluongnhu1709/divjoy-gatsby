import React from 'react';

const Testimonials = props => {
  const { subtext, Img, names } = props;
  return (
    <div className="card">
      <div className="card-content has-text-centered">
        <div className="media">
          <figure className="image is-96x96">
            <img className="is-rounded" src={Img} alt="" />
          </figure>
        </div>
        <div className="content">{subtext}</div>
        <div className="media-content has-text-centered">
          <p className="has-text-weight-bold">{names}</p>
          <p className="is-size-7">company</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
