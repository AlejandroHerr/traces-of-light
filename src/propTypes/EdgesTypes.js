import PropTypes from 'prop-types';

export const EdgeTypes = node => PropTypes.shape({
  node,
});

export default node => PropTypes.shape({
  edges: PropTypes.arrayOf(EdgeTypes(node)).isRequired,
});
