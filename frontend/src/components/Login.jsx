import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/action/authAction";
import { logout } from "../store/action/authAction";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, authenticate } = useSelector((state) => state.auth);
  const [user, setUserState] = useState({
    email: "",
    password: "",
  });

  console.log(error.errors, "error");
  console.log(authenticate, "authenticate ");
  useEffect(() => {
    if (error.errors && error.errors.length > 0) {
      error.errors.forEach((err) => toast.error(err));
    }
  }, [error.errors]);

  useEffect(() => {
    if (error.message && error.message.length > 0) {
      toast.error(error.message);
    }
  }, [error.message]);

  useEffect(() => {
    if (authenticate) {
      toast.success("User Logged in Successfully");
      // navigate("/");
    }
  }, [authenticate, navigate]);

  const handleLogout = () => {
    if (authenticate) {
      dispatch(logout());
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserState({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    const userData = { email, password };
    dispatch(userLogin(userData));
  };

  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Login</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                name="email"
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
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input type="submit" value="login" className="btn" />
            </div>

            <div className="form-group">
              <span>
                <Link to="/messenger/register" onClick={handleLogout}>
                  {" "}
                  Don't have any Account{" "}
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
