import React from 'react'

//import Title from './Title'
import Balloon from './Balloon'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Balloon />}></Route>
      </Routes>
    </div>
  )
}

export default App
