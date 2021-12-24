import React from "react"
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
function Footer(){
  const Facebook=<FontAwesomeIcon icon={faFacebookF}/>
  const Twitter=<FontAwesomeIcon icon={faTwitter}/>
  const Instagram=<FontAwesomeIcon icon={faInstagram}/>
  const Github=<FontAwesomeIcon icon={faGithub}/>
  return(
    <div className="footer">
      <div className="Icon">
        <div className="icon-ind">{Twitter}</div>
        <div className="icon-ind">{Facebook}</div>
        <div className="icon-ind">{Instagram}</div>
        <div className="icon-ind">{Github}</div>
      </div>

    </div>
  )
}
export default Footer

