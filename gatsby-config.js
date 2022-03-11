const {
    NODE_ENV,
    URL: NETLIFY_SITE_URL = 'https://www.example.com',
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
    siteMetadata: {
        title: `Guilherme Toshio Miyake`,
        description: `A personal page built with Gatsby, React, Typescript and MaterialUI.`,
        author: `@guilherme-miyake`,
        image: 'src/assets/images/photo.jpg',
        siteUrl
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                resolveEnv: () => NETLIFY_ENV,
                env: {
                    production: {
                        policy: [{userAgent: '*'}]
                    },
                    'branch-deploy': {
                        policy: [{userAgent: '*', disallow: ['/']}],
                        sitemap: null,
                        host: null
                    },
                    'deploy-preview': {
                        policy: [{userAgent: '*', disallow: ['/']}],
                        sitemap: null,
                        host: null
                    }
                }
            }
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: `${__dirname}/src/assets/svg`,

                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-plugin-preact`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: false,
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
