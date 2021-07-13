import React, { useContext } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

export default function Menu() {
  const { user, dispatch } = useContext(AuthContext);
  const logoutUser = () => {
    dispatch({
      types: types.logout,
      payload: {
        name: "Nicolas Wong",
      },
    });
    // history.replace("/login");
  };

  return (
    <div>
      <div className="menu-container">
        <div className="menu-header item-no-mobil">
          <i className="fa fa-twitter fa-3x"></i>
        </div>

        <div className="menu-items">
          <ul>
            <Link to="/home">
              <li>
                <i className="fa fa-home fa-2x "></i>
                <a to="/">Home</a>
              </li>
            </Link>

            <li className="item-search">
              <i className="fa fa-search fa-2x"></i>
              <a to="/"></a>
            </li>
            <li className="item-no-mobil ">
              <i className="fa fa-hashtag fa-2x"></i>
              <a to="/">Explore</a>
            </li>
            <li>
              <i className="fa fa-bell-o fa-2x "></i>
              <a to="/">Notifications</a>
            </li>
            <li>
              <i className="fa fa-envelope-o fa-2x"></i>
              <a to="/">Messages</a>
            </li>
            <li className="item-no-mobil ">
              <i className="fa fa-user-o fa-2x"></i>
              <a to="/">Profile</a>
            </li>
            <li className=" item-no-mobil ">
              <i className="fa fa-ellipsis-h fa-2x"></i>
              <a to="/">More</a>
            </li>
            <div className="btn-tweet btn-tweet-menu item-no-mobil">
              <span className="span-btn">Tweet</span>
            </div>
          </ul>
        </div>

        <div className="menu-user item-no-mobil">
          <div className="user-info">
            <div className="user-img">
              <img
                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
                alt=""
              />
            </div>
            <div>
              <h4>{user.name}</h4>
              <p>@{user.name}56742850</p>
            </div>
            <div>
              <i className="fa fa-sign-out" onClick={logoutUser}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
