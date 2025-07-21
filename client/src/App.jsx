import React, { useState } from 'react'
import Home from './pages/Home.jsx'
import Form from './pages/Form.jsx'
import NoPage from './pages/NoPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App