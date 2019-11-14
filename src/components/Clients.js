import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-color: ${props => props.theme.lightAccent};
  .image {
    width: 150px;
  }
  .thirdlogo {
    width: 90px;
  }
  .fourthlogo {
    width: 135px;
  }
`;

const Clients = () => (
  <Section className="section">
    <div className="container">
      <div className="columns is-centered is-multiline">
        <div className="column is-narrow has-text-centered">
          <div className="clients">
            <figure className="image">
              <img src="./images/instagram.svg" alt="instagramlogo" />
            </figure>
          </div>
        </div>
        <div className="column is-narrow has-text-centered">
          <div className="clients">
            <figure className="image fourthlogo">
              <img src="./images/slack.svg" alt="slacklogo" />
            </figure>
          </div>
        </div>
        <div className="column is-narrow has-text-centered">
          <div className="clients">
            <figure className="image thirdlogo">
              <img src="./images/tinder.svg" alt="tinderlogo" />
            </figure>
          </div>
        </div>
        <div className="column is-narrow has-text-centered">
          <div className="clients">
            <figure className="image fourthlogo">
              <img src="./images/spotify.svg" alt="spotifylogo" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Clients;
