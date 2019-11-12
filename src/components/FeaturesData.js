import React from 'react';

const FeaturesData = props => {
  const { icons, title, subtitle, iconcolor } = props;
  return (
    <div>
      <div className="features">
        <span className={iconcolor}>
          <i className={icons} />
        </span>
      </div>
      <h1 className="title has-text-weight-bold is-spaced is-5">{title}</h1>
      <p className="subtitle is-6 has-text-grey">{subtitle}</p>
    </div>
  );
};

export default FeaturesData;
