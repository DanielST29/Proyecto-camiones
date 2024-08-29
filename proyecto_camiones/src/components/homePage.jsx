import { useState, useContext } from "react";
import { Link } from 'react-router-dom'

import { trucksContext } from "../context/trucks_context";



export const Home = () => {
   
    // GLOBAL STATES

    const { truckList } = useContext(trucksContext)

    // STATES

    const [idSelected, setId] = useState('')


    const handleSelectId = (id) => {
        setId(id)
        console.log(id, 'Este es el id seleccionado')

    }


    return (
        <> 
            <h1 className="title_description">Contrata el camion de tu gusto</h1>
            <br />
            <section className="truck_container">
                {truckList.map((truck) => (
                    <div key={truck.id} className="impressive_truck">
                        <h3>Matricula: {truck.id}</h3>
                        <p>Capacidad de carga: {truck.capacity}kg</p>
                        <p>Consumo de gasolina: {truck.fuelConsumption} galones / kilometro</p>
                        <p>Carga actual: {truck.currentLoad}kg</p>

                        <Link to={`/YourTruck/${truck.id}`}>
                            <button onClick={() => handleSelectId(truck.id)} className="see_truck_button"> 
                                Ver </button>
                        </Link>
                    </div>
                ))}
            </section>
            <div className="separator"></div>
            <p className="description">Con mas de 10 años de experiencia en el sector de carga, TruckListo es tu mejor opcion para enlistar tus camiones para el servicio</p>
            <nav className="home_page_buttons">
                <button>
                    <Link style={{ textDecoration: 'none' }} to='/SignTruck'>
                        <h2> Inscribe tu camion aqui </h2> 
                    </Link>
                </button>
                <button>
                    <Link style={{ textDecoration: 'none' }} to='/HiredByYou'>
                        <h2> Tus camiones contratados </h2> 
                    </Link>
                </button>
            </nav>
        </>
    )

}