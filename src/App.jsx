import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import DetalleBlog from './pages/Home/DetalleBlog.jsx'
import AuthProvider from './context/AuthContext.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import CrearBlog from './pages/Crear-Blog/CrearBlog.jsx'

function App() {

  return (
      <AuthProvider>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/blogs/:id" element={<DetalleBlog />} />
            <Route path='/crear-blog' element={<CrearBlog/>}/>
            <Route path='/modificar-blog/:idblog' element={<></>}/>
            <Route path='/mis-blogs/' element={<></>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
  )
}

export default App
