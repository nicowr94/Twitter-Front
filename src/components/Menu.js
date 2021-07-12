import React, { useContext } from "react";
import "./Menu.css";
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
            <li>
              <i class="fa fa-home fa-2x "></i>
              <a href="">Home</a>
            </li>
            <li className="item-search">
              <i class="fa fa-search fa-2x"></i>
              <a href=""></a>
            </li>
            <li className="item-no-mobil ">
              <i class="fa fa-hashtag fa-2x"></i>
              <a href="">Explore</a>
            </li>
            <li>
              <i class="fa fa-bell-o fa-2x "></i>
              <a href="">Notifications</a>
            </li>
            <li>
              <i class="fa fa-envelope-o fa-2x"></i>
              <a href="">Messages</a>
            </li>
            <li className="item-no-mobil ">
              <i class="fa fa-user-o fa-2x"></i>
              <a href="">Profile</a>
            </li>
            <li className=" item-no-mobil ">
              <i class="fa fa-ellipsis-h fa-2x"></i>
              <a href="">More</a>
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
              <h4>Nicolas</h4>
              <p>@Nicolas56742850</p>
            </div>
            <div>
              <i class="fa fa-sign-out" onClick={logoutUser}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
