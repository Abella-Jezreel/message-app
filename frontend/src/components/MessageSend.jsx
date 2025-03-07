import React from "react";
import {
  FaPlusCircle,
  FaFileImage,
  FaGift,
  FaPaperPlane,
} from "react-icons/fa";
import PropTypes from "prop-types";

const MessageSend = ({ inputHandler, newMessage, sendMessage }) => {
  const emojis = [
    "😀",
    "",
    "😄",
    "😁",
    "😆",
    "",
    "😂",
    "🤣",
    "😊",
    "",
    "🙂",
    "🙃",
    "😉",
    "",
    "😍",
    "😝",
    "😜",
    "🧐",
    "🤓",
    "😎",
    "😕",
    "🤑",
    "🥴",
    "😱",
  ];

  return (
    <div className="message-send-section">
      <input type="checkbox" id="emoji" />
      <div className="file hover-attachment">
        <div className="add-attachment">Add Attachment</div>
        <FaPlusCircle />
      </div>

      <div className="file hover-image">
        <div className="add-image">Add Image</div>
        <label htmlFor="pic">
          {" "}
          <FaFileImage />{" "}
        </label>
      </div>

      <div className="file hover-gift">
        <div className="add-gift">Add gift</div>
        <FaGift />
      </div>

      <div className="message-type">
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Aa"
          className="form-control"
          value={newMessage}
          onChange={inputHandler}
        />

        <div className="file hover-gift">
          <label htmlFor="emoji">
            {" "}
            <FaPaperPlane />{" "}
          </label>
        </div>
      </div>

      <div className="file" onClick={sendMessage}>
        ❤
      </div>

      <div className="emoji-section">
        <div className="emoji">
          {emojis.map((e, index) => (
            <span key={index}>{e}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

MessageSend.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  newMessage: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default MessageSend;
