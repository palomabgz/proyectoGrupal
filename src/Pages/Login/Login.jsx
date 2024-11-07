import { useState, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {

    const {setIsLogged} = useContext(AuthContext)
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.peventDefault();

        if(usuario.length > 0 && contraseña.length > 0){
            setIsLogged(true)
            navigate("/")
        } else {
            alert("Por favor, rellene todos los campos")
        }
    }

    return (
        <div className="contenedorLogin">
            <form className="form">
                <h3>Iniciar Sesión</h3>
                <div className="input">
                    <label htmlFor="usuario" className="label">Usuario</label>
                    <input 
                    type="text" 
                    id="usuario"
                    placeholder="Usuario"
                    onChange={(e) => setUsuario(e.target.value)}/>
                </div>
                <div className="input">
                    <label htmlFor="contraseña" className="label">Contraseña</label>
                    <input 
                    type="password" 
                    id="contraseña"
                    placeholder="contraseña" 
                    onChange={(e) => setContraseña(e.target.value)} />
                </div>
                <button className="boton" onClick={(e) => handleSubmit(e)}>Iniciar Sesión</button>
            </form>
        </div>
    )
}

export default Login