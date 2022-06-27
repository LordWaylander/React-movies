import React from "react";

function buttonHeart (props) {
  let updateData = props.updateData;
  let movie = props.movie

  const removeStorage = () => {
    
    let storeData = window.localStorage.movies.split(',');

    let indexMovie = storeData.indexOf(movie.id.toString());
    storeData.splice(indexMovie, 1);
    window.localStorage.movies = storeData;
    updateData(movie.id);
  }

  return(
    <div className="btn" onClick={() => removeStorage()}>Retirer des cours de coeurs</div>
  )
}

export default buttonHeart