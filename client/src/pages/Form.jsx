import React from 'react'
import { useState } from 'react';


function Form() {
    const [
        formData, setFormData
     ] =  useState( {
        name: '',
        email: '',
        message: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-200'>
        <div className='bg-gray-300 p-6 rounded shadow-md w-96 border-2 border-gray-400'>
            <h2 className=' bg-amber-500 w-max rounded-2xl p-3 mb-3 '>Contact Us</h2>
            <form className='flex flex-col gap-4'>
                <label>
                    Name:
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className='border p-2'
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className='border p-2'
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className='border p-2'
                    />
                </label>
                <button type="submit" className='bg-blue-500 text-white p-2' onClick={handleSubmit}>Submit</button>
            </form>
        </div> 
    </div>
  )
}

export default Form