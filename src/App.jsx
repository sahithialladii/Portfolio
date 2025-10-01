import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WebLayout from './layout/WebLayout'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<WebLayout />}>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App