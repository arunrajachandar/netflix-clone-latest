import React, { useReducer, useEffect, useState } from "react";
import classes from "./Nav.module.scss";
import NetflixProfile from "../../assests/imgs/netflix-custom.png";
import Notification from "../Notification/Notification";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { captureKeyword } from "../../store/searchResult/searchResultsActionCreators";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

const hoveringState = (state, action) => {
  switch (action.type) {
    case "HOVERING":
      return !state;
    default:
      return state;
  }
};

function Nav({ history, location }) {
  const [header, setHeader] = useState(false);
  const [profileHovered, setProfileHovered] = useReducer(hoveringState, false);
  const [searchHovered, setSearchHovered] = useReducer(hoveringState, false);
  const profileHovering = (e) => setProfileHovered({ type: "HOVERING" });

  const keyword = useSelector((state) => state.searchResult);
  const dispatch = useDispatch();

  const listenScrollEvent = (event) => {
    if (window.scrollY > 100) {
      return setHeader(true);
    } else return setHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className={`${classes.Nav}  ${header && classes.Nav__Black}`}>
      {location.pathname !== "/" && (
        <button
          className={`${classes.Nav__link} ${classes.Nav__linkBorder} ${classes.Nav__search}`}
          onClick={(e) => {
            history.goBack();
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      )}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix logo"
        className={`${classes.Nav__logo}`}
        onClick={(e) => {
          history.push("/");
        }}
      />
      <div className={`${classes.Nav__container} ${classes.Nav__link}`}>
        <input
          type="text"
          name="search"
          placeholder="search for movies, series"
          className={`${classes.Nav__input} ${classes.Nav__Input} ${
            searchHovered && classes.Nav__inputExpand
          } `}
          onChange={(e) => {
            //   e.preventDefault();
            history.push("/search_results");
            dispatch(captureKeyword(e.target.value));
          }}
        />
        <NavLink
          to="/search_results"
          className={` ${classes.Nav__search} ${classes.Nav__Input} ${
            searchHovered && classes.Nav__searchBlack
          }`}
          onMouseEnter={(e) => {
            //   e.preventDefault();
            if (!keyword) {
              setSearchHovered({ type: "HOVERING" });
            }
          }}
          onMouseLeave={(e) => {
            //   e.preventDefault();
            if (keyword) {
              setSearchHovered({ type: "HOVERING" });
            }
          }}
          onClick={(e) => {
            //   e.preventDefault();
            if (!keyword) {
              setSearchHovered({ type: "HOVERING" });
            }
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </NavLink>
      </div>
      <NavLink
        to="/category/wishList"
        className={`${classes.Nav__link} ${classes.Nav__wishlist}`}
      >
        WishList
      </NavLink>
      <img
        src={NetflixProfile}
        alt="profile img"
        className={`${classes.Nav__profilePic}`}
        onMouseEnter={() => profileHovering()}
        onClick={() => profileHovering()}
      />
      {<Notification hovered={profileHovered} />}
    </div>
  );
}

export default withRouter(Nav);
