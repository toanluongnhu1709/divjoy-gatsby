import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
`;

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <Container className="container">
        <h1 className="title">NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </section>
  </Layout>
);

export default NotFoundPage;
