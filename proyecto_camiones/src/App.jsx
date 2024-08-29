import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Estados Globales
import { TruckComponent } from './context/trucks_compo'

// Components
import { Home } from './components/homePage'
import { LogIn } from './components/logIn'
import { TruckSignUp } from './components/signTruck'
import { HandleTruckPage } from './components/handleTruckPage'
import { HandleHiredPage } from './components/handleHiredPage'

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
            <Route path='/YourTruck/:id' element={<HandleTruckPage/>} />
            <Route path='/HiredByYou' element={<HandleHiredPage/>}/>
          </Routes>
        </Router>
    </TruckComponent>
    </>
  )
}

export default App
