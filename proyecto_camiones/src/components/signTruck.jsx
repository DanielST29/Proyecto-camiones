import { useContext, useState } from "react";
import { Link } from 'react-router-dom'

import { trucksContext } from "../context/trucks_context";

export const TruckSignUp = () => {

    // CONTEXTO GLOBAL

    const { truckList, addTruck} = useContext(trucksContext)
    
    // ESTADOS

    const [matricula, setMatricula] = useState('')
    const [capacidad, setCapacidad] = useState('')
    const [cilindraje, setCilindraje] = useState('')
    const [carga, setCarga] = useState('')
    const [conductor, setConductor] = useState('')

    const preCamion = {
        id: matricula,
        capacity: parseInt(capacidad),
        fuelConsumption: parseInt(cilindraje),
        currentLoad: parseInt(carga),
        driver: conductor   
    }

    // HANDLERS 


    const handleSubmit = async (e) => {
        await addTruck(preCamion)
        e.preventDefault()

        console.log(truckList)
    }
    
    const handleMatricula = (e) => {
        setMatricula(e.target.value)
    }
    const handleCapacidad = (e) => {
        setCapacidad(e.target.value)
    }
    const handleCilindraje = (e) => {
        setCilindraje(e.target.value)
    }
    const handleCarga = (e) => {
        setCarga(e.target.value)
    }
    const handleConductor = (e) => {
        setConductor(e.target.value)
    }

    return (
        <>
            <h2>Inscribe tu camion en TruckListo ya!</h2>
            <form className="truck_inscription" onSubmit={handleSubmit}>

                <input 
                    type="text" 
                    placeholder="Matricula"
                    value={matricula}
                    onChange={handleMatricula}
                />
                <input 
                    type="number" 
                    placeholder="Capacidad"
                    value={capacidad}
                    onChange={handleCapacidad}
                />
                <input 
                    type="number" 
                    placeholder="Cilindraje"
                    value={cilindraje}
                    onChange={handleCilindraje}
                />
                <input 
                    type="number" 
                    placeholder="Carga actual"
                    value={carga}
                    onChange={handleCarga}
                />
                <input 
                    type="text" 
                    placeholder="Conductor"
                    value={conductor}
                    onChange={handleConductor}
                />

                <br/>
                <button className="sign_button_inscription" type="submit">Inscribir!</button>
                <Link to='/'>Mira nuestro catalogo increible</Link>
            </form>   
        </>
    )
}