import { toast } from "react-toastify";
import { useState } from "react";
const Register = () => {

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user === "" || email === "" || date === "" || password === "" || password2 === "") {
            toast.error("Por favor, rellene todos los campos")
        } else {
            if(password === password2){
                const data = {
                    user,
                    email,
                    date,
                    password
                }
                console.log(data);
                toast.success("Usuario registrado")
            } else{
                toast.error("Las contraseñas no coinciden")
            }
        }
    }

    return (
        <div className="contenedor">
            <form onSubmit={{}} className="form">
                <h3>Register</h3>
                <div className="input">
                <label htmlFor="user" className="label">Usuario</label>
                    <input 
                    type="text" 
                    id="user"
                    onChange={(e) => setUser(e.target.value)}/>
                </div>
                <div className="input">
                    <label htmlFor="email" className="label">E-mail</label>
                    <input 
                    type="email" 
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input">
                    <label htmlFor="date" className="label">Fecha de Nacimiento</label>
                    <input 
                    type="date" 
                    id="date"
                    onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div className="input">
                    <label htmlFor="password" className="label">Contraseña</label>
                    <input 
                    type="password" 
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="input">
                    <label htmlFor="password2" className="label">Repetir Contraseña</label>
                    <input 
                    type="password" 
                    id="password2"
                    onChange={(e) => setPassword2(e.target.value)}/>
                </div>
                <button type="submit" className="boton" onClick={(e) => handleSubmit(e)}>Registrarse</button>
            </form>
        </div>
    )
}

export default Register