import React from "react";
import classes from "./IndividualCategoryGrid.module.scss";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Grid from "../Grid/Grid";

function IndividualMovieGrid({
  match: {
    params: { categoryType },
  },
}) {
  const movies = useSelector((state) =>
    state[categoryType] ? state[categoryType].data : null
  );

  return (
    <div className={classes.IndividualCategoryGrid}>
      {movies.length ? (
        <Grid
          title={categoryType
            ?.split("_")
            ?.map(
              (word) =>
                word[0]?.toUpperCase() + word?.substring(1, word?.length)
            )
            .join(" ")}
          moviesList={movies}
          ignoreLocalData
        />
      ) : (
        <h1 className={classes.IndividualCategoryGrid__message}>
          No movies available in Grid View
        </h1>
      )}
    </div>
  );
}

export default withRouter(IndividualMovieGrid);
