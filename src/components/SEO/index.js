import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      titleTemplate={`%s | ${metaTitle}`}
    >
      <html lang="en-us" />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@followthecusp" />
      <meta name="twitter:domain" content="thecusp.com" />
      <meta name="twitter:site" content="@followthecusp" />
      <meta name="twitter:description" content={metaDescription} />
      {/* <meta name="twitter:image" content={image} /> */}
      <meta name="twitter:title" content={metaTitle} />

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:description" content={metaDescription} />
      {/* <meta property="og:image" content={image} /> */}
      <meta property="og:title" content={metaTitle} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
