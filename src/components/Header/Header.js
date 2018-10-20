import React from 'react';
import PropTypes from 'prop-types';

import GatsbyLink from 'gatsby-link';
import styles from './Header.module.scss';

const Header = ({ title }) => (
  <header className={styles.header}>
    <section className={styles.header_title_wrapper}>
      <GatsbyLink className={styles.header_title_link} to="/">
        <h1 className={styles.header_title}>{title}</h1>
      </GatsbyLink>
    </section>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
