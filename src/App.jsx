import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import DetalleBlog from './Pages/Home/DetalleBlog.jsx'

function App() {

  return ( 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/:id" element={<DetalleBlog />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
