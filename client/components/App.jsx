import React, { useState, useEffect } from 'react'
import ProgressBar from '../ProgressBar'

import Balloon from './Balloon'
import Title from './Title'
import Ian from './Ian'
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
    }, 1000)
  }, [])

  return (
    <div>
      <div>
        <Title />
      </div>

      <br></br>
      <div>
        <Routes>
          <Route path="/" element={<Balloon />}></Route>
          <Route path="/Ian" element={<Ian />} />
        </Routes>
        <ProgressBar value={value} max={100} />
      </div>

      {/* <footer>
        <ProgressBar value={value} max={100} />
      </footer> */}
    </div>
  )
}

export default App
