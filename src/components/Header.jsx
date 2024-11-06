import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"
const Header = () => {
    const {isLogged, setIsLogged} = useContext(AuthContext)

    return (
        <div>
            <Link to={'/'}>Home</Link>
            {isLogged && <Link to={'/mis-blogs'}>Mis blogs</Link>}
            {isLogged && <Link to={'/mis-blogs'}>Crear Blog</Link>}
            {isLogged && <p onClick={() => setIsLogged(false)}>Cerrar Sesión</p>}
            {!isLogged && <Link to={'/login'}>Login</Link>}
            {!isLogged && <Link to={'/register'}>Register</Link>}
        </div>
    )
}

export default Header