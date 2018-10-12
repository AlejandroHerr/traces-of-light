const createPaginatedPages = require('gatsby-paginate');
const slugify = require('slugify');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
      {
        images: allImagesJson(sort: { fields: id }) {
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
                  resize(width: 1200, height: 620) {
                    src
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
    .then(({ data }) => {
      createPaginatedPages({
        edges: data.images.edges.map(({ node }) => node),
        createPage,
        pageTemplate: 'src/templates/GalleryPage.js',
        pageLength: 6,
      });

      const imagesByTag = data.images.edges.reduce((byTag, { node }) => {
        if (!node.tags && !node.tags.length) {
          return byTag;
        }

        return node.tags.map(slugify).reduce((acc, tag) => {
          if (acc[tag]) {
            return {
              ...acc,
              [tag]: acc[tag].concat(node),
            };
          }

          return {
            ...acc,
            [tag]: [node],
          };
        }, byTag);
      }, {});

      Object.entries(imagesByTag).forEach(([tag, edges]) => {
        createPaginatedPages({
          edges,
          createPage,
          pageTemplate: 'src/templates/GalleryPage.js',
          pageLength: 6,
          pathPrefix: tag,
        });
      });

      return data;
    })
    .catch((error) => {
      console.error(error);

      throw error;
    });
};
