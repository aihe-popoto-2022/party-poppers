import React from 'react'
import Balloon from './Balloon'
import { Route, Routes } from 'react-router-dom'
function App() {
  // const newArray = []
  // for (let i = 0; i < 99; i++) {
  //   newArray.push(<Balloon />)
  // }
  // return newArray
  return (
    <div>
      <Routes>
        <Route path="/" element={<Balloon />}></Route>
      </Routes>
    </div>
  )
}

export default App
