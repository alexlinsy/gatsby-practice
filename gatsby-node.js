const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      posts: allContentfulPosts {
        nodes {
          slug
        }
      }
    }
  `);
  const {
    data: {
      posts: { nodes },
    },
  } = result;

  nodes.forEach(post => {
    createPage({
      path: `posts/${post.slug}`,
      component: path.resolve(`src/templates/posts-template.js`),
      context: {
        slug: post.slug,
      },
    });
  });
};
