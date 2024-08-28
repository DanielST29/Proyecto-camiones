import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './components/homePage'
import { LogIn } from './components/logIn'
import { TruckSignUp } from './components/signTruck'
import { TruckComponent } from './context/trucks_compo'
import { HandleTruckPage } from './components/handleTruckPage'
import { TruckPageComponent } from './context/trucks_page_compo'

import './App.css'

function App() {

  return (
    <>
    <TruckComponent>
      <TruckPageComponent>
        <Router>
          <Routes>
            <Route path='/SignTruck' element={<TruckSignUp/>}/>
            <Route path='/' element={<Home/>} />
            <Route path='/IniciarSesion' element={<LogIn/>} />
            <Route path='/YourTruck/:id' element={<HandleTruckPage/>} />
          </Routes>
        </Router>
      </TruckPageComponent>
    </TruckComponent>
    </>
  )
}

export default App
