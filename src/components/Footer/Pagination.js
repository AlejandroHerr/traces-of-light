import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GatsbyLink from 'gatsby-link';
import path from 'path';

import styles from './Footer.module.scss';

const Pagination = ({
  first, index, last, pageCount, pathPrefix,
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
        <GatsbyLink
          className={classnames(styles.pagination_nav_link, styles.pagination_nav_previous)}
          to={path.join('/', pathPrefix, (index > 2 && `${index - 1}`) || '')}
        >
          ‹
        </GatsbyLink>
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
      : (
        <GatsbyLink
          className={classnames(styles.pagination_nav_link, styles.pagination_nav_next)}
          to={path.join('/', pathPrefix, `${index + 1}`)}
        >
          ›
        </GatsbyLink>
      )
    }
  </nav>
);

Pagination.propTypes = {
  first: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  last: PropTypes.bool.isRequired,
  pageCount: PropTypes.number.isRequired,
  pathPrefix: PropTypes.string.isRequired,
};


export default Pagination;
