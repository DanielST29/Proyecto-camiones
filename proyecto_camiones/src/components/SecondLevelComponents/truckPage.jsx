import { Link } from "react-router-dom"

export const TruckPage = ({ id, capacity, fuelConsumption, currentLoad, driver, hireButton, btnContent }) => {

    return (
        <>
        <article className="truck_information_menu">
            <h1>Descripcion:</h1>
            <p><b>Matricula:</b> {id} </p>
            <p> <b>Capacidad:</b>  {capacity} Kg</p>
            <p> <b>Consumo de gasolina:</b>  {fuelConsumption} Galones/Km</p>
            <p> <b>Carga actual:</b> {currentLoad} Km</p>
            <p> <b>Chofer:</b> {driver}</p>
        </article>
            <br />
            <button onClick={hireButton}> {btnContent} </button>
            <br />
            <br />
            <Link to='/'>Mira nuestro catalogo increible</Link>
        </>
    )
}