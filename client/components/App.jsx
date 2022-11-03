import React from 'react'
import { Route } from 'react-router-dom'
import Title from './Title'
import RandomButton from './RandomButton'

function App() {
  return (
    <div>
      <Title />
      <div>
        <RandomButton/>
      </div>
      {/* <Routes>
        <Route />
      </Routes> */}
    </div>
  )
}

export default App
