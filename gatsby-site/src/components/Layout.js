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
      <br></br>
      
      <header  style={{ marginBottom: `1.5rem`, styles}}>
        <Link class = "title" to="/" style={{ textShadow: `none` }}>
          <h3 class = "title" style={{ display: `inline`,width: '70%', styles }}>Hosni Berker</h3>
        </Link>
        <ul  style={{ listStyle: `none`, float: `right`,styles }}>
          <ListLink class = "Header" style={{styles}} to="/">Home</ListLink>
          <ListLink class = "Header" style={{styles}} to="/AboutPage/">Blog</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )