import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

// import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import ImageTypes from '../propTypes/ImageTypes';
// import PathContextTypes from '../propTypes/PathContextTypes';
import LocationTypes from '../propTypes/LocationTypes';
import ImageDetail from '../components/ImageDetail';

const DetailPage = ({
  location: {
    pathname,
  },
  pageContext: {
    node,
  },
}) => (
  <Layout pathname={pathname} image={node.image.childImageSharp.resize}>
    <ImageDetail node={node} />
    <Footer />
  </Layout>
);

DetailPage.propTypes = {
  location: LocationTypes.isRequired,
  pageContext: PropTypes.shape({
    node: ImageTypes.isRequired,
  }).isRequired,
};

export default DetailPage;
