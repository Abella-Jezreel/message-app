import React from "react";
// import Image2x2 from "../images/2x2.jpg";
import PropTypes from "prop-types";
const Friends = ({ name, image }) => {
  console.log(name, "friend");
    const imageUrl = `http://localhost:5000/images/${image}`;
  console.log(image, "image");
  console.log(imageUrl, "imageUrl");
  return (
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
  );
};

Friends.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Friends;
