import React from 'react';

import LicenseTypes from '../../propTypes/LicenseTypes';
import { PaginationTypes } from '../../propTypes/PathContextTypes';

import styles from './Footer.module.scss';
import License from './License';
import Pagination from './Pagination';

const Footer = ({ license, pagination }) => (
  <footer className={styles.footer}>
    <section className={styles.footer_license}>
      <License license={license} />
    </section>
    {pagination
      ? (
        <section className={styles.footer_pagination}>
          <Pagination
            first={pagination.first}
            index={pagination.index}
            last={pagination.last}
            pageCount={pagination.pageCount}
            pathPrefix={pagination.pathPrefix}
          />
        </section>
      )
      : null
    }
  </footer>
);

Footer.propTypes = {
  license: LicenseTypes.isRequired,
  pagination: PaginationTypes,
};

Footer.defaultProps = {
  pagination: null,
};

export default Footer;
