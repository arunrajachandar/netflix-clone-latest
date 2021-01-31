import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import createReduxSaga from "redux-saga";

import { fetchNetflixOriginalsReducer } from "./store/NetflixOriginals/fetchNetflixOriginalsReducer";
import wishlistReducer from "./store/Wishlist/WishListReducer";
import searchResultReducer from "./store/searchResult/searchResultReducer";

import { fetchActionMoviesSagaListener } from "./store/ActionMovies/fetchActionMoviesSagaListener";
import { fetchActionMoviesActionReducer } from "./store/ActionMovies/fetchActionMoviesReducer";

import { fetchTopRatedSagaListener } from "./store/TopRatedMovies/fetchTopRatedSagaListener";
import { fetchTopRatedReducer } from "./store/TopRatedMovies/fetchTopRatedReducer";

import { fetchTrendingsSagaListener } from "./store/Trendings/fetchTrendingsSagaListener";
import { fetchTrendingsReducer } from "./store/Trendings/fetchTrendingsReducer";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const sagaInstance = createReduxSaga();

const rootReducer = combineReducers({
  netflix_originals: fetchNetflixOriginalsReducer,
  action_movies: fetchActionMoviesActionReducer,
  trending_now: fetchTrendingsReducer,
  top_rated: fetchTopRatedReducer,
  wishList: wishlistReducer,
  searchResult: searchResultReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaInstance))
);

sagaInstance.run(fetchActionMoviesSagaListener);
sagaInstance.run(fetchTopRatedSagaListener);
sagaInstance.run(fetchTrendingsSagaListener);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
