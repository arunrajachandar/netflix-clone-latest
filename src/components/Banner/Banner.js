import React, { useState, useEffect } from "react";
import axios from "../../apis/axios";
import requests from "../../apis/request";
import "../../typography.scss";

import classes from "./Banner.module.scss";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <div
      className={classes.Banner}
      style={{
        backgroundImage: `linear-gradient(180deg, transparent 20%,
            rgba(17,17,17, .5) 50%,
            rgb(17,17,17) 100%), url(${base_url}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className={classes.Banner__contents}>
        <h1 className={`heading-primary`}>
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className={classes.Banner__buttons}>
          <button className={classes.Banner__button}>
            <span>&#9658;</span>Play
          </button>
          <button className={classes.Banner__button}>
            <span>&#9776;</span>My List
          </button>
        </div>
        <div className={classes.Banner__desc}>
          {truncate(movie?.overview, 200)}
        </div>
      </div>
    </div>
  );
}

export default Banner;
