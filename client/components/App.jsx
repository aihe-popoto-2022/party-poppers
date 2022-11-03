import React, { useState, useEffect } from 'react'
import RandomButton from './RandomButton'
import ProgressBar from '../ProgressBar'

// import Title from './Title'
import Balloon from './Balloon'
//import Title from './Title'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 10
        if (newValue === 100) {
          clearInterval(interval)
        }
        return newValue
      })
    }, 10000)
  }, [])

  return (
    <div>
      <div>
        <RandomButton />
      </div>
      <div>
        <ProgressBar value={value} max={100} />
      </div>
      <Routes>
        <Route path="/" element={<Balloon />}></Route>
      </Routes>
    </div>
  )
}

export default App
