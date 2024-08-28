import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { trucksContext } from "../context/trucks_context";
import { TruckPage } from "./SecondLevelComponents/truckPage";

export const HandleTruckPage = () => {
    
    // Parametros de la redireccion
    const param = useParams();
    // Lista de camiones del estado global
    const { truckList, hireTruck } = useContext(trucksContext)
    // Busqueda del param.id en la truckList
    const selectedTruck = truckList.find((truck) => truck.id == param.id)
    // Estados
    const [isHired, setIsHired] = useState(false)
    const [buttonContent, setButtonContent] = useState('Contratar')

    const handleHireButton = () => {
        setIsHired(!isHired)
        hireTruck(selectedTruck.id);
        console.log(truckList)
    }

    useEffect(() => {
        isHired == false ? setButtonContent('Contratar') : setButtonContent('Camion ya contratado')
        console.log(truckList)
    },[isHired])

    return (
        <>
            <TruckPage 
                id = {selectedTruck.id}
                capacity = {selectedTruck.capacity}
                fuelConsumption = {selectedTruck.fuelConsumption}
                currentLoad= {selectedTruck.currentLoad}
                driver = {selectedTruck.driver}

                hireButton={handleHireButton}
                btnContent={buttonContent}
            />
        </>
    )
}

