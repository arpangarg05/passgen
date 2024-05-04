import { useState } from 'react'
import './App.css'
import Pass from './Pass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Pass></Pass>
    </div>
  )
}

export default App
