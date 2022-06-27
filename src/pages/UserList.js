import axios from "axios";
import { React, useEffect, useState } from "react";
import Header from "../components/header";
import Card from '../components/cards';

function UserList() {

  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies 
      ? window.localStorage.movies.split(",") 
      : [];


    for (let i = 0; i <= moviesId.length; i++) {
      axios.get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=f9a3efe8c813e81a40a9b661bde37457&language=fr-FR`
        )
        .then((result) => setListData((listData) => ([...listData, result.data])))
    } 
  }, [])

  // mise en update de la page
  const setDataFromChild = (movieID) => {
    setListData(listData.filter((element => element.id !== movieID)));
  }

    return (
      <div className="user-list-page">
        <Header />
        <h2>Coups de coeur 💖</h2>
        <div className="result">
          { listData.length > 0 
            ? (listData.map((movie) => <Card key={movie.id} movie={movie} updateData={setDataFromChild}/>))
            : ( <h2>Pas de coups de coeurs !</h2>)
          }
        </div>
      </div>
    );
}

export default UserList