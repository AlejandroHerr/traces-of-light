import React from 'react';

import Pagination from './Pagination';

import styles from './Footer.module.scss';
import License from './License';
import { PaginationTypes } from '../../propTypes/PathContextTypes';

const Footer = ({ pagination }) => (
  <footer className={styles.footer}>
    <div className={styles.footer_license}>
      <License />
    </div>
    {pagination
      ? (
        <div className={styles.footer_pagination}>
          <Pagination
            first={pagination.first}
            index={pagination.index}
            last={pagination.last}
            pageCount={pagination.pageCount}
            pathPrefix={pagination.pathPrefix}
          />
        </div>
      )
      : null
    }
  </footer>
);

Footer.propTypes = {
  pagination: PaginationTypes,
};

Footer.defaultProps = {
  pagination: null,
};

export default Footer;
