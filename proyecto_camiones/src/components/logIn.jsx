import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const LogIn = () =>{

    const Usuarios = [
        {user: 'Admin1', password: '123', admin: true},
        {user: 'Admin2', password: '456', admin: true},
        {user: 'Admin1', password: '123', admin: true}
    ]

    const [userInput, setUserInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [errors, setErrors] = useState('')
    const [success, setSuccess] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        let index

        if (userInput && passwordInput) {
            if (Usuarios.find((user, i) => user.user == userInput ? index = i : '')) {
                if (passwordInput == Usuarios[index].password){
                    setErrors('')
                    setSuccess('tu formulario fue enviado')
                    navigate('/')
                } else setErrors('Contraseña incorrecta')
            } else setErrors('El usuairo digitado no existe')
        } else setErrors('el campo usuario y/o contraseña es obligatorio')
    }

    const handleUser = (e) => {
        setUserInput(e.target.value)
        
    }

    const handlePassword = (e) => {
        setPasswordInput(e.target.value)
    }

    return(
        <>
            <h2>Iniciar sesion</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Usuario" 
                    onChange={handleUser}
                    value={userInput} 
                    />
                <input 
                    type="password" 
                    placeholder="Contraseña"
                    onChange={handlePassword}
                    value={passwordInput} 
                />
                <button type="submit">Iniciar sesion</button>
            </form>


            {errors && (
                <p style={{padding: '1rem', borderRadius: '1rem', background: '#ccc', color: 'red'}}>{errors}</p>
            )}
            {success && (
                <p style={{padding: '1rem', borderRadius: '1rem', background: 'green',}}>{success}</p>
            )}
        </>
    )
}