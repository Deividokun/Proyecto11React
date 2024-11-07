import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './movieDetail.css'
function MovieDetail() {
  const { id } = useParams()
  const [movieDetails, setMovieDetail] = useState([])
  // Uso mínimo de 3 estados con un sentido lógico, no usarlos por usarlos

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      // Uso mínimo de una petición a una API para recoger unos datos
      .then((res) => res.json())
      .then((res) => setMovieDetail(res))
      .catch((error) => console.error('Error fetching data:', error))
  }, [id])
  // Uso mínimo de un useEffect
  return (
    <div className='movieDetail'>
      {movieDetails ? (
        <>
          <div className='img_wrp'>
            <h1>{movieDetails.name}</h1>
            <img src={movieDetails.image} alt={movieDetails.name} />
          </div>
          <div className='parraf'>
            <h2>Origen:</h2>
            <p>{movieDetails.race}</p>
            <h2>Quien es:</h2>
            <p>{movieDetails.description}</p>
          </div>
        </>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  )
}

export default MovieDetail
