import { useState } from "react";

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

    const handleSubmit = (e) => {

        e.preventDefault()

        if(!userInput || !passwordInput) return setErrors('el campo usuario/passwordInput es obligatorio')
        if(userInput.length < 9) return setErrors('tu usuario debe ser mayor a 8 caracteres')
        if(passwordInput.length < 8) return setErrors('tu contrasena debe ser mayor a 8')
        setErrors('')
        setSuccess('tu formulario fue enviado')
    }

    const handleUser = (e) => {
        setUserInput(e.target.value)
        
    }

    const handlePassword = (e) => {
        setPasswordInput(e.target.value)
    }

    return(
        <>
            <h2>Soy el login</h2>

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