import React from "react"
import ReactDOM from "react-dom"

function About(){
  return(
    <div className="About">
      <h2><b>About</b></h2>
      <p>I am a front-end developer with a perticular Intrests in making things simple and automating daily tasks. I try to keep up  with security and best practices , and am  always looking  for a new things to learn</p>
      </div>
  )
}
function Intrests(){
  return(
    <div className="Interests">
      <h2><b>Interests</b></h2>
      <p>Food Expert.Music Scholar, Reader, Internet, Fanatic, Bacon buff,Enterprenuer, Travel geek, Pop cultural ninja, Coffee fanatic</p>
      </div>
  )
}
function MainContent(){
  return(
    <div>
      <About/>
      <Intrests/>
      </div>
  )
}
export default MainContent