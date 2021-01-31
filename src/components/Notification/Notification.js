import React from "react";
import classes from "./Notification.module.scss";
import NetflixProfile from "../../assests/imgs/netflix-custom.png";
import "../../typography.scss";

function Notification({ hovered }) {
  return (
    <div
      className={`${classes.notification} ${
        hovered && classes.notificationAppear
      }`}
    >
      <ul className={classes.notification__list}>
        <li
          className={`${classes.notification__item} ${classes.notification__itemOuter}`}
        >
          <ul className={classes.notification__list}>
            <li className={classes.notification__item}>
              <a href="#?" className={classes.notification__link}>
                <div className={classes.notification__profileContainer}>
                  <img
                    src={NetflixProfile}
                    alt="profile img"
                    className={classes.notification__profilePic}
                  />
                  <h2 className={classes.notification__profileName}>Arun</h2>
                </div>
              </a>
            </li>
            <li className={classes.notification__item}>
              <a href="#?" className={classes.notification__link}>
                <div className={classes.notification__profileContainer}>
                  <img
                    src={NetflixProfile}
                    alt="profile img"
                    className={classes.notification__profilePic}
                  />
                  <h2 className={classes.notification__profileName}>Arun</h2>
                </div>
              </a>
            </li>
            <li className={classes.notification__item}>
              <a href="#?" className={classes.notification__link}>
                <div className={classes.notification__profileContainer}>
                  <img
                    src={NetflixProfile}
                    alt="profile img"
                    className={classes.notification__profilePic}
                  />
                  <h2 className={classes.notification__profileName}>Arun</h2>
                </div>
              </a>
            </li>
          </ul>
        </li>

        <li
          className={`${classes.notification__item} ${classes.notification__itemOuter}`}
        >
          <a href="#?" className={classes.notification__link}>
            Settings
          </a>
        </li>
        <li
          className={`${classes.notification__item} ${classes.notification__itemOuter}`}
        >
          <a href="#?" className={classes.notification__link}>
            Privacy
          </a>
        </li>
        <li
          className={`${classes.notification__item} ${classes.notification__itemOuter}`}
        >
          <a href="#?" className={classes.notification__link}>
            Terms and Conditions
          </a>
        </li>

        <li
          className={`${classes.notification__item} ${classes.notification__itemOuter}`}
        >
          <a href="#?" className={`${classes.notification__link} text-bold`}>
            Sign Out of Netflix
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Notification;
