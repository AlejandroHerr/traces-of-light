import React from 'react';
import PropTypes from 'prop-types';

import ImageTypes from '../../propTypes/ImageTypes';

import ScrollBar from './ScrollBar';
import Image from '../Image';

import styles from './Carousel.module.scss';

const CarouselRenderer = ({
  images,
  height,
  width,
  innerWidth,
  viewPortWidth,
  viewPortOffset,
  setRef,
  onMouseScrollStart,
  onTouchScrollStart,
  onWheelScroll,

}) => (
  <div
    className={styles.carousel_wrapper}
    ref={setRef}
    onTouchStart={onTouchScrollStart}
    onWheel={onWheelScroll}
  >
    <div
      className={styles.carousel_inner}
      style={{
        width: (innerWidth && `${innerWidth}px`) || '100%',
        transform: `translate3d(-${viewPortOffset}%,0,0)`,
      }}
    >
      {images.map(node => (
        <Image
          key={node.id}
          height={height}
          title={node.title}
          tags={node.tags}
          image={node.image}
        />
      ))}
    </div>
    <ScrollBar
      viewPortWidth={viewPortWidth}
      viewPortOffset={viewPortOffset * width / 100}
      onScrollStart={onMouseScrollStart}
    />
  </div>
);

CarouselRenderer.propTypes = {
  images: PropTypes.arrayOf(ImageTypes).isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  innerWidth: PropTypes.number.isRequired,
  viewPortWidth: PropTypes.number.isRequired,
  viewPortOffset: PropTypes.number.isRequired,
  setRef: PropTypes.func.isRequired,
  onMouseScrollStart: PropTypes.func.isRequired,
  onTouchScrollStart: PropTypes.func.isRequired,
  onWheelScroll: PropTypes.func.isRequired,
};

export default CarouselRenderer;
