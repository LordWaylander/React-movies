import React from "react";
import ButtonAdd from './buttonAdd'
import ButtonHeart from "./buttonHeart";

function Card(props) {
  let setDataFromChild = props.updateData
  let movie = props.movie;
  let movieGenre = props.movieGenre;

  function dateFormat(date) {
    let [yy, mm, dd] = date.split('-')
    return [dd, mm, yy].join('/');
  }

  function genres(idGenre){
    let genresArray = [];
    for (let i = 0; i < idGenre.length; i++) {
      for (let j = 0; j < movieGenre.length; j++) {
        if (idGenre[i] === movieGenre[j].id) {
          genresArray.push(movieGenre[j].name)
        }
      }
    }
    return genresArray.map(genre => <li key={genre}>{genre}</li>);
  }

  return(
    
    <div className="card">
      <img src={ movie.poster_path ?
        'https://image.tmdb.org/t/p/w500/'+movie.poster_path : './img/poster.jpg'} alt="affiche du film"
      />

      <h2>{movie.title}</h2>
      {movie.release_date 
        ? <h5>Sorti le {dateFormat(movie.release_date)}</h5> 
        : <h5>date inconnue</h5>}

      <h4>{movie.vote_average}/10 <span>&#127775;</span></h4>
      <ul>
        {movie.genre_ids 
        ? genres(movie.genre_ids)
        : movie.genres.map((genre, index) => <li key={index}>{genre.name}</li>)
        }
      </ul>

      { movie.overview 
        ? <h3>Synopsis</h3>
        : '' }
      <p>{movie.overview}</p>

        {props.button ? <ButtonAdd movie={movie} /> : <ButtonHeart movie={movie} updateData={setDataFromChild}/>}
      
    </div>
  )
}

export default Card;