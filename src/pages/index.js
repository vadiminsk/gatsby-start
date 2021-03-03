import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/home.module.css"

export default function Home({ data }) {
  console.log(data)

  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.home}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web developer based in Minsk</p>
          <Link className={styles.btn} to="/projects">
            My portfolio projects
          </Link>
        </div>
        <img src="/banner.png" alt="Site banner" />
        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
