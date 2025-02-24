import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEllipsisH, FaEdit, FaSistrix } from "react-icons/fa";
import ActiveFriend from "./ActiveFriend";
import Friends from "./Friends";
import RightSide from "./RightSide";
import Image2x2 from "../images/2x2.jpg";
import { getFriends } from "../store/action/messengerAction";

const Messenger = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth.myInfo);
  console.log(email);
  useEffect(() => {
    dispatch(getFriends(email));
  }, [dispatch, email]);

  return (
    <div className="messenger">
      <div className="row">
        <div className="col-3">
          <div className="left-side">
            <div className="top">
              <div className="image-name">
                <div className="image">
                  <img src={Image2x2} alt="" />
                </div>
                <div className="name">
                  <h3> Hi Daddy Love </h3>
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
              <div className="hover-friend active">
                <Friends />
              </div>

              <div className="hover-friend">
                <Friends />
              </div>

              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>

              <div className="hover-friend">
                <Friends />
              </div>

              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
            </div>
          </div>
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default Messenger;
