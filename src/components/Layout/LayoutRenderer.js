import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import buildUrl from '../../utils/buildUrl';

import Header from '../Header';

const LayoutRenderer = ({
  children, image, pathname, siteMetadata,
}) => (
  <>
    <Helmet
      link={[{ rel: 'canonical', href: buildUrl(siteMetadata.canonical, pathname) }]}
      meta={[
        { name: 'description', content: siteMetadata.description },
        { name: 'keywords', content: siteMetadata.keywords },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: siteMetadata.title },
        { name: 'twitter:description', content: siteMetadata.description },
        { name: 'twitter:image', content: image && image.src && buildUrl(siteMetadata.canonical, image.src) },
      ]}
      title={siteMetadata.title}
    >
      <meta property="og:url" content={buildUrl(siteMetadata.canonical, pathname)} />
      <meta property="og:title" content="Traces of Light" />
      <meta property="og:description" content="Photographic portofolio of Alejandro Herr" />
      <meta property="og:image" content={image && image.src && buildUrl(siteMetadata.canonical, image.src)} />
      <meta property="og:type" content="website" />
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
  pathname: PropTypes.string,
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
  pathname: '',
};

export default LayoutRenderer;
