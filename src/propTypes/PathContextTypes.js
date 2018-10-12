import PropTypes from 'prop-types';

const paginationPropTypes = {
  first: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  last: PropTypes.bool.isRequired,
  pageCount: PropTypes.number.isRequired,
  pathPrefix: PropTypes.string.isRequired,
};

export const PaginationTypes = PropTypes.shape({
  first: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  last: PropTypes.bool.isRequired,
  pageCount: PropTypes.number.isRequired,
  pathPrefix: PropTypes.string.isRequired,
});

export default node => PropTypes.shape({
  group: PropTypes.arrayOf(node).isRequired,
  ...paginationPropTypes,
});
