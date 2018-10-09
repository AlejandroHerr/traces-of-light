import React from 'react';
import PropTypes from 'prop-types';

import GatsbyLink from 'gatsby-link';
import styles from './Header.module.scss';

const Header = ({ title }) => (
  <header className={styles.header}>
    <div className={styles.header_title_rapper}>
      <GatsbyLink className={styles.header_title_link} to="/">
        <h1 className={styles.header_title}>{title}</h1>
      </GatsbyLink>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
