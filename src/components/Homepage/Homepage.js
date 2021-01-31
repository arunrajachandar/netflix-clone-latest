import React from "react";
import Row from "../Row/Row";
import Banner from "../Banner/Banner";
import requests from "../../apis/request";
import { useSelector } from "react-redux";

function Homepage() {
  const trending_now = useSelector((state) => state.trending_now.data);

  return (
    <React.Fragment>
      <Banner />
      <Row
        title={"Trending Now"}
        // path={requests.fetchNetflixOriginals}
        isLargeRow
        ignoreLocalData
        moviesList={trending_now}
      />
      <Row title={"Action Movies"} path={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} path={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} path={requests.fetchHorrorMovies} />
      <Row title={"Documentaries"} path={requests.fetchDocumentaries} />
      <Row title={"Romance"} path={requests.fetchRomanceMovies} />
    </React.Fragment>
  );
}

export default Homepage;
