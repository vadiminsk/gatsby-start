import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{children}</main>
      <footer>
        <p>Copyright 2021 Vadim Developer</p>
      </footer>
    </div>
  )
}
