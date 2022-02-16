import React from 'react'

export const Button = ({ color }) => (
  <button
    className={`rounded-lg py-2 px-2.5 text-black hover:bg-gray-900 hover:text-white duration-300 hover:ring-2 hover:ring-white ${
      color === 'red' ? 'bg-red-300' : 'bg-red-300'
    }`}
  >
    Click me
  </button>
)

export default Button
