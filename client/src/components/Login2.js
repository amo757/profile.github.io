import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { motion } from 'framer-motion';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  
  const location = useLocation();
  const { dispatch, setD } = useContext(UserContext);
  const [user, setState] = useState({
    email: "",
    password: ""
  });
  const { password, email } = user;
  const handleChange = (x) => (event) => {
    setState({ ...user, [x]: event.target.value });
  };
  const navigate = useNavigate();
  const PostData = async (event) => {
    event.preventDefault();
    await fetch(`${process.env.REACT_APP_API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.localStorage.setItem("token", data.data);
        window.localStorage.setItem("isLoggedIn", true)
        console.log(data.status, "status");
        if(data.status=="ok"){
          MessageChannel.success("Login Successful");
          window.location.href = "/userprofile";
        }
        if (data.error) {
          console.log(data.error);
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          console.log(
            location.pathname + "/" + JSON.stringify(data.user.email)
          );
          if (
            location.pathname + "/" + JSON.stringify(data.user.email) ===
            '/login/"amiko@yahoo.com"'
          ) {
            setD(true);
          } else {
            setD(false);
          }
          navigate("/profile");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
    <div>
      <Navbar />
    </div>
    <div className="sectionl">
      <div className="login">
        <div>
          <div className="">
            <h2 style={{ color: "white" }}>Login</h2>
            <input
              className="input-group mb-3"
              type="text"
              placeholder="email"
              value={email}
              onChange={handleChange("email")}
            />
            <input
              className="input-group mb-3"
              type="password"
              placeholder="password"
              value={password}
              onChange={handleChange("password")}
            />
            <button onClick={PostData} type="button" className="btn btn-light">
              SIGN IN
            </button>
            <h6 className="mt-3">
              <Link to="/signup" style={{ color: "white" }}>Click here to register</Link>
            </h6>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Login;
