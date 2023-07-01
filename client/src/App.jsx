import React from 'react'

function App() {
  const handleClick = () => {

    console.log("clicked")
    fetch("http://localhost:3002/")
    

  }
  return (
    <div>
      <h1>hello</h1>
      <button onClick={handleClick}></button>
    </div>
  )
}

export default App