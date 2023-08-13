import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Banner.css";
import { imageUrl } from "../../constants/constants";



const Banner = (props) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        const movieArray = response.data.results;
        console.log(movieArray);
        const randomIndex = Math.floor(Math.random() * movieArray.length); // Generate a random index
        const fetchedMovie = movieArray[randomIndex];
        setMovie(fetchedMovie);
      });
  }, []);


  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className="banner">
      <div className="content">
        {movie ? (
          <>
            <h1 className="title">{movie.original_title}</h1>
            <div className="banner-buttons">
              <button className="button">Play</button>
              <button className="button">List</button>
            </div>
            <h1 className="description">{movie.overview}</h1>
          </>
        ) : null}
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
