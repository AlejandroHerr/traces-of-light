import React from 'react';
// import PropTypes from 'prop-types';

import Layout from '../components/layout';

import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Header from '../components/Header';

import ImageTypes from '../propTypes/ImageTypes';
import PathContextTypes from '../propTypes/PathContextTypes';

const GalleryPage = ({
  pageContext: {
    additionalContext: {
      title,
    },
    group,
    first,
    index,
    last,
    pageCount,
    pathPrefix,
  },
}) => (
  <Layout>
    <Header title={title} />
    <Carousel images={group} />
    <Footer first={first} index={index} last={last} pageCount={pageCount} pathPrefix={pathPrefix} />
  </Layout>
);

GalleryPage.propTypes = {
  pageContext: PathContextTypes(ImageTypes).isRequired,
};

export default GalleryPage;
