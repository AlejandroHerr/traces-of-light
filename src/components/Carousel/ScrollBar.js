import React from 'react';
import PropTypes from 'prop-types';

import ScrollNotch from './ScrollNotch';

import styles from './Carousel.module.scss';

const ScrollBar = ({
  viewPortWidth, viewPortOffset, onScrollStart,
}) => (
  <div
    role="link"
    tabIndex="-1"
    className={styles.scrollBar}
    onMouseDown={onScrollStart}
  >
    { viewPortWidth < 100
      && <ScrollNotch viewPortWidth={viewPortWidth} viewPortOffset={viewPortOffset} /> }
  </div>
);

ScrollBar.propTypes = {
  viewPortWidth: PropTypes.number.isRequired,
  viewPortOffset: PropTypes.number.isRequired,
  onScrollStart: PropTypes.func.isRequired,
};


export default ScrollBar;
