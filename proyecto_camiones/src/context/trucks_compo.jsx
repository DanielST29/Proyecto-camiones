import { useState } from "react";
import { trucksContext } from "./trucks_context";

export const TruckComponent = ( { children }) => {
    const [truckList, setTruckList] = useState([
        { id: 'ABC-123', capacity: 1000, fuelConsumption: 5, currentLoad: 200, driver: 'Juan Perez' },
        { id: 'XYZ-789', capacity: 1500, fuelConsumption: 7, currentLoad: 500, driver: 'Luis Ramirez' },
        { id: 'LMZ-239', capacity: 2000, fuelConsumption: 9, currentLoad: 500, driver: 'Carlos Gomez' },
        { id: 'OWZ-777', capacity: 800, fuelConsumption: 4, currentLoad: 500, driver: 'Jose Fernandez' },
    ]);

    const addTruck = (object) => {
        setTruckList((prev) => [...prev, object])
    }

    return (
        <trucksContext.Provider
            value={{
                truckList,
                addTruck
            }}
        >
            { children }
        </trucksContext.Provider>
    )
}