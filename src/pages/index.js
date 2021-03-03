import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web developer based in Minsk</p>
          <Link className={styles.btn} to="/projects">
            My portfolio projects
          </Link>
        </div>
      </section>
    </Layout>
  )
}
