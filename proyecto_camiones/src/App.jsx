import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './components/homePage'
import { LogIn } from './components/logIn'
import { TruckSignUp } from './components/signTruck'
import { TruckComponent } from './context/trucksCompo'

import './App.css'

function App() {

  return (
    <>
    <TruckComponent>
      <Router>
        <Routes>
          <Route path='/SignTruck' element={<TruckSignUp/>}/>
          <Route path='/' element={<Home/>} />
          <Route path='/IniciarSesion' element={<LogIn/>} />
        </Routes>
      </Router>
    </TruckComponent>
      
    </>
  )
}

export default App
