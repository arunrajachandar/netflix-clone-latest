import React, { useState } from "react";
import classes from "./Card.module.scss";
import "../../typography.scss";
import { useDispatch, useSelector } from "react-redux";
import { isAddedTrendings } from "../../store/Trendings/fetchTrendingsActionCreators";
import {
  pushMovies,
  removeMovies,
} from "../../store/Wishlist/WishListActionCreator";

const base_url = "https://image.tmdb.org/t/p/original/";

function Card({ movie, isLargeRow, isGrid }) {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  const onMouseEnter = (event) => {
    setHovered(true);
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
        <img
          src={`${base_url}${
            isLargeRow ? movie?.poster_path : movie?.backdrop_path
          }`}
          alt={movie?.name || movie?.title}
          className={`${classes.Card__posterImg} ${
            isLargeRow && classes.Card__posterImgLarge
          } ${isGrid && classes.Card__posterHoveredImgGrow} 
          ${hovered && classes.Card__posterHoveredImg}
          `}
        />
        {hovered && (
          <>
            <div
              className={`${classes.Card__posterInfo} ${
                hovered && classes.Card__posterInfoHovered
              } ${isGrid && classes.Card__posterInfoWidth} `}
            >
              <h1 className={`${classes.Card__posterTitle}`}>
                {movie?.title || movie?.name}
              </h1>
              <div className={classes.Card__posterDesc}>
                {truncate(movie?.overview, 100)}
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
