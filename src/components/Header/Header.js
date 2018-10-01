import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

const Header = ({ title }) => (
  <header className={styles.header}>
    <div className={styles.header_title}>
      <h1>{title}</h1>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
