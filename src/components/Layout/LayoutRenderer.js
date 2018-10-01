import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../Header';

const LayoutRenderer = ({ children, siteMetadata }) => (
  <>
    <Helmet
      title={siteMetadata.title}
      meta={[
        { name: 'description', content: siteMetadata.description },
        { name: 'keywords', content: siteMetadata.keywords },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <div>
      <Header title={siteMetadata.title} />
      {children}
    </div>
  </>
);

LayoutRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  siteMetadata: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
  }).isRequired,
};

export default LayoutRenderer;
