import React from "react"
import { Link } from "gatsby"


export default () => 
(
     <div style = {{color: 'purple', fontSize: '72px'}}>
        <h1>Hello gatsby</h1>
        <Link to="/contact/">Contact</Link>
        <p> what a world</p>
        <img src = "https://source.unsplash.com/random/400x200" alt=''></img>
     </div>
)