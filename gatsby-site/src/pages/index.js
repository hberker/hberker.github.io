import React from "react"
import { Link } from "gatsby"
import Layout from "./../components/Layout"
import styles from "./index.css"

// #00A0C6;
const Post = props => (
  <div className={props.name}>
    
    <h2 align="center" className={props.name}><strong><a href = {props.link}><u>{props.title}</u></a></strong></h2>
    <h3 align="center" className={props.name}><b><em> — </em></b>{props.lang}<b><em> — </em></b></h3>
    <p align="center" className={props.name}>{props.excerpt}</p>
  </div>
)

export default () => 
(
  <Layout className = "layout" style={{styles}}> 
      <hr></hr>
      <ul>
        <Post
          className = "post"
          name = "post" 
          title = "Cryptography Project"
          lang = "C++"
          excerpt ="This project uses three types of ciphers. The first 
          is a Caesar, the second a Vignere, and the third a Polybius."
          link = "https://github.com/hberker/Cryptography-Project"
        />
        <Post
          name = "post" 
          title = "Discord Bot"
          lang = "Java"
          excerpt ="This bot connects to discord and can be used to run tournaments through the challonge api.
                    The bot is called Hal 9000 and can be run from your computer.
                    To do this you must connect it through discord."
          link = "https://github.com/hberker/Discord-Challonge-Bot"
        />
        <Post
          className = "post"
          name = "post" 
          title = "Snake"
          lang = "Java"
          excerpt ="In this project I recreated the classic game of snake in Java. 
          The game is simple: you control a 2-D snake made out of blocks, and direct
           it across the screen as you try to consume apples. Delete this"
          link = "https://github.com/hberker/Snake"
        />
      </ul>
  </Layout> 
)  
