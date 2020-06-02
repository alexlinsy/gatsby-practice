import React from "react"
import "../../../public/style.css"

const NavBar = () => (
  <nav className="flex item-center justify-between flex-wrap bg-gray-800 p-6">
    <div>
      <Span>Gatsby Test</Span>
    </div>
    <div>
      <a href="#">Me & Pets</a>
      <a href="#">Blog</a>
    </div>
  </nav>
)

NavBar.propTypes = {}

export default NavBar
