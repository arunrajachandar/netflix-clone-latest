import React, { useState, useEffect } from "react";
import axios from "../../apis/axios";
import Card from "../Card/Card";
import classes from "./Grid.module.scss";

function Grid({ title, path, ignoreLocalData, moviesList }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(path);
      //   console.log(req);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [path]);

  return (
    <div className={classes.Grid}>
      <h1 className={`${classes.Grid__title} heading-primary`}>{title}</h1>
      <div className={classes.Grid__container}>
        {ignoreLocalData
          ? moviesList.map((movie) => (
              <Card movie={movie} key={movie.id} isGrid />
            ))
          : movies?.map((movie) => (
              <Card movie={movie} key={movie.id} isGrid />
            ))}
      </div>
    </div>
  );
}

export default Grid;
