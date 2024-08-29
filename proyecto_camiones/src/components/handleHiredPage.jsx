import { useContext } from "react";
import { Link } from "react-router-dom";

import { trucksContext } from "../context/trucks_context";
import { HiredTrucks } from "./SecondLevelComponents/hiredTrucks";

export const HandleHiredPage = () => {

    const { truckList, edidTruckLoad } = useContext(trucksContext)

    let hiredTrucksList = truckList.filter((truck) => (
        truck.hired === true
    ))
    
    console.log(hiredTrucksList, 'intentando imprimir la lista filtrada')

    return (
        <>
        
            <h1>Aqui estan tus camiones contratados</h1>
            <Link to='/'>Mira nuestro catalogo increible</Link>
            {hiredTrucksList.map((truck) => (
                <HiredTrucks 
                    id = {truck.id}
                    capacity = {truck.capacity}
                    fuelConsumption = {truck.fuelConsumption}
                    currentLoad= {truck.currentLoad}
                    driver = {truck.driver}
                />
            ))}
            {console.log('aqui esta el handle de la hiredpage')}
        </>
    )
}