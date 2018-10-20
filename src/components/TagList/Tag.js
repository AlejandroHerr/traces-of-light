import React from 'react';
import PropTypes from 'prop-types';

import TagLink from './TagLink';

const Tag = ({ tag, last }) => (last
  ? (
    <>
      <TagLink tag={tag} />
      {', '}
    </>
  )
  : <TagLink tag={tag} />
);

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
};

export default Tag;
