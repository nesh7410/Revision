import React from 'react'

function Product() {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Product Name</h2>
      <p className="text-gray-700 mb-4">Product description goes here.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  )
}

export default Product