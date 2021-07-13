import React, { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import "./MisPublicaciones.css";

export default function MisPublicaciones() {
  const { user } = useContext(AuthContext);
  const [tweet, setTweet] = useState("");

  const handleChange = (e) => {
    setTweet(e.target.textContent);
  };
  const crearTeet = async () => {
    const data = {
      username: user.name,
      id_user: user.id,
      comment: tweet,
    };

    const response = await fetch(`http://localhost:4000/api/tweet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(data),
    });

    if (response.ok === true) {
      console.log("tweet creado");
    } else console.log("error");
  };

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
              <span
                contentEditable="true"
                suppressContentEditableWarning={true}
                value={tweet}
                onInput={(e) => handleChange(e)}
              >
                What’s happening
              </span>
              <div className="header-btn">
                <div className="header-icons">
                  <i className="fa fa-picture-o  "></i>
                  <i className="fa fa-square-o  "></i>
                  <i className="fa fa-bar-chart  "></i>
                  <i className="fa fa-smile-o"></i>
                  <i className="fa fa-calendar"></i>
                </div>
                <div className="btn-tweet">
                  <span className="span-btn" onClick={crearTeet}>
                    Tweet
                  </span>
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
