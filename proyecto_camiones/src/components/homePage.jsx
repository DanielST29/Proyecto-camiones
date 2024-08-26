import { useState } from "react";



export const Home = () => {
   

    const [truckList, setTruckList] = useState([
        { id: 'ABC-123', capacity: 1000, fuelConsumption: 5, currentLoad: 200, driver: 'Juan Perez' },
        { id: 'XYZ-789', capacity: 1500, fuelConsumption: 7, currentLoad: 500, driver: 'Luis Ramirez' },
        { id: 'LMZ-239', capacity: 2000, fuelConsumption: 9, currentLoad: 500, driver: 'Carlos Gomez' },
        { id: 'OWZ-777', capacity: 800, fuelConsumption: 4, currentLoad: 500, driver: 'Jose Fernandez' },
    ]);
    return (
        <>
            <h2>Pagina de inicio</h2>
            <p className="title_description">En esta compañia podras contratar cualquier camion de nuestro catalogo</p>
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


            <h2>Inscribete aqui </h2>

            <form action="/submit-form" method="POST">
                <label for="name">Nombre Completo</label>
                <input type="text" id="name" name="name" required placeholder="Ingresa tu nombre completo">

                <label for="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required placeholder="Ingresa tu correo electrónico">

                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" required placeholder="Ingresa tu contraseña">

                <button type="submit">Registrarse</button>
            </form>
        </>
    )

}