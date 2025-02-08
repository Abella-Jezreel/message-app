import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../store/action/authAction";

const Register = () => {
  const [user, setUserState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  const [loadImage, setLoadImage] = useState(null);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserState({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword, image } = user;
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      console.log("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      console.log("Password and Confirm Password must be same");
      return;
    }
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);

    dispatch(userRegister(formData));
  };

  const fileHandler = (e) => {
    const { name, files } = e.target;
    if (files.length !== 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setLoadImage(reader.result);
        setUserState((prevState) => ({
          ...prevState,
          [name]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Register</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                id="username"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <div className="file-image">
                <div className="image">
                  {loadImage ? (
                    <img src={loadImage} alt="Selected Preview" />
                  ) : null}
                </div>
                <div className="file">
                  <label htmlFor="image">Select Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    onChange={fileHandler}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <input type="submit" value="register" className="btn" />
            </div>

            <div className="form-group">
              <span>
                <Link to="/messenger/login"> Login Your Account </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
