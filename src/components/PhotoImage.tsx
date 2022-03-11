import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const PhotoImage = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "photo.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)

    if (!data?.placeholderImage?.childImageSharp?.fixed) {
        return <div>Picture not found</div>
    }

    return <GatsbyImage
        image={{
            images: data.placeholderImage.childImageSharp.gatsbyImageData,
            layout: "fixed",
            width: 300,
            height: 300
        }}
        alt={"Guilherme Toshio Miyake"}

        style={{borderRadius: "30px"}}/>
}

export default PhotoImage
