import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';
import GatsbyLink from 'gatsby-link';
import slugify from 'slugify';

import { IMAGE_PREFIX } from '../../constants/paths';
import ImageSharpTypes from '../../propTypes/ImageSharpTypes';
import buildUrl from '../../utils/buildUrl';

import TagList from '../TagList';

import styles from './Image.module.scss';

const Image = ({
  height, title, tags, image: { childImageSharp },
}) => (
  <article className={styles.image}>
    <div className={styles.image_wrapper}>
      <div className={styles.image_info}>
        <GatsbyLink to={buildUrl(IMAGE_PREFIX, slugify(title, { lower: true }))}>
          <h2 className={styles.image_title}>
            {title}
          </h2>
        </GatsbyLink>
        <TagList className={styles.image_tagList} tags={tags} />
      </div>
      <div style={{ height, width: height * childImageSharp.fluid.aspectRatio }}>
        <GatsbyImage fluid={childImageSharp.fluid} height={height} />
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
