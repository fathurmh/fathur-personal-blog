module.exports = {
  siteMetadata: {
    title: 'PERSEVERANCE',
    description:
      "Persistent Perseverance, a personal blog by Fathurahman Ma'ruf Hudoarma, about life, code, and random $h1t",
    siteUrl: 'https://fathurmh.netlify.com',
    author: "Fathurahman Ma'ruf Hudoarma",
    adsense: '', //ca-pub-7385065488725185
    twitter: 'http://www.twitter.com/fathurmh',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'PERSISTENT PERSEVERANCE',
        short_name: 'PERSEVERANCE',
        description:
          "Persistent Perseverance, a personal blog by Fathurahman Ma'ruf Hudoarma, about life, code, and random $h1t",
        homepage_url: 'https://fathurmh.netlify.com',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#2B2B2B',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-119881816-1',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-transformer-sharp',
  ],
}
