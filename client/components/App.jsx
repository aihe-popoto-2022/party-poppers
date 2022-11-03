import React from 'react'
import RandomButton from './RandomButton'
import ProgressBar from '../ProgressBar'

// import Title from './Title'
import Balloon from './Balloon'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <div>
        <RandomButton />
      </div>
      <div>
        <ProgressBar value={20} max={100} />
      </div>
      <Routes>
        <Route path="/" element={<Balloon />}></Route>
      </Routes>
    </div>
  )
}

export default App
