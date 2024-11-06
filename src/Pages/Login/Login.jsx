import { useState, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const {setIsLogged} = useContext(AuthContext)
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const navigate = useNavigate()

    const handleSubmit = () => {
        if(usuario.length > 0 && contraseña.length > 0){
            setIsLogged(true)
            navigate("/")
        } else {
            alert("Por favor, rellene todos los campos")
        }
    }

    return (
        <div>
            <label htmlFor="usuario">Usuario</label>
            <input type="text" id="usuario" onChange={(e) => setUsuario(e.target.value)}/>
            <label htmlFor="contraseña">Contraseña</label>
            <input type="password" id="contraseña" onChange={(e) => setContraseña(e.target.value)} />
            <button onClick={handleSubmit}>Iniciar Sesión</button>
        </div>
    )
}

export default Login