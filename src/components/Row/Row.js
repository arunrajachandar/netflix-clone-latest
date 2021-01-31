import React, { useEffect, useState, useRef } from "react";
import Card from "../Card/Card";
import axios from "../../apis/axios";
import classes from "./Row.module.scss";
import "../../typography.scss";
import { NavLink } from "react-router-dom";

const SCROLL_OFFSET = 200;

function Row({ title, path, isLargeRow, ignoreLocalData, moviesList }) {
  const [movies, setMovies] = useState([]);

  const rowRef = useRef(null);

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(path);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [path]);

  const handleNav = (direction) => {
    if (direction === "SCROLL_LEFT") {
      return rowRef ? (rowRef.current.scrollLeft -= SCROLL_OFFSET) : null;
    } else {
      return rowRef ? (rowRef.current.scrollLeft += SCROLL_OFFSET) : null;
    }
  };

  const listenScroll = (e) => {
    setScrollValue(rowRef.current.scrollLeft);
  };

  return (
    <div className={classes.Row}>
      <NavLink
        to={`/category/${title.toLocaleLowerCase().replace(" ", "_")}`}
        className={`${classes.Row__title} heading-secondary`}
      >
        <span>{title}</span>
        <span className={classes.Row__titleSymbol}>&#10093;</span>
      </NavLink>
      <div
        className={`${classes.Row__Scroller} ${classes.Row__ScrollerLeft} ${
          scrollValue === 0 && classes.Row__ScrollerHidden
        }
          `}
        onClick={() => handleNav("SCROLL_LEFT")}
      >
        <span
          className={`${classes.Row__ScrollerText} ${
            isLargeRow && classes.Row__ScrollerText__largeRow
          }`}
        >
          &#60;
        </span>
      </div>

      <div
        className={classes.Row__poster}
        ref={rowRef}
        onScrollCapture={() => listenScroll()}
      >
        {ignoreLocalData
          ? moviesList?.map((movie) => (
              <Card movie={movie} key={movie?.id} isLargeRow={isLargeRow} />
            ))
          : movies?.map((movie) => (
              <Card movie={movie} key={movie?.id} isLargeRow={isLargeRow} />
            ))}
      </div>
      <div
        className={`${classes.Row__Scroller} ${classes.Row__ScrollerRight}
        ${scrollValue > 3500 && classes.Row__ScrollerHidden}`}
        onClick={() => handleNav("SCROLL_RIGHT")}
      >
        <span
          className={`${classes.Row__ScrollerText} ${
            isLargeRow && classes.Row__ScrollerText__largeRow
          }`}
        >
          &#62;
        </span>
      </div>
    </div>
  );
}

export default Row;
