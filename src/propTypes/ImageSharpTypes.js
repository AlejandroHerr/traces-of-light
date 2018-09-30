import PropTypes from 'prop-types';

export const ImageSharpFluidTypes = PropTypes.shape({
  aspectRatio: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  base64: PropTypes.string,
  tracedSVG: PropTypes.string,
  srcWebp: PropTypes.string,
  srcSetWebp: PropTypes.string,
});

export default PropTypes.shape({
  childImageSharp: PropTypes.shape({
    fluid: ImageSharpFluidTypes.isRequired,
  }).isRequired,
});
