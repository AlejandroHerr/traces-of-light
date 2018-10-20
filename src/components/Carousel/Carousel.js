/* global window,document */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ImageTypes from '../../propTypes/ImageTypes';

import CarouselRenderer from './CarouselRenderer';

const TOUCH_THROTTLE = 8;

const calculateDimensions = (wrapper, images) => {
  const { clientHeight, clientWidth } = wrapper;

  const widthFactor = images.reduce(
    (sum, node) => node.image.childImageSharp.fluid.aspectRatio + sum,
    0,
  );
  const innerWidth = widthFactor * (clientHeight) + (images.length - 1) * 10 + 1;

  const viewPortWidth = 100 * clientWidth / innerWidth;

  return {
    height: clientHeight,
    width: clientWidth,
    innerWidth,
    viewPortWidth,
  };
};

const calculateViewPortOffset = ({
  delta = 0, width, viewPortWidth, viewPortOffset,
}) => {
  const deltaPercentage = 100 * delta / width;

  return Math.max(Math.min(viewPortOffset + deltaPercentage, 100 - viewPortWidth), 0);
};

export default class Carrousel extends PureComponent {
  state = {
    height: 0,
    width: 0,
    innerWidth: 0,

    viewPortWidth: 0,
    viewPortOffset: 0,

    isScrolling: false,
    lastClickX: 0,
    lastTouchX: 0,
  };

  wrapper = null;

  componentDidMount() {
    window.addEventListener('resize', this.onResize);

    document.addEventListener('mousemove', this.onMouseScroll);
    document.addEventListener('mouseup', this.onMouseScrollEnd);

    window.addEventListener('touchmove', this.onTouchScroll);
    window.addEventListener('touchend', this.onTouchScrollEnd);

    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);

    document.removeEventListener('mousemove', this.onMouseScroll);
    document.removeEventListener('mouseup', this.onMouseScrollEnd);

    window.removeEventListener('touchmove', this.onTouchScroll);
    window.removeEventListener('touchend', this.onTouchScrollEnd);
  }

  setWrapperRef = (ref) => {
    this.wrapper = ref;
  }

  onResize = () => {
    if (this.wrapper) {
      const { images } = this.props;
      const {
        height, width, innerWidth, viewPortWidth,
      } = calculateDimensions(this.wrapper, images);

      this.setState(state => ({
        ...state,
        height,
        width,
        innerWidth,

        viewPortWidth,
        viewPortOffset: calculateViewPortOffset({
          width,
          viewPortWidth,
          viewPortOffset: state.viewPortOffset,
        }),
      }));
    }
  }

  onMouseScrollStart = (event) => {
    const { clientX } = event;

    this.setState(state => ({
      ...state,
      isScrolling: true,
      lastClickX: clientX,
    }));
  }

  onMouseScroll = (event) => {
    const { clientX } = event;
    const {
      isScrolling, lastClickX, width, viewPortWidth, viewPortOffset,
    } = this.state;

    if (isScrolling) {
      this.setState(state => ({
        ...state,
        lastClickX: clientX,
        viewPortOffset: calculateViewPortOffset({
          delta: clientX - lastClickX,
          width,
          viewPortWidth,
          viewPortOffset,
        }),
      }));
    }
  }

  onMouseScrollEnd = (event) => {
    const { clientX } = event;
    const {
      isScrolling, lastClickX, width, viewPortWidth, viewPortOffset,
    } = this.state;

    if (isScrolling) {
      this.setState(state => ({
        ...state,
        isScrolling: false,
        lastClickX: clientX,
        viewPortOffset: calculateViewPortOffset({
          delta: clientX - lastClickX,
          width,
          viewPortWidth,
          viewPortOffset,
        }),
      }));
    }
  }

  onTouchScrollStart = (event) => {
    const { changedTouches } = event;
    const { pageX } = changedTouches[0];


    this.setState(state => ({
      ...state,
      isScrolling: true,
      lastTouchX: pageX,
    }));
  }

  onTouchScroll = (event) => {
    const { changedTouches } = event;
    const { pageX } = changedTouches[0];

    const {
      isScrolling, lastTouchX, width, viewPortWidth, viewPortOffset,
    } = this.state;

    if (isScrolling) {
      this.setState(state => ({
        ...state,
        lastTouchX: pageX,
        viewPortOffset: calculateViewPortOffset({
          delta: -(pageX - lastTouchX) / TOUCH_THROTTLE,
          width,
          viewPortWidth,
          viewPortOffset,
        }),
      }));
    }
  }

  onTouchScrollEnd = (event) => {
    const { changedTouches } = event;
    const { pageX } = changedTouches[0];

    const {
      isScrolling, lastTouchX, width, viewPortWidth, viewPortOffset,
    } = this.state;

    if (isScrolling) {
      this.setState(state => ({
        ...state,
        isScrolling: false,
        lastTouchX: pageX,
        viewPortOffset: calculateViewPortOffset({
          delta: -(pageX - lastTouchX) / TOUCH_THROTTLE,
          width,
          viewPortWidth,
          viewPortOffset,
        }),
      }));
    }
  }

  onWheelScroll = (event) => {
    event.preventDefault();
    const { deltaX } = event;
    const { width, viewPortWidth, viewPortOffset } = this.state;

    this.setState(state => ({
      ...state,
      viewPortOffset: calculateViewPortOffset({
        delta: deltaX / 2,
        width,
        viewPortWidth,
        viewPortOffset,
      }),
    }));
  }

  render() {
    const { images } = this.props;
    const {
      height, viewPortWidth, width,
      innerWidth,
      viewPortOffset,
    } = this.state;

    return (
      <CarouselRenderer
        images={images}
        height={height}
        width={width}
        innerWidth={innerWidth}
        viewPortWidth={viewPortWidth}
        viewPortOffset={viewPortOffset}
        setRef={this.setWrapperRef}
        onMouseScrollStart={this.onMouseScrollStart}
        onTouchScrollStart={this.onTouchScrollStart}
        onWheelScroll={this.onWheelScroll}
      />
    );
  }
}

Carrousel.propTypes = {
  images: PropTypes.arrayOf(ImageTypes).isRequired,
};
