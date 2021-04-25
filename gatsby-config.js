/* eslint-disable quotes */
/* eslint-disable no-useless-escape */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    author: '@scimusmn',
    description: 'Science Museum of Minnesota exhibit template',
    title: 'app-template',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-eslint',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: '@import "src/styles/variables"; @import "src/styles/mixins"; @import "src/styles/shared";',
        includePaths: ['src/components'],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/utils/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/utils/images/smm.png',
        name: 'app-default',
        short_name: 'app',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `montserrat\:300,400,400i,500,600,700,900`,
          `open sans\:400,500,600,700`,
          `tajawal\:500,600,700`,
        ],
        display: 'swap',
      },
    },
  ],
};
