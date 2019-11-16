import React from 'react';
import styled from 'styled-components';

import FeaturesData from './FeaturesData';

const Section = styled.div`
  .flexing {
    display: flex;
    flex-direction: column;
  }
  .chatting {
    max-width: 570px;
    margin: 0px auto;
  }
`;

const FeaturesContent = () => (
  <Section className="columns">
    <div className="column is-2">
      <div className="columns flexing">
        <div className="column has-text-right-desktop">
          <div classNmae="">
            <FeaturesData
              className=""
              icons="fas fa-comments"
              title="Chat"
              subtitle="Imagine a world where you can chat."
              iconcolor="icon
                  is-size-1
                  has-text-primary"
            />
          </div>
        </div>
        <div className="column has-text-right-desktop">
          <div classNmae="">
            <FeaturesData
              className=""
              icons="fas fa-gamepad"
              title="Chat"
              subtitle="Imagine a world where you can chat."
              iconcolor="icon
                  is-size-1
                  has-text-danger"
            />
          </div>
        </div>
        <div className="column has-text-right-desktop">
          <div classNmae="">
            <FeaturesData
              className=""
              icons="fas fa-gamepad"
              title="Chat"
              subtitle="Imagine a world where you can chat."
              iconcolor="icon
                  is-size-1
                  has-text-info"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      {' '}
      <div className="columns">
        <div className="column">
          <figure className="image chatting">
            <img src="./images/chatting.svg" alt="chattingimage" />
          </figure>
        </div>
      </div>
    </div>
    <div className="column is-2">
      {' '}
      <div className="columns flexing">
        <div className="column has-text-left-desktop">
          <div classNmae="">
            <FeaturesData
              className=""
              icons="fas fa-lemon"
              title="Chat"
              subtitle="Imagine a world where you can chat."
              iconcolor="icon
                  is-size-1
                  has-text-warning"
            />
          </div>
        </div>
        <div className="column has-text-left-desktop">
          <div classNmae="">
            <FeaturesData
              className=""
              icons="fas fa-birthday-cake"
              title="Chat"
              subtitle="Imagine a world where you can chat."
              iconcolor="icon
                  is-size-1
                  has-text-primary"
            />
          </div>
        </div>
        <div className="column has-text-left-desktop">
          <div classNmae="">
            <FeaturesData
              className=""
              icons="fas fa-hand-holding-heart"
              title="Chat"
              subtitle="Imagine a world where you can chat."
              iconcolor="icon
                  is-size-1
                  has-text-danger"
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
);
export default FeaturesContent;
