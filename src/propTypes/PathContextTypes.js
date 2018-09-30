import PropTypes from 'prop-types';

import { EdgeTypes } from './EdgesTypes';

export default node => PropTypes.shape({
  first: PropTypes.bool.isRequired,
  group: PropTypes.arrayOf(EdgeTypes(node)).isRequired,
  index: PropTypes.number.isRequired,
  last: PropTypes.bool.isRequired,
  pageCount: PropTypes.number.isRequired,
  pathPrefix: PropTypes.string.isRequired,
});
