import React, { useState } from "react";
import classes from "./Card.module.scss";
import "../../typography.scss";
import { useDispatch } from "react-redux";
import { isAddedTrendings } from "../../store/Trendings/fetchTrendingsActionCreators";
import {
  pushMovies,
  removeMovies,
} from "../../store/Wishlist/WishListActionCreator";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Card({ movie, isLargeRow, isGrid }) {
  const [hovered, setHovered] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const dispatch = useDispatch();
  const fetchVideoId = async () => {
    if (trailerUrl) {
      setTrailerUrl("");
    }
    try {
      const req = await movieTrailer(
        movie?.name || movie?.original_name || "" || movie?.title
      );
      const urlParams = await new URLSearchParams(new URL(req).search);
      // console.log(urlParams.get("v"));
      setTrailerUrl(urlParams.get("v"));
      return req;
    } catch (error) {
      console.log(error);
    }
  };

  const opts = {
    height: "200px",
    width: "100%",
    // playerVars: {
    //   // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    // },
  };
  const onMouseEnter = (event) => {
    setHovered(true);
    fetchVideoId();
  };

  const onMouseLeave = (event) => {
    setHovered(false);
  };

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  const addToWishList = (movie) => {
    dispatch(isAddedTrendings(movie?.id));
    if (movie?.isAdded === undefined || movie?.isAdded === true) {
      dispatch(pushMovies(movie));
    } else {
      dispatch(removeMovies(movie));
    }
  };
  return (
    <React.Fragment>
      <div
        className={classes.Card}
        onMouseEnter={() => onMouseEnter()}
        onMouseLeave={() => onMouseLeave()}
      >
        {hovered && trailerUrl && (
          <div className={classes.Card__Bgvideo}>
            <YouTube videoId={trailerUrl} opts={opts} />
          </div>
        )}
        <img
          src={`${base_url}${
            isLargeRow ? movie?.poster_path : movie?.backdrop_path
          }`}
          alt={movie?.name || movie?.title}
          className={`${classes.Card__posterImg} 
          ${isLargeRow && classes.Card__posterImgLarge}
           ${isGrid && classes.Card__posterHoveredImgGrow} 
     ${
       hovered &&
       (classes.Card__posterHoveredImg ||
         (trailerUrl && classes.Card__posterHoveredImgTrailer))
     }              
    
     `}
        />

        {hovered && (
          <>
            <div
              className={`${classes.Card__posterInfo}
               ${hovered && classes.Card__posterInfoHovered} 
               ${
                 hovered &&
                 trailerUrl &&
                 classes.Card__posterInfoHoveredIsTrailerUrl
               } 

               ${isGrid && classes.Card__posterInfoWidth} `}
            >
              <h1 className={`${classes.Card__posterTitle}`}>
                {movie?.title || movie?.name}
              </h1>
              <div
                className={`${classes.Card__posterDesc} ${
                  trailerUrl && classes.Card__posterDescHidden
                }`}
              >
                {truncate(movie?.overview, 80)}
              </div>
            </div>
            <div className={classes.Card__buttons}>
              <button className={classes.Card__button}>&#10010;</button>
              <button className={classes.Card__button}>&#9825;</button>
              <button className={classes.Card__button}>&#8505;</button>
              <button
                className={`${classes.Card__button} ${
                  movie?.isAdded && classes.Card__buttonBgWhite
                }`}
                onClick={() => addToWishList(movie)}
              >
                {movie?.isAdded ? <span>&#10007;</span> : <span>&#10004;</span>}
              </button>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default Card;
