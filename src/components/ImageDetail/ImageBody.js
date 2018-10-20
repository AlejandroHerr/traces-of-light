import React from 'react';

import ImageTypes from '../../propTypes/ImageTypes';

import TagList from '../TagList';

import ShareImage from './ShareImage';

import styles from './ImageDetail.module.scss';

const ImageBody = ({ node }) => (
  <div className={styles.imageBody_wrapper}>
    <section className={styles.imageBody_info}>
      <h2 className={styles.imageBody_title}>{node.title}</h2>
      <TagList className={styles.imageBody_tags} tags={node.tags} />
    </section>
    <section className={styles.imageBody_share}>
      <ShareImage slug={node.fields.slug} />
    </section>
  </div>
);

ImageBody.propTypes = {
  node: ImageTypes.isRequired,
};
export default ImageBody;
