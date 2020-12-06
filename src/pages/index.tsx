import * as React from "react";
import { graphql } from "gatsby";
import {
  ContentfulImageConnection,
} from "../../graphql-types";

type Props = {
  data: {
    allContentfulImage: ContentfulImageConnection;
  };
};

const Index: React.FC<Props> = (props) => {
  console.debug({ props });

  return (
    <div>
      {"hello"}
      <img src={props.data.allContentfulImage.edges[0].node.photo?.file?.url || ''} alt={''} />
    </div>
  );
};

export default Index;

export const query = graphql`
  {
    allContentfulImage(filter: { photo: { title: { eq: "The Flower" } } }) {
      edges {
        node {
          photo {
            file {
              url
              fileName
              contentType
            }
            description
            title
          }
        }
      }
    }
  }
`;
