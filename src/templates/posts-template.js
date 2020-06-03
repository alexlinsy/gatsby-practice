import React from "react";
import Layouts from "../components/Layouts";
import Img from "gatsby-image";

const postTemplates = props => {
  const {
    posts: {
      title,
      description: { description },
      image,
    },
  } = props.data;
  console.log(props);
  return (
    <Layouts>
      <div>
        <h3>{title}</h3>
        <Img fluid={image.fluid} />
        <p>{description}</p>
      </div>
    </Layouts>
  );
};

export default postTemplates;

export const query = graphql`
  query GetPosts($slug: String) {
    posts: contentfulPosts(slug: { eq: $slug }) {
      title
      description {
        description
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      slug
    }
  }
`;
