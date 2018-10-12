import React from "react"
import Container from "../components/container"
import { Link } from "gatsby"

export default () =>
 (
  <Container name = "one">
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <Link to = "/">Back to Main Page</Link>
  </Container>
  
)