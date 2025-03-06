import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEllipsisH, FaEdit, FaSistrix } from "react-icons/fa";
import ActiveFriend from "./ActiveFriend";
import Friends from "./Friends";
import RightSide from "./RightSide";
import { getFriends } from "../store/action/messengerAction";

const Messenger = () => {
  const dispatch = useDispatch();
  const { email, username, image } = useSelector((state) => state.auth.myInfo);
  const { friends } = useSelector((state) => state.messengerFriends);
  const profileImageUrl = `${process.env.REACT_APP_BACKEND_URL}/images/${image
    .split("\\")
    .pop()}`;
  const [currentFriend, setCurrentFriend] = useState(null);
  console.log(email);

  const handleFriendClick = (friend) => {
    setCurrentFriend(friend);
  };

  useEffect(() => {
    dispatch(getFriends(email));
  }, [dispatch, email]);

  console.log(currentFriend, "currentFriend");

  return (
    <div className="messenger">
      <div className="row">
        <div className="col-3">
          <div className="left-side">
            <div className="top">
              <div className="image-name">
                <div className="image">
                  <img src={profileImageUrl} alt="" />
                </div>
                <div className="name">
                  <h3>{username}</h3>
                </div>
              </div>

              <div className="icons">
                <div className="icon">
                  <FaEllipsisH />
                </div>
                <div className="icon">
                  <FaEdit />
                </div>
              </div>
            </div>

            <div className="friend-search">
              <div className="search">
                <button>
                  {" "}
                  <FaSistrix />{" "}
                </button>
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                />
              </div>
            </div>

            <div className="active-friends">
              <ActiveFriend />
            </div>

            <div className="friends">
              {friends && friends.length > 0 ? (
                friends.map((friend) => (
                  <div
                    className="hover-friend active"
                    key={friend._id}
                    onClick={() => handleFriendClick(friend)}
                  >
                    <Friends
                      key={friend._id}
                      name={friend.username}
                      image={friend.image.split("\\").pop()}
                    />
                  </div>
                ))
              ) : (
                <div>No friends available</div>
              )}
            </div>
          </div>
        </div>
        {currentFriend ? (
          <RightSide
            name={currentFriend.username}
            image={currentFriend.image.split("\\").pop()}
          />
        ) : (
          "Please select a friend"
        )}
      </div>
    </div>
  );
};

export default Messenger;
