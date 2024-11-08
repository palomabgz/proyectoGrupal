import { useState, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import "./Login.css"

const Login = () => {

    const {setIsLogged} = useContext(AuthContext)
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.length > 0 && password.length > 0){
            toast.success("Sesión iniciada")
            setIsLogged(true)
            navigate("/")
        } else {
            toast.error("Por favor, rellene todos los campos")
        }
    }

    return (
        <div className="contenedor">
            <form className="form">
                <h3>Iniciar Sesión</h3>
                <div className="input">
                    <label htmlFor="user" className="label">Usuario</label>
                    <input 
                    type="text" 
                    id="user"
                    placeholder="Usuario"
                    onChange={(e) => setUser(e.target.value)}/>
                </div>
                <div className="input">
                    <label htmlFor="password" className="label">Contraseña</label>
                    <input 
                    type="password" 
                    id="password"
                    placeholder="contraseña" 
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="boton" onClick={(e) => handleSubmit(e)}>Iniciar Sesión</button>
            </form>
        </div>
    )
}

export default Login

