import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
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
        <StaticImage
          src="../images/banner.png"
          alt="Banner"
          placeholder="blurred"
          layout="constrained"
        />
      </section>
    </Layout>
  )
}
