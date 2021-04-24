import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query ImageQuery {
    allFile {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const ImagesContext = React.createContext();

function ImagesProvider({ children }) {
  const { allFile: { edges } } = useStaticQuery(query);

  const getImage = (id) => {
    const image = edges.find((edge) => edge.node.relativePath.includes(id));
    return image && image.node;
  };

  const value = { getImage };

  return (
    <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
  );
}

function useImages() {
  const context = useContext(ImagesContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within a AudioProvider');
  }
  return context;
}

export { ImagesProvider, useImages };

ImagesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
