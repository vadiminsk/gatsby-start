import React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{children}</main>
      <footer>Copyright 2021 Vadim Developer</footer>
    </div>
  )
}
