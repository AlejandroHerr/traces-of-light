import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import slugify from 'slugify';

import { TAG_PREFIX } from '../../constants/paths';
import buildUrl from '../../utils/buildUrl';

const TagLink = ({ tag }) => (
  <GatsbyLink to={buildUrl(TAG_PREFIX, slugify(tag, { lower: true }))}>
    {tag}
  </GatsbyLink>
);

TagLink.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default TagLink;
