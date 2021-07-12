import React from "react";
import "./MisPublicaciones.css";
export default function MisPublicaciones() {

  
  return (
    <div>
      <div className="container-publi">
        <div className="header-publi">
          <div className="header-nav">
            <h2>Home</h2>
          </div>
          <div className="header-body">
            <img
              src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
              alt=""
            />
            <div className="tweet">
              {/* <p>What’s happening?</p> */}
              <span contenteditable="true">What’s happening?</span>
              <div className="header-btn">
                <div className="header-icons">
                  <i class="fa fa-picture-o  "></i>
                  <i class="fa fa-square-o  "></i>
                  <i class="fa fa-bar-chart  "></i>
                  <i class="fa fa-smile-o"></i>
                  <i class="fa fa-calendar"></i>
                </div>
                <div className="btn-tweet">
                  <span className="span-btn">Tweet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mensaje_nuevo">
          <h2>Welcome to Twitter!</h2>
          <p>
            This is the best place to see what’s happening in your world. Find
            some people and topics to follow now
          </p>
          <div className="btn-tweet btn-nuevo">
            <span className="span-btn ">Let’s go!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
