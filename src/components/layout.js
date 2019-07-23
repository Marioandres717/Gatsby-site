/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Helmet from "react-helmet"
import Footer from "./footer"

const links = [
  { title: "Privacy", url: "/privacy" },
  { title: "Contact", url: "/contact" },
  { title: "About", url: "/about" },
  { title: "Home", url: "/home" },
  { title: "Courses", url: "/courses" },
]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
      # allContentfulLink(sort: {fields: [createdAt], order: ASC}) {
      #   edges {
      #     node {
      #       title
      #       url
      #       createdAt
      #     }
      #   }
      # }
    }
  `)

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: data.site.siteMetadata.description },
          { name: "keywords", content: data.site.siteMetadata.keywords },
        ]}
      />
      <Header />
      <main>{children}</main>
      {/* {data.allContentfulLink.edges.map(edge => (
        <a href={edge.url}>{edge.title}</a>
      ))} */}
      <Footer data={links}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        aliquid. <a href="mailto:support@wyma.io">Email us</a>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
