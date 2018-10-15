import React from 'react';
import PropTypes from 'prop-types';

import Tag from './Tag';

const TagList = ({ className, tags }) => (
  <div className={className}>
    {tags.map((tag, idx) => <Tag key={tag} tag={tag} last={(idx + 1) < tags.length} />)}
  </div>

);

TagList.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

TagList.defaultProps = {
  className: '',
  tags: [],
};

export default TagList;
