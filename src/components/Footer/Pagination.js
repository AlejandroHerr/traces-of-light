import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Footer.module.scss';

const Pagination = ({
  first, index, last, pageCount,
}) => (
  <nav className="pagination">
    { first
      ? (
        <span
          className={classnames(styles.pagination_nav_placeholder, styles.pagination_nav_previous)}
        >
          {' '}
        </span>
      )
      : (
        <a
          href={(index > 2 && `/${index - 1}`) || '/'}
          className={classnames(styles.pagination_nav_link, styles.pagination_nav_previous)}
        >
          ‹
        </a>
      )
    }
    <span className="page-number">
      {`Page ${index}/${pageCount}`}
    </span>
    { last
      ? (
        <span
          className={classnames(styles.pagination_nav_placeholder, styles.pagination_nav_next)}
        >
          &nbsp;
        </span>
      )
      : <a href={`/${index + 1}`} className={classnames(styles.pagination_nav_link, styles.pagination_nav_next)}>›</a>
    }
  </nav>
);

Pagination.propTypes = {
  first: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  last: PropTypes.bool.isRequired,
  pageCount: PropTypes.number.isRequired,
  // pathPrefix: PropTypes.string.isRequired,
};


export default Pagination;
