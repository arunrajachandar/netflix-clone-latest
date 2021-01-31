import React from "react";
import classes from "./SearchResultGrid.module.scss";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Grid from "../Grid/Grid";

function SearchResultGrid() {
  const keyword = useSelector((state) => state.searchResult?.keyword);

  const movies = useSelector((state) =>
    state.trending_now?.data.filter(
      (movie) =>
        movie.title?.toLowerCase()?.includes(keyword?.toLowerCase()) ||
        movie.name?.toLowerCase()?.includes(keyword?.toLowerCase())
    )
  );

  return (
    <div className={classes.SearchResultGrid}>
      {keyword ? (
        movies.length ? (
          <Grid title={"Search Results"} moviesList={movies} ignoreLocalData />
        ) : (
          <h2 className={classes.SearchResultGrid__message}>
            No result found for {keyword}
          </h2>
        )
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}

export default SearchResultGrid;
