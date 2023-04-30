import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setState] = useState({
    fname: "",
    lname: "",
    phone: "",
    password: "",
    email: "",
  });
  const { fname, lname, phone, password, email } = user;

  const handleChange = (x) => (event) => {
    setState({ ...user, [x]: event.target.value });
  };

  const PostData = async (event) => {
    event.preventDefault();
    await fetch(`${process.env.REACT_APP_API}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        password: password,
      }),
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          navigate("/login");
        }
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <motion.div

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}>
<div>
      <Navbar />
    </div>
      <div className="sectionr">
        <div className="register">
          <h2 style={{ color: "white" }}>Sign Up</h2>
          <form onSubmit={PostData}>
            <div><input
              className="inputr input-group mb-3"
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={handleChange("fname")}
            />
            </div>
            <div><input
              className="inputr input-group mb-3"
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={handleChange("lname")}
            />
            </div>
            <div><input
              className="input-group mb-3"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange("email")}
            />
            </div>
            <div><input
              className="inputr input-group mb-3"
              type="number"
              placeholder="Enter your phone"
              value={phone}
              onChange={handleChange("phone")}
            />
            </div>
            <div><input
              className="input-group mb-3"
              type="password"
              placeholder="password"
              value={password}
              onChange={handleChange("password")}
            />
            </div>
            <button type="submit" className="btn btn-light">
              Sign Up
            </button>
          </form>
          <h6 className="mt-3">
            <Link to="/login" style={{ color: "white" }}>I have an account</Link>
          </h6>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Signup;
