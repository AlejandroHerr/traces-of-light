import React from 'react';

import ImageTypes from '../../propTypes/ImageTypes';

import ResponsiveLayout from '../ResponsiveLayout';

import ImageDetailRenderer from './ImageDetailRenderer';

const ImageDetail = ({ node }) => (
  <ResponsiveLayout>
    {({ clientHeight, clientWidth }) => (
      <ImageDetailRenderer clientHeight={clientHeight} clientWidth={clientWidth} node={node} />
    )}
  </ResponsiveLayout>
);

ImageDetail.propTypes = {
  node: ImageTypes.isRequired,
};

export default ImageDetail;
