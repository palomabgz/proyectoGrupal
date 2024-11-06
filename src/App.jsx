import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import DetalleBlog from './pages/Home/DetalleBlog.jsx'
import AuthProvider from './context/AuthContext.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'

function App() {

  return (
      <AuthProvider>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} /> {/* todos los blogs - se consultan todos los habilitados*/}
            <Route path="/blogs/:id" element={<DetalleBlog />} /> {/* detalle de un blog - se consulta 1 */}
            {/* ABMC/CRUD = alta, baja, modificación y consulta */}
            <Route path='/crear-blog' element={<></>}/> {/*form alta*/}
            <Route path='/modificar-blog/:idblog' element={<></>}/> {/*modificación*/}
            <Route path='/mis-blogs/' element={<></>}/> {/*listado*/}
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
  )
}

export default App
