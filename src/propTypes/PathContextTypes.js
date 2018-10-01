import PropTypes from 'prop-types';

import { EdgeTypes } from './EdgesTypes';

export default node => PropTypes.shape({
  additionalContext: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  first: PropTypes.bool.isRequired,
  group: PropTypes.arrayOf(EdgeTypes(node)).isRequired,
  index: PropTypes.number.isRequired,
  last: PropTypes.bool.isRequired,
  pageCount: PropTypes.number.isRequired,
  pathPrefix: PropTypes.string.isRequired,
});
