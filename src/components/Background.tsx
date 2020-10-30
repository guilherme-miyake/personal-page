import React from 'react'
import {graphql, StaticQuery} from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = (props:{className:string}) => (
    <StaticQuery
        query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1024) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
        render={data => {
            // Set ImageData.
            const imageData = data.desktop.childImageSharp.fluid
            return (
                <BackgroundImage
                    fluid={imageData}
                    className={props.className}
                    preserveStackingContext={true}

                />
            )
        }}
    />
)

export default BackgroundSection