/* global window */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './ResponsiveLayout.module.scss';

export default class ResponsiveLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  state = {
    clientHeight: 0,
    clientWidth: 0,
  };

  wrapper = null;

  componentDidMount() {
    window.addEventListener('resize', this.onResize);

    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  setWrapperRef = (ref) => {
    this.wrapper = ref;
  }

  onResize = () => {
    if (this.wrapper) {
      const { clientHeight, clientWidth } = this.wrapper;

      this.setState({ clientHeight, clientWidth });
    }
  }

  render() {
    const { children } = this.props;
    const { clientHeight, clientWidth } = this.state;

    return (
      <main className={styles.responsiveLayout} ref={this.setWrapperRef}>
        {children({ clientHeight, clientWidth })}
      </main>

    );
  }
}
