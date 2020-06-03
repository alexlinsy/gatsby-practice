import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import Layouts from "../components/Layouts";
import { graphql } from "gatsby";
import "../../public/style.css";

const meimei = ({ data }) => {
  const {
    allContentfulPosts: { nodes },
  } = data;

  const posts = nodes.map(post => (
    <div
      key={post.id}
      className="rounded-lg shadow-lg mx-auto my-4 w-2/4 p-6 col-span-1 bg-white"
    >
      <h4>{post.title}</h4>
      <Img fluid={post.image.fluid} />
      <p>{post.date}</p>
      <Link to={`/posts/${post.slug}`}>More Details</Link>
    </div>
  ));

  return (
    <Layouts>
      <div className="bg-gray-500">
        <h3>Posts</h3>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">{posts}</div>
      </div>
    </Layouts>
  );
};

export const query = graphql`
  {
    allContentfulPosts {
      nodes {
        id
        title
        description {
          description
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        date
        slug
      }
    }
  }
`;

export default meimei;
