import React from "react";
import Grid from "../Grid/Grid";
import classes from "./Wishlist.module.scss";
// import requests from "../../apis/request";
import { useSelector } from "react-redux";

function Wishlist() {
  const movies = useSelector((state) => state.wishList.movieDetails);
  return (
    <div className={classes.Wishlist}>
      {<Grid title={"Wishlist"} moviesList={movies} ignoreLocalData />}
    </div>
  );
}

export default Wishlist;
