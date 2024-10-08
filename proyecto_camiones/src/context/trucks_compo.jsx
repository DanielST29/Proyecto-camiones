import { useState } from "react";
import { trucksContext } from "./trucks_context";

export const TruckComponent = ( { children }) => {
    const [truckList, setTruckList] = useState([
        { id: 'ABC-123', capacity: 1000, fuelConsumption: 5, currentLoad: 200, driver: 'Juan Perez', hired: false },
        { id: 'XYZ-789', capacity: 1500, fuelConsumption: 7, currentLoad: 500, driver: 'Luis Ramirez', hired: false },
        { id: 'LMZ-239', capacity: 2000, fuelConsumption: 9, currentLoad: 500, driver: 'Carlos Gomez', hired: false },
        { id: 'OWZ-777', capacity: 800, fuelConsumption: 4, currentLoad: 500, driver: 'Jose Fernandez', hired: false },
    ]);

    // const [userList, setUserList] = useState([
    //     {email: 'juan@gmail.com', password: 12345, admin: false },
    //     {email: 'felipe@gmail.com', password: 12345, admin: false },
    //     {email: 'albertp@gmail.com', password: 12345, admin: true },
    //     {email: 'Mario@gmail.com', password: 12345, admin: true },
    // ]);


    const addTruck = (object) => {
        setTruckList((prev) => [...prev, object])
    }
    
    const hireTruck = (id) => {
        setTruckList((prev) =>
            prev.map((truck) =>
                truck.id === id ? { ...truck, hired: !truck.hired } : truck
            )
        );
    }
    
    const editTruckLoad = (id, newLoad) => {
        setTruckList((prev) =>
            prev.map((truck) =>
                truck.id === id 
                ? { ...truck, currentLoad: newLoad} 
                : truck
            )
        );
    }

    const deleteTruck = (id) => {
        setTruckList((prev) =>
            prev.map((truck) => 
                truck.id == id
                ? { ...truck, hired: false }
                : truck
            )
        )
    }


    return (
        <trucksContext.Provider
            value={{
                truckList,
                addTruck,
                hireTruck,
                editTruckLoad,
                deleteTruck
            }}>
            { children }
        </trucksContext.Provider>
    )
}
            // const hireTruck = (objectId) => {
            //     let newHiredTruck = truckList.map((truck) => {
            //         if ( truck.id == objectId) {
            //             return { ...truck, hired: !truck.hired };
            //             // return truck.hired = !truck.hired
            //         }
            //         return truck
            //     })
            //     setTruckList(newHiredTruck)
            // }