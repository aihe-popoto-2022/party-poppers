import React, { useState, useEffect } from 'react'
import ProgressBar from '../ProgressBar'

import Balloon from './Balloon'
import Title from './Title'
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
        <Title />
      </div>
      <div className="button"></div>
      <br></br>
      <div className="balloonpen">
        <Routes>
          <Route path="/" element={<Balloon />}></Route>
        </Routes>
      </div>
      <br></br>

      <div>
        <ProgressBar value={value} max={100} />
      </div>
    </div>
  )
}

export default App
