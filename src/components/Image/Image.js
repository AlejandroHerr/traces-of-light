import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';
import GatsbyLink from 'gatsby-link';
import slugify from 'slugify';

import ImageSharpTypes from '../../propTypes/ImageSharpTypes';

import styles from './Image.module.scss';

const TagLink = ({ tag }) => (
  <GatsbyLink className={styles.image_tagLink} to={slugify(tag)}>
    {tag}
  </GatsbyLink>
);
TagLink.propTypes = {
  tag: PropTypes.string.isRequired,
};
const Tag = ({ tag, last }) => (last
  ? (
    <>
      <TagLink tag={tag} />
      {', '}
    </>
  )
  : <TagLink tag={tag} />
);
Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
};

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
            && tags.map((tag, idx) => <Tag key={tag} tag={tag} last={(idx + 1) < tags.length} />)
          }
        </div>
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
