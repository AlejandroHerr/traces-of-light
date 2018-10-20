import React from 'react';

import styles from './Footer.module.scss';

const License = () => (
  <div>
    <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
      <img
        alt="Creative Commons License BY-SA"
        className={styles.license_image}
        src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-sa.svg"
      />
    </a>
      by
    {' '}
    <span className={styles.license_author}>Alejandro Hernández</span>
  </div>
);

export default License;
