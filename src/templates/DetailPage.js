import React from 'react';
// import PropTypes from 'prop-types';

import Layout from '../components/Layout';

import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

import ImageTypes from '../propTypes/ImageTypes';
import PathContextTypes from '../propTypes/PathContextTypes';
import LocationTypes from '../propTypes/LocationTypes';

const GalleryPage = ({
  location: {
    pathname,
  },
  pageContext: {
    group,
    first,
    index,
    last,
    pageCount,
    pathPrefix,
  },
}) => (
  <Layout pathname={pathname} image={group[0].node.image.childImageSharp.resize}>
    <Carousel images={group} />
    <Footer first={first} index={index} last={last} pageCount={pageCount} pathPrefix={pathPrefix} />
  </Layout>
);

GalleryPage.propTypes = {
  location: LocationTypes.isRequired,
  pageContext: PathContextTypes(ImageTypes).isRequired,
};

export default GalleryPage;
