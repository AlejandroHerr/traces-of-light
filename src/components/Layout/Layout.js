import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import LayoutRenderer from './LayoutRenderer';

import './Layout.scss';

const Layout = ({ children, image, pathname }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            canonical
          }
        }
      }
    `}
    render={({ site }) => (
      <LayoutRenderer image={image} pathname={pathname} siteMetadata={site.siteMetadata}>
        {children}
      </LayoutRenderer>
    )
    }
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }),
  pathname: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  image: null,
};

export default Layout;
