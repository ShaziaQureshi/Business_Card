import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Header(){
    const element=<FontAwesomeIcon icon={faEnvelopeSquare}/>
    const liked=<FontAwesomeIcon icon={faLinkedin}/>
    return(
        <header>
        <img src="https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png" alt="Image of the owner" className="Profile--Image"/>
        <div className="Card">
        <p className="Name">Shazia Qureshi</p>
        <p id="profile">Front-End Developer</p>
        <p>saziaqureshi.website</p>
        <button>{element}  Email</button>
        <button style={{backgroundColor:"#3F9ED1",color:"white"}}>{liked}  LikedIn</button>
        </div>
        </header>
    )
}

export default Header

