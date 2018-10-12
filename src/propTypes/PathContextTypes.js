import PropTypes from 'prop-types';

export default node => PropTypes.shape({
  first: PropTypes.bool.isRequired,
  group: PropTypes.arrayOf(node).isRequired,
  index: PropTypes.number.isRequired,
  last: PropTypes.bool.isRequired,
  pageCount: PropTypes.number.isRequired,
  pathPrefix: PropTypes.string.isRequired,
});
