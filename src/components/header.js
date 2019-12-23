import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-black">
    <div>
      <h1 className="ml-2 text-8xl text-center neon burbank">
        <Link to="/">{siteTitle}</Link>
      </h1>

      <h1 className="ml-2 text-white text-8xl text-center neon-green burbank">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <h1 className="ml-2 text-white text-8xl text-center neon-red burbank">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <h1 className="ml-2 text-white text-8xl text-center neon-blue burbank">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <h1 className="ml-2 text-white text-8xl text-center neon-violet burbank">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
