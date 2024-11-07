import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {
  const [movies, setMovies] = useState([])
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  )

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then((res) => res.json())
      .then((res) => setMovies(res.items))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const toggleFavourite = (movie) => {
    const isFavorite = favorites.some((fav) => fav.id === movie.id)
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.id !== movie.id)
      : [...favorites, movie]

    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  return (
    <section className='character-list'>
      {movies.map((movie) => (
        <article className='card' key={movie.id}>
          <div className='card2'>
            <Link to={`/MovieDetail/${movie.id}`}>
              <h2>{movie.name}</h2>
              <img src={movie.image} alt={`Imagen de ${movie.name}`} />
            </Link>
            <button onClick={() => toggleFavourite(movie)}>
              {favorites.some((fav) => fav.id === movie.id)
                ? 'Eliminar de favoritos'
                : 'Añadir a favoritos'}
            </button>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Home
