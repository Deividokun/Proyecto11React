import React, { useEffect, useState } from 'react'
import './favourite.css'

function Favourite() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
    setFavorites(savedFavorites)
  }, [])

  return (
    <section className='character-listt'>
      <h1 class='button'>Mis favoritos</h1>
      {favorites.length > 0 ? (
        <ul className='favourites-container'>
          {favorites.map((movie) => (
            <li className='card' key={movie.id}>
              <div className='card2'>
                <h2>{movie.name}</h2>

                <img src={movie.image} alt={`Imagen de ${movie.name}`} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className='no-favourites'>No tienes favoritos aún.</p>
      )}
    </section>
  )
}

export default Favourite
