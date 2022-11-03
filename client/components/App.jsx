import React from 'react'

//import Title from './Title'
import Balloon from './Balloon'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      {/* <button onClick={handleButton}>Random colour</button> */}
      <Routes>
        <Route path="/" element={<Balloon />}></Route>
      </Routes>
    </div>
  )
}

export default App
