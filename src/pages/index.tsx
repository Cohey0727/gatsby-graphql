import * as React from "react";
import { graphql } from "gatsby";
import { Site, SiteSiteMetadata } from "../../graphql-types";

type Props = {
  data: {
    site: Site;
  };
};

const Index: React.FC<Props> = (props) => {
  console.debug({ props });
  return <div>{props.data.site.siteMetadata?.testString}</div>;
};

export default Index;

export const query = graphql`
  query {
    site {
      siteMetadata {
        testString
      }
    }
  }
`;
