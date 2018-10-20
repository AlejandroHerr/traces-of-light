import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';

import ImageTypes from '../../propTypes/ImageTypes';

import ImageFooter from './ImageBody';

import styles from './ImageDetail.module.scss';

const FOOTER_HEIGHT = 100;

const findDimensions = (clientHeight, clientWidth, aspectRatio) => {
  const effectiveClientHeight = clientHeight - FOOTER_HEIGHT;
  const wrapperAspectRatio = clientWidth / effectiveClientHeight;

  if (wrapperAspectRatio >= aspectRatio) {
    return {
      paddingTop: 0,
      width: `${100 * effectiveClientHeight * aspectRatio / clientWidth}%`,
    };
  }

  return {
    width: '100%',
    paddingTop: `${(effectiveClientHeight - clientWidth / aspectRatio) / 2}px`,
  };
};

const ImageDetailRenderer = ({ clientHeight, clientWidth, node }) => {
  const { aspectRatio } = node.image.childImageSharp.fluid;

  const { paddingTop, width } = findDimensions(clientHeight, clientWidth, aspectRatio);

  return (
    <article style={{
      height: '100%',
      margin: '0 auto',
      paddingTop,
      width,
    }}
    >
      <section className={styles.imageDetail_image_container}>
        <GatsbyImage fluid={node.image.childImageSharp.fluid} />
      </section>
      <section style={{ height: `${FOOTER_HEIGHT}px` }}>
        <ImageFooter node={node} />
      </section>
    </article>
  );
};

ImageDetailRenderer.propTypes = {
  clientHeight: PropTypes.number.isRequired,
  clientWidth: PropTypes.number.isRequired,
  node: ImageTypes.isRequired,
};

export default ImageDetailRenderer;
