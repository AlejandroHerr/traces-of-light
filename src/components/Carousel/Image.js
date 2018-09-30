import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import ImageSharpTypes from '../../propTypes/ImageSharpTypes';

import styles from './Carousel.module.scss';

const Image = ({
  height, title, tags, image: { childImageSharp },
}) => (
  <article className={styles.image}>
    <div className={styles.image_wrapper}>
      <div className={styles.image_info}>
        <h2 className={styles.image_title}>
          {title || tags}
        </h2>
        <div className={styles.image_tags}>
          {(tags && tags.length)
            && tags.map((tag, idx) => ((idx + 1 < tags.length)
              ? <><span key={tag}>{tag}</span>,{' '}</>
              : <span key={tag}>{tag}</span>
            ))
          }
        </div>
      </div>
      <div style={{ height, width: height * childImageSharp.fluid.aspectRatio }}>
        <Img fluid={childImageSharp.fluid} height={height} />
      </div>
    </div>
  </article>
);

Image.propTypes = {
  height: PropTypes.number,
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: ImageSharpTypes.isRequired,
};

Image.defaultProps = {
  height: 0,
  title: '',
  tags: [],
};

export default Image;
