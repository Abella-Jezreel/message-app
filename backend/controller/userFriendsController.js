import User from "../models/userModel.js";

export const getFriends = async (req, res) => {
  console.log("getFriends");
  try {
    // Exclude the user with the same ID as the request user
    const email = req.email;
    console.log(email, 'email');
    const friendGet = await User.find({ email: { $ne: email } });
    console.log(friendGet);
    res.status(200).json({ success: true, friends: friendGet });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
