import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { PaginationTypes } from '../../propTypes/PathContextTypes';

import Footer from './Footer';

const FooterContainer = ({ pagination }) => (
  <StaticQuery
    query={graphql`
      query FooterContainerQuery {
        site {
          siteMetadata {
            license
            licenseBy
          }
        }
      }
    `}
    render={({ site }) => (
      <Footer
        license={{ license: site.siteMetadata.license, licenseBy: site.siteMetadata.licenseBy }}
        pagination={pagination}
      />
    )}
  />
);

FooterContainer.propTypes = {
  pagination: PaginationTypes,
};

FooterContainer.defaultProps = {
  pagination: null,
};

export default FooterContainer;
