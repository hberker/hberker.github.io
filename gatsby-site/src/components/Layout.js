import React, { Children } from "react"
import { Link } from "gatsby"
import styles from "../pages/index.css"
const ListLink = props => (
    <li style = {{display : 'inline-block', marginRight : '1rem'}}>
        <Link to={props.to} style = {{styles}} target="_blank">{props.children}</Link>
    </li>
)

export default ({ children }) => (
    <div class = "Header" style={{styles}}>
      <hr></hr>
      <header  style={{ marginBottom: `1.5rem`, styles}}>
        <Link class = "title" to="/" style={{ textShadow: `none` }}>
          <h3 class = "title" style={{ display: `inline`,width: '70%', styles }}>Hosni Berker</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`,styles }}>
          <ListLink style={{font : "Open Sans"}} to="/">Home</ListLink>
          <ListLink style={{font : "Open Sans"}} to="/about/">About</ListLink>
          <ListLink style={{font : "Open Sans"}} to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )