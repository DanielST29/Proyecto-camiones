import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { trucksContext } from "../context/trucks_context";
import { HiredTrucks } from "./SecondLevelComponents/hiredTrucks";

export const HandleHiredPage = () => {

    const { truckList, editTruckLoad, deleteTruck } = useContext(trucksContext)
    const [error, setError] = useState('')

    let hiredTrucksList = truckList.filter((truck) => (
        truck.hired === true
    ))

    const handleDischarge = async (e, id, capacity) => {
        console.log('probando una funcion')
        if (e.key == 'Enter') {
            if (capacity >= e.target.value && e.target.value >= 0) {
                await editTruckLoad(id, parseInt(e.target.value))
            } else setError('Digita una cantidad valida')
        }
    }
    const handleDelete = (id) => {
        // funcion aun en progreso
        deleteTruck(id)
    }

    return (
        <>
            <h1>Aqui estan tus camiones contratados</h1>
            <Link to='/'>Mira nuestro catalogo increible</Link>
            {hiredTrucksList.map((truck) => (
                <article key={truck.id}> 
                    <div className="separator_red"></div>
                    <article className="hiredTruck_display"> 
                        <HiredTrucks 
                            id = {truck.id}
                            capacity = {truck.capacity}
                            fuelConsumption = {truck.fuelConsumption}
                            currentLoad= {truck.currentLoad}
                            driver = {truck.driver}
                        />
                        <div className="hiredTruck_editSection">
                            <h2> Editar cargamento </h2>
                            <input 
                                type="number" 
                                placeholder="ej: 500kg" 
                                className="hiredTruck_input"
                                onKeyDown={(e) => handleDischarge(e, truck.id, truck.capacity)}
                            />
                            {/* <button>Vaciar</button> */}
                        </div>
                    </article>
                    <button onClick={() => handleDelete(truck.id)}>Cancelar servicio</button>
                </article>
            ))}
        </>
    )
}