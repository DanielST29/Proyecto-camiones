import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { trucksContext } from "../context/trucks_context";

export const TruckPage = () => {
    
    // Parametros de la redireccion
    const param = useParams();

    // Lista de camiones del estado global
    const { truckList, hireTruck } = useContext(trucksContext)

    // Busqueda del param.id en la truckList
    const [isHired, setIsHired] = useState(false)
    const [buttonContent, setButtonContent] = useState('Contratar')



    const selectedTruck = truckList.find((truck) => truck.id == param.id)
    console.log(selectedTruck)
    console.log(param, 'este es el param')

    const handleHireButton = async () => {
        setIsHired(!isHired)
        await hireTruck(param.id)
    }
    useEffect(() => {
        isHired == false ? setButtonContent('Contratar') : setButtonContent('Camion ya contratado')
        console.log(truckList)
    },[isHired,handleHireButton])


    return (
        <>
        <article className="truck_information_menu">
            <h1>Descripcion:</h1>
            <p><b>Matricula:</b> {selectedTruck.id} </p>
            <p> <b>Capacidad:</b>  {selectedTruck.capacity} Kg</p>
            <p> <b>Consumo de gasolina:</b>  {selectedTruck.fuelConsumption} Galones/Km</p>
            <p> <b>Carga actual:</b> {selectedTruck.currentLoad} Km</p>
            <p> <b>Chofer:</b> {selectedTruck.driver}</p>
        </article>
            <br />
            <button onClick={handleHireButton}> {buttonContent} </button>
            <br />
            <br />
            <Link to='/'>Mira nuestro catalogo increible</Link>
        </>
    )
}

