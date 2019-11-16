import React from 'react';

import Layout from '../components/Layout';
import HeroHeader from '../components/HeroHeader';
import Clients from '../components/Clients';
import Features from '../components/Features';
import TestimonialsData from '../components/TestimonialsData';
import NewsLetterSection from '../components/NewsLetterSection';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <HeroHeader />
        <Clients />
        <Features />
        <TestimonialsData />
        <NewsLetterSection />
      </Layout>
    );
  }
}
