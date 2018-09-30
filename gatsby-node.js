const createPaginatedPages = require('gatsby-paginate');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return graphql(`
      {
        images: allImagesJson {
          edges {
            node {
              id
              title
              tags
              image {
                childImageSharp {
                  fluid(maxWidth: 1440) {
                    aspectRatio
                    src
                    srcSet
                    sizes
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                  }
                }
              }
            }
          }
        }
      }
    `)
    .then((result) => {
      if (result.errors && result.errors.length) {
        throw result.errors[0];
      }

      return result;
    })
    .then(({ data }) => createPaginatedPages({
      edges: data.images.edges,
      createPage,
      pageTemplate: 'src/templates/GalleryPage.js',
      pageLength: 6,
    }))
    .catch((error) => {
      console.log(error);

      throw error;
    });
};
