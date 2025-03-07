import React from "react";
import { FaPhoneAlt, FaVideo, FaRocketchat } from "react-icons/fa";
import MessageSend from "./MessageSend";
import Message from "./Message";
import FriendInfo from "./FriendInfo";
import PropTypes from "prop-types";

const RightSide = ({ name, image, inputHandler, newMessage, sendMessage }) => {
  const imageUrl = `${process.env.REACT_APP_BACKEND_URL}/images/${image}`;
  return (
    <div className="col-9">
      <div className="right-side">
        <input type="checkbox" id="dot" />
        <div className="row">
          <div className="col-8">
            <div className="message-send-show">
              <div className="header">
                <div className="image-name">
                  <div className="image">
                    <img src={imageUrl} alt="" />
                  </div>
                  <div className="name">
                    <h3> {name} </h3>
                  </div>
                </div>
                <div className="icons">
                  <div className="icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="icon">
                    <FaVideo />
                  </div>
                  <div className="icon">
                    <label htmlFor="dot">
                      {" "}
                      <FaRocketchat />{" "}
                    </label>
                  </div>
                </div>
              </div>
              <Message />
              <MessageSend
                newMessage={newMessage}
                inputHandler={inputHandler}
                sendMessage={sendMessage}
              />
            </div>
          </div>
          <div className="col-4">
            User About Page <FriendInfo image={imageUrl} name={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

RightSide.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
  newMessage: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
};
export default RightSide;
