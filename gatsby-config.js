const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Traces of Light',
    description: 'Photographic portofolio of Alejandro Herr',
    keywords: 'photography, analog',
    author: 'Alejandro Hernandez',
    canonical: process.env.DEPLOY_ENV === 'STAGE'
      ? 'https://stage.traces-of-light.alejandroherr.io'
      : 'https://traces-of-light.alejandroherr.io',
    license: 'by-sa',
    licenseBy: 'alejandroherr.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_ID || '',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Traces of Light',
        short_name: 'Traces of Light',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#373737',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: path.join(__dirname, 'data'),
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Iosevka Web'],
          urls: ['/fonts/iosevka/webfont.css'],
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-eslint',
    'gatsby-plugin-netlify',
  ],
};
