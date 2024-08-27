import { useState, useContext } from "react";
import { Link } from 'react-router-dom'

import { trucksContext } from "../context/trucks_context";



export const Home = () => {
   
    const { truckList } = useContext(trucksContext)

    


    return (
        <> 
            <h2 className="title_description">Contrata el camion de tu gusto</h2>
            <section className="truck_container">
                {truckList.map((truck) => (
                    <div key={truck.id} className="impressive_truck">
                        <h3>Matricula: {truck.id}</h3>
                        <p>Capacidad de carga: {truck.capacity}kg</p>
                        <p>Consumo de gasolina: {truck.fuelConsumption} galones / kilometro</p>
                        <p>Carga actual: {truck.currentLoad}kg</p>

                        <button> Contratar </button>
                    </div>
                ))}
            </section>

            <div className="separator"></div>

            <p className="description">Con mas de 10 años de experiencia en el sector de carga, TruckListo es tu mejor opcion para enlistar tus camiones para el servicio</p>

            <nav>
                <button>
                    <Link style={{ textDecoration: 'none' }} to='/SignTruck'>
                        <h2> Inscribe tu camion aqui </h2> 
                    </Link>
                </button>
            </nav>
        </>
    )

}