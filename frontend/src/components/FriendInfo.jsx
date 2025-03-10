import React from "react";
import { FaCaretSquareDown } from "react-icons/fa";
import Image2x2 from "../images/2x2.jpg";
import PropTypes from "prop-types";

const FriendInfo = ({ image, name }) => {
  return (
    <div className="friend-info">
      <input type="checkbox" id="gallery" />
      <div className="image-name">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="active-user">Active</div>
        <div className="name">
          <h4>{name}</h4>
        </div>
      </div>
      <div className="others">
        <div className="custom-chat">
          <h3>Customize Chat </h3>
          <FaCaretSquareDown />
        </div>
        <div className="privacy">
          <h3>Privacy and Support </h3>
          <FaCaretSquareDown />
        </div>
        <div className="media">
          <h3>Shared Media </h3>
          <label htmlFor="gallery">
            {" "}
            <FaCaretSquareDown />{" "}
          </label>
        </div>
      </div>
      <div className="gallery">
        <img src={Image2x2} alt="" />
        <img src={Image2x2} alt="" />
        <img src={Image2x2} alt="" />
        <img src={Image2x2} alt="" />
      </div>
    </div>
  );
};

FriendInfo.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default FriendInfo;
