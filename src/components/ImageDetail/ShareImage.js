
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,

  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

import { IMAGE_PREFIX } from '../../constants/paths';
import buildUrl from '../../utils/buildUrl';

import styles from './ImageDetail.module.scss';

const ShareImage = ({ slug }) => (
  <StaticQuery
    query={graphql`
      query ShareImageQuery {
        site {
          siteMetadata {
            canonical
          }
        }
      }
    `}
    render={({ site }) => (
      <>
        <FacebookShareButton
          className={styles.shareImage_button}
          url={buildUrl(site.siteMetadata.canonical, IMAGE_PREFIX, slug)}
        >
          <FacebookIcon
            size={32}
          />
        </FacebookShareButton>
        <WhatsappShareButton
          className={styles.shareImage_button}
          url={buildUrl(site.siteMetadata.canonical, IMAGE_PREFIX, slug)}
        >
          <WhatsappIcon
            size={32}
          />
        </WhatsappShareButton>
        <TwitterShareButton
          className={styles.shareImage_button}
          url={buildUrl(site.siteMetadata.canonical, IMAGE_PREFIX, slug)}
        >
          <TwitterIcon
            size={32}
          />
        </TwitterShareButton>
      </>
    )}
  />
);

ShareImage.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default ShareImage;
