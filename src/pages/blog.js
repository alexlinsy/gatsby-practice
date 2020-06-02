import React from "react";
import Layouts from "../components/Layouts";
import { graphql } from "gatsby";

const blog = ({ data }) => {
  const {
    site: {
      siteMetadata: {
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
