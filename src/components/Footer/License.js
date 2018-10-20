import React from 'react';

import LicenseTypes from '../../propTypes/LicenseTypes';

import styles from './Footer.module.scss';

const License = ({ license }) => (
  <div>
    <a rel="license" href={`http://creativecommons.org/licenses/${license.license.toLowerCase()}/4.0/`}>
      <img
        alt={`Creative Commons License ${license.license.toUpperCase()}`}
        className={styles.license_image}
        src={`https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/${license.license.toLowerCase()}.svg`}
      />
    </a>
    <span className={styles.license_author}>{license.licenseBy}</span>
  </div>
);

License.propTypes = {
  license: LicenseTypes.isRequired,
};

export default License;
