import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../store/action/authAction";
import { toast } from "react-toastify";

const Register = () => {
  const { error, authenticate } = useSelector((state) => state.auth);
  const [user, setUserState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadImage, setLoadImage] = useState(null);

  useEffect(() => {
    if (error && error.length > 0) {
      error.forEach((err) => toast.error(err));
    } else if (authenticate) {
      toast.success("User Registered Successfully");
      navigate("/messenger/login");
    }
  }, [error, authenticate, navigate]);

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
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("image", image);
    dispatch(userRegister(formData));
  };

  const fileHandler = (e) => {
    const { name, files } = e.target;
    if (files.length !== 0) {
      const file = files[0];
      setLoadImage(URL.createObjectURL(file));
      setUserState((prevState) => ({
        ...prevState,
        [name]: file,
      }));
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
