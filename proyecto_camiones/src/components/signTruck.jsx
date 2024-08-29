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

    // ESTADOS: (erros and succed)

    const [errors, setErrors] = useState('')
    const [success, setSuccess] = useState('')

    const preTruck = {
        id: matricula,
        capacity: parseInt(capacidad),
        fuelConsumption: parseInt(cilindraje),
        currentLoad: parseInt(carga),
        driver: conductor   
    }

    // HANDLERS 


    const handleSubmit = async (e) => {
        
        e.preventDefault()

        // Inscripcion de camion parametrizada y controlada

        if ( matricula && capacidad && cilindraje && carga && conductor){
            if ( carga <= capacidad ) {
                if ( truckList.find((truck) => truck.id == preTruck.id)) {
                    setErrors('El camion digitado ya se encuentra registrado')
                } else {
                    
                    setSuccess('Camion exitosamente registrado!')
                    await addTruck(preTruck)
                    
                    setMatricula('')
                    setCapacidad('')
                    setCilindraje('')
                    setCarga('')
                    setConductor('')
                    setErrors('')
                }
            } else setErrors('La carga no puede exceder la capacidad de tu camion')
        } else setErrors('Un campo no se ha completado!')
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

                {errors && (
                    <p style={{padding: '1rem', borderRadius: '1rem', background: '#ccc', color: 'red'}}>{errors}</p>
                )}
                {success && (
                    <p style={{padding: '1rem', borderRadius: '1rem', background: 'green',}}>{success}</p>
                )}
                
                <button className="sign_button_inscription" type="submit">Inscribir!</button>
                <Link to='/'>Mira nuestro catalogo increible</Link>
            </form>   
        </>
    )
}