import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import styles from "../styles/project-details.module.css"

const ProjectDetails = () => {
  return (
    <Layout>
      <div className={styles.details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={styles.featured}>
          <Img fruid={} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={} />
      </div>
    </Layout>
  )
}

export default project - ProjectDetails
