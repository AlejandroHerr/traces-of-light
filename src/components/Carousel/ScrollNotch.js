import React from 'react';
import PropTypes from 'prop-types';

import styles from './Carousel.module.scss';

const ScrollNotch = ({ viewPortWidth, viewPortOffset }) => (
  <div
    className={styles.scrollNotch}
    style={{ width: `${viewPortWidth}%`, transform: `translate3d(${viewPortOffset}px,0,0)` }}
  />
);

ScrollNotch.propTypes = {
  viewPortWidth: PropTypes.number.isRequired,
  viewPortOffset: PropTypes.number.isRequired,
};

export default ScrollNotch;
