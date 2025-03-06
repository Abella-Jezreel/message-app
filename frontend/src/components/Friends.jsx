import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
const Friends = ({ name, image }) => {
  const { username } = useSelector((state) => state.auth.myInfo);
  const imageUrl = `${process.env.REACT_APP_BACKEND_URL}/images/${image}`;
  console.log(username, "username");
  console.log(imageUrl, "imageUrl");
  return (
    name !== username && (
      <div className="friend">
        <div className="friend-image">
          <div className="image">
            <img src={imageUrl} alt="" />
          </div>
        </div>
        <div className="friend-name-seen">
          <div className="friend-name">
            <h4>{name}</h4>
          </div>
        </div>
      </div>
    )
  );
};

Friends.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Friends;
