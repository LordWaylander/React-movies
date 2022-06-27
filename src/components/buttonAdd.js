import React from "react";

function buttonAdd (props) {
  let movie = props.movie

  const addStorage = () => {
    let storeData = window.localStorage.movies ? window.localStorage.movies.split(',') : [];

    if (!storeData.includes(movie.id.toString())) {
      storeData.push(movie.id)
      window.localStorage.movies = storeData
    }
  }

  return(
    <div className="btn" onClick={() => addStorage()}>Ajouter aux coups de coeurs</div>
  )
}

export default buttonAdd