import React from 'react';
import PropTypes from 'prop-types';

import Pagination from './Pagination';

import styles from './Footer.module.scss';
import License from './License';

const Footer = ({
  first, index, last, pageCount,
}) => (
  <footer className={styles.footer}>
    <div className={styles.footer_license}>
      <License />
    </div>
    <div className={styles.footer_pagination}>
      <Pagination first={first} index={index} last={last} pageCount={pageCount} />
    </div>
  </footer>
);

Footer.propTypes = {
  first: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  last: PropTypes.bool.isRequired,
  pageCount: PropTypes.number.isRequired,
  // pathPrefix: PropTypes.string.isRequired,
};


export default Footer;
