const createPaginatedPages = require('gatsby-paginate');
const slugify = require('slugify');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
      {
        site {
          siteMetadata {
            title
          }
        }
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
      const { title } = data.site.siteMetadata;

      createPaginatedPages({
        edges: data.images.edges,
        createPage,
        pageTemplate: 'src/templates/GalleryPage.js',
        pageLength: 6,
        context: {
          title,
        },
      });

      const imagesByTag = data.images.edges.reduce((byTag, edge) => {
        const { node: image } = edge;

        if (!image.tags && !image.tags.length) {
          return byTag;
        }

        return image.tags.map(slugify).reduce((acc, tag) => {
          if (acc[tag]) {
            return {
              ...acc,
              [tag]: acc[tag].concat(edge),
            };
          }

          return {
            ...acc,
            [tag]: [edge],
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
          context: {
            title,
          },
        });
      });

      return data;
    })
    .catch((error) => {
      console.error(error);

      throw error;
    });
};
