import { useState, useRef } from "react"
import './index.css'

export default function RenderCounter({ children }) {
  const [_, setReload] = useState(false)
  const valueRef = useRef(-1)
  ++valueRef.current

  return (
    <>
      { children }
      <div className='container'>
          <h1>Amount of rendering {valueRef.current / 2}</h1>
          <button 
            className={'button'} 
            onClick={() => setReload(prev => !prev)}
          >
            Click to render
          </button>
      </div>
    </>
  )
}