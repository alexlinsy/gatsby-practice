import React from "react";
import Layouts from "../components/Layouts";
import { graphql } from "gatsby";

const blog = ({ data }) => {
  const {
    site: {
      siteMetadata: {
        author,
        description,
        person: { name, age },
        title,
      },
    },
  } = data;

  return (
    <Layouts>
      <div>This is blog page.</div>
      <div>
        <h1>{title}</h1>
        <p>{author}</p>
        <p>{description}</p>
      </div>
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    </Layouts>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        data
        person {
          name
          age
        }
        title
      }
    }
  }
`;

export default blog;
