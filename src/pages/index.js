import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Carousel from '../components/Carousel';

import EdgesTypes from '../propTypes/EdgesTypes';
import ImageTypes from '../propTypes/ImageTypes';

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Traces of light</h1>
    <Carousel images={data.images.edges} />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    images: EdgesTypes(ImageTypes),
  }).isRequired,
};

export default IndexPage;

export const query = graphql`{
  images: allImagesJson {
    edges {
      node {
        id
        title
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
}`;
