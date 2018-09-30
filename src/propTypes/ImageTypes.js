import PropTypes from 'prop-types';
import ImageSharpTypes from './ImageSharpTypes';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: ImageSharpTypes.isRequired,
});
