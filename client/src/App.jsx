import React, { useState } from 'react'

import Cars from './pages/Cars.jsx';


function App() {
  const cars = [
    { name: 'Toyota', age: 5 },
    { name: 'Honda', age: 3 },
    { name: 'Ford', age: 7 },
  ];

  return (
    <>
      <div className="App">
        <h1 className="text-2xl font-bold mb-4">Car List</h1>
        <ul>
          { cars.map( (car) =>(
            <li> <Cars name={car.name} age={car.age} ></Cars></li>
          ) )}
        </ul>
      </div>
    </>
  )
}

export default App