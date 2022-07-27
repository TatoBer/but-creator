import React from 'react'
import "./button.css"

export default function Button({ bgType }) {
  return (
    <button className={`button-custom ${bgType}`} >
        BUTTON
    </button>
  )
}
