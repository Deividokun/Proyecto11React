import { Route, Routes } from 'react-router-dom'
import './App.css'
import Favourite from './components/favoritos/favourite'
import Home from './components/home/home'
import MovieDetail from './components/movieDetail/movieDetail'
import Header from './Header/Header'

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Favourite' element={<Favourite />} />
          <Route path='/MovieDetail/:id' element={<MovieDetail />} />
          {/* Uso de React Router, declaración de rutas y acceder a ellas mediante
          Links, además, mínimo una ruta permite recibir un parámetro, el
          componente renderizado por esa ruta utilizará el parámetro enviado con
          alguna finalidad */}
        </Routes>
      </div>
    </>
  )
}

export default App
