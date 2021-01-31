import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";
import Nav from "./components/Nav/Nav";
import Homepage from "./components/Homepage/Homepage";
import Wishlist from "./components/Wishlist/Wishlist";
import IndividualCategoryGrid from "./components/IndividualCategoryGrid/IndividualCategoryGrid";
import SearchResultGrid from "./components/SearchResultGrid/SearchResultGrid";

import { connect } from "react-redux";
import requests from "./apis/request";
import { fetchData } from "./store/NetflixOriginals/fetchNetflixOriginalsActionCreators";
import { fetchActionsInit } from "./store/ActionMovies/fetchActionMoviesActionCreators";
import { fetchTopRatedInit } from "./store/TopRatedMovies/fetchTopRatedActionCreators";
import { fetchTrendingsInit } from "./store/Trendings/fetchTrendingsActionCreators";

function App({
  fetchNetflixOriginals,
  fetchActionMovies,
  fetchTopRatedMovies,
  fetchTrendings,
}) {
  useEffect(() => {
    fetchNetflixOriginals(requests.fetchNetflixOriginals);
    fetchActionMovies(requests.fetchActionMovies);
    fetchTopRatedMovies(requests.fetchTopRated);
    fetchTrendings(requests.fetchTrending);
    return () => {};
  }, [
    fetchNetflixOriginals,
    fetchActionMovies,
    fetchTopRatedMovies,
    fetchTrendings,
  ]);
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/wishlist" component={Wishlist} />
        <Route
          path="/category/:categoryType"
          component={IndividualCategoryGrid}
        />
        <Route path="/search_results" component={SearchResultGrid} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

const dispatchActions = (dispatch) => {
  return {
    fetchNetflixOriginals: (path) => dispatch(fetchData(path)),
    fetchActionMovies: (path) => dispatch(fetchActionsInit(path)),
    fetchTopRatedMovies: (path) => dispatch(fetchTopRatedInit(path)),
    fetchTrendings: (path) => dispatch(fetchTrendingsInit(path)),
  };
};

export default connect(null, dispatchActions)(App);
