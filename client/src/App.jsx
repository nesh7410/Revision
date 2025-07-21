import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState("red");
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const randomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh" }}>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold">My Application</h1>
      </header>
      <p>{color}</p>
      <button onClick={() => setColor(randomColor())} >Click here</button>
    </div>

    
  )
}

export default App