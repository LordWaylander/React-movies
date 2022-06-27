import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './cards';

function Form() {
  const [moviesData, setMoviesData] = useState([]);
  const [moviesGenre, setMoviesGenre] = useState([]);
  const [search, setSearch] = useState(['code']);
  const [sortGoodBad, setSortGoodBad] = useState(null);

  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=f9a3efe8c813e81a40a9b661bde37457&query=${search}&language=fr-FR&include_adult=true`
    )
    .then(res => setMoviesData(res.data.results))
  }, [search]);

  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=f9a3efe8c813e81a40a9b661bde37457&language=fr-FR`
    )
    .then(res => setMoviesGenre(res.data.genres))
  }, []);

  return (
    <div className="form-component">
      <div className='form-container'>
        <form>
          <input type="text" placeholder='Search' id="search-input" onChange={e => setSearch(e.target.value)}/>
          <input type="submit" value="Rechercher" />
        </form>

        <div className='btn-sort-container'>
          <div 
            className='btn-sort' 
            id="goodToBad" 
            onClick={(e => setSortGoodBad(e.target.id))}>
              Top<span>&#8594;</span>
          </div>
          <div 
            className='btn-sort' 
            id="badToGood" 
            onClick={(e => setSortGoodBad(e.target.id))}>
              Flop<span>&#8594;</span>
          </div>
        </div>
      </div>
      <div className='result'>
        {moviesData
          //.slice(0, 12)
          .sort((a, b) => {
            if (sortGoodBad === 'goodToBad') {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === 'badToGood') {
              return a.vote_average - b.vote_average;
            }else {
              return '';
            }
          })
          .map(movie  => (
            <Card key={movie.id} movie={movie} movieGenre={moviesGenre} button={'ADD'}/>
        ))}
      </div>
    </div>
  );
}
export default Form;