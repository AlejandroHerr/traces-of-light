import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import LayoutRenderer from './LayoutRenderer';

import './Layout.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={({ site }) => (
      <LayoutRenderer siteMetadata={site.siteMetadata}>
        {children}
      </LayoutRenderer>
    )
    }
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
