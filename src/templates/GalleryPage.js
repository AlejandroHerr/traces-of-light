import React from 'react';
// import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

import ImageTypes from '../propTypes/ImageTypes';
import PathContextTypes from '../propTypes/PathContextTypes';

const GalleryPage = ({
  pathContext: {
    group,
    first,
    index,
    last,
    pageCount,
    pathPrefix,
  },
}) => (
  <Layout>
    <h1>Traces of light</h1>
    <Carousel images={group} />
    <Footer first={first} index={index} last={last} pageCount={pageCount} pathPrefix={pathPrefix} />
  </Layout>
);

GalleryPage.propTypes = {
  pathContext: PathContextTypes(ImageTypes).isRequired,
};

export default GalleryPage;
