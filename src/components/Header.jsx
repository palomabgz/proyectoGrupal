import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import "./Header.css"
const Header = () => {
    const {isLogged, setIsLogged} = useContext(AuthContext)

    const links = [{to: '/', text: 'Home'}]
    const linksLogin = [{to: '/mis-blogs', text: 'Blogs'}, {to:"/crear-blog", text:"Crear Blog"}]
    const linksLogout = [{to: '/login', text: 'Login'}, {to: '/register', text: 'Register'}]

    return (
        <nav className="topnav">
            <div className="links-start">
                {links.map((link) => (
                    <Link key={link.to} to={link.to}>{link.text}</Link>
                ))}
            </div>
            <div className="links-end">
                {isLogged && linksLogin.map((link) => (
                    <Link key={link.to} to={link.to}>
                        {link.text}
                    </Link>
                ))}
                {isLogged && <a onClick={() => setIsLogged(false)}>Cerrar Sesión</a>}
                {!isLogged && linksLogout.map((link) => (
                    <Link key={link.to} to={link.to}>
                        <FontAwesomeIcon icon={faHouse} className="icon"></FontAwesomeIcon>
                        {link.text}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Header