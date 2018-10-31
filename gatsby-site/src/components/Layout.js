import React, { Children } from "react"
import { Link } from "gatsby"
import styles from "../pages/index.css"
const ListLink = props => (
    <li style = {{display : 'inline-block', marginRight : '1rem'}}>
        <Link to={props.to} target="_blank">{props.children}</Link>
    </li>
)

export default ({ children }) => (
    <div class = "layout" style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem`,styles }}>
      <header class="topArea" style={{ marginBottom: `1.5rem`, styles}}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Hosni Berker</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink style={{font : "Open Sans"}} className = "link" to="/">Home</ListLink>
          <ListLink style={{font : "Open Sans"}} to="/about/">About</ListLink>
          <ListLink style={{font : "Open Sans"}} to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )