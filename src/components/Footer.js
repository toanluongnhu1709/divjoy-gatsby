import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.div`
  background-color: ${props => props.theme.lightAccent};
  padding: 3rem 1.5rem;

  .FooterComponent {
    &__container {
      display: flex;
      flex-wrap: wrap;
      div {
        display: flex;
        flex: none;
        justify-content: center;
        width: 100%;
        margin-bottom: 24px;
      }

      .brand {
        img {
          display: block;
          height: 32px;
        }
      }

      .social {
        align-items: flex-end;
      }

      .social,
      .links {
        a {
          color: inherit;
          &:hover {
            opacity: 0.8;
          }

          &:not(:first-of-type) {
            margin-left: 20px;
          }
        }
      }

      // Tablet and up
      @media screen and (min-width: 769px) {
        > div {
          flex: 50%;
        }

        .left {
          justify-content: flex-start;
        }

        .right {
          justify-content: flex-end;
        }
        .links {
          order: 1;
        }
      }
    }
  }
`;

const Footer = () => (
  <Section>
    <div className="FooterComponent__container container">
      <div className="brand left">
        <Link to="/">
          <img src="./images/logo-1024.png" alt="mainlogo" />
        </Link>
      </div>
      <div className="links right">
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
        <a target="_blank" href="https://medium.com" rel="noopener noreferrer">
          Blog
        </a>
      </div>
      <div className="social right">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <i className="fab fa-twitter" />
          </span>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer">
          <span className="icon">
            <i className="fab fa-facebook-f" />
          </span>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer">
          <span className="icon">
            <i className="fab fa-instagram" />
          </span>
        </a>
      </div>
      <div className="copyright left">© 2019 Company</div>
    </div>
  </Section>
);

export default Footer;
