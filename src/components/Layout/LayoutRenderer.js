import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../Header';

const buildUrl = (base, pathname = '') => (!pathname
  ? base
  : `${base}/${pathname.replace(/^\//, '')}`.replace(/\/$/, ''));

const LayoutRenderer = ({
  children, image, pathname, siteMetadata,
}) => (
    <>
      <Helmet
        title={siteMetadata.title}
        meta={[
          { name: 'description', content: siteMetadata.description },
          { name: 'keywords', content: siteMetadata.keywords },
          { name: 'og:url', content: buildUrl(siteMetadata.canonical, pathname) },
          { name: 'og:title', content: siteMetadata.title },
          { name: 'og:description', content: siteMetadata.description },
          { name: 'og:image', content: image && image.src && buildUrl(siteMetadata.canonical, image.src) },
          { name: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:title', content: siteMetadata.title },
          { name: 'twitter:description', content: siteMetadata.description },
          { name: 'twitter:image', content: image && image.src && buildUrl(siteMetadata.canonical, image.src) },
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
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }),
  pathname: PropTypes.string.isRequired,
  siteMetadata: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    canonical: PropTypes.string.isRequired,
  }).isRequired,
};

LayoutRenderer.defaultProps = {
  image: null,
};

export default LayoutRenderer;
