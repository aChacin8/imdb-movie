import React from 'react';
import { Link } from 'react-router-dom';


function Playlist({ playlist }) {
  if (playlist.length === 0) {
    return <p>No has agregado películas a tu lista de reproducción.</p>;
  }

  return (
    <div className="playlist">
      <h2>Tu lista de reproducción</h2>
      <div className="movie-grid">
        {playlist.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;