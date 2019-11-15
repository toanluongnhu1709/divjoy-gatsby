import React from 'react';

import HeroHeader from '../components/HeroHeader';
import Clients from '../components/Clients';
import Features from '../components/Features';
import FeaturesContent from '../components/FeaturesContent';
import TestimonialsData from '../components/TestimonialsData';
import NewsLetterSection from '../components/NewsLetterSection';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <HeroHeader />
        <Clients />
        <Features />
        <FeaturesContent />
        <TestimonialsData />
        <NewsLetterSection />
        <Footer />
      </Layout>
    );
  }
}
