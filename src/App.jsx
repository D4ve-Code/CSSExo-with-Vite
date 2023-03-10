import { useState } from 'react'
import { Routes, Route, } from 'react-router-dom'
import Header  from './components/Header'
import Home from './screens/Home'


const App = () => {

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </div>
  )
}

export default App
