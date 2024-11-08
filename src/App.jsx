import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import AuthProvider from './context/AuthContext.jsx'
import DetalleBlog from './pages/home/DetalleBlog.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import CrearBlog from './pages/crear-blog/CrearBlog.jsx'
import MisBlogs from './pages/mis-blogs/MisBlogs.jsx'
import ModificarBlog from './pages/modificar-blog/ModificarBlog.jsx'

function App() {

  return (
      <AuthProvider>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/blogs/:id" element={<DetalleBlog />} />
            <Route path='/crear-blog' element={<CrearBlog/>}/>
            <Route path='/modificar-blog/:idblog' element={<ModificarBlog/>}/>
            <Route path='/mis-blogs/' element={<MisBlogs/>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
  )
}

export default App
