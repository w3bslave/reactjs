import React from "react"
import ReactDOM from "react-dom"

function MyInfo() { //Basic React Functions
  return (
    <div>
      <h1>Jorich Ponio/h1>
      <p>This is a paragraph about me...</p>
      <ul>
        <li>Canada</li>
        <li>Japan</li>
        <li>Batanes Philippines</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById("root")) 
