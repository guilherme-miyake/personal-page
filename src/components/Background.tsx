import React from 'react'
import {graphql, StaticQuery} from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
import {getImage} from "gatsby-plugin-image";
import {convertToBgImage} from "gbimage-bridge";

const BackgroundSection = (props: { className: string }) => (
    <StaticQuery
        query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            gatsbyImageData(quality: 70, layout: FULL_WIDTH,formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
          }
        }
      }
    `}
        render={data => {
            // Set ImageData.
            const image = getImage(data.desktop)

            const bgImage = convertToBgImage(image)
            return (
                <BackgroundImage
                    {...bgImage}
                    className={props.className}
                    preserveStackingContext={true}

                />
            )
        }}
    />
)

export default BackgroundSection