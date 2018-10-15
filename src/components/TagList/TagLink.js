import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import slugify from 'slugify';


const TagLink = ({ tag }) => (
  <GatsbyLink to={slugify(tag, { lower: true })}>
    {tag}
  </GatsbyLink>
);

TagLink.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default TagLink;
