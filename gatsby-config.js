module.exports = {
  siteMetadata: {
    title: `comex`,
    siteUrl: `https://comexhomes.ke/`
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        "url": "https://test.comexhomes.ke/graphql"
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "G-KN7G670PSF"
      }
    }, 
    "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }]
};