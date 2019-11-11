import React from 'react';
import Seo from '../components/Seo';
import HeroHeader from '../components/HeroHeader';
import Clients from '../components/Clients';
import Features from '../components/Features';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HeroHeader />
        <Clients />
        <Features />
      </Layout>
    );
  }
}
