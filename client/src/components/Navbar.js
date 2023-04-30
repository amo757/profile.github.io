import React from "react";
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../style/App.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  function refreshPage() {
    setTimeout(() => {
      window.location.reload(true);
    }, 500);
    console.log('page to reload')
  }
  const navigation = () => {{
      return [
        <>
          <div className="nav-item3">
            <li className="nav-item4 nav-item">
              <Link /*onClick={refreshPage}*/ className="nav-link4" aria-current="page" to="/login">
                LOGIN
              </Link>
            </li>
            <div className="stick"></div>
            <li className="nav-item4 nav-item">
              <Link /*onClick={refreshPage}*/ className="nav-link2" aria-current="page" to="/signup">
                SIGN UP
              </Link>
            </li>
            <div className="inputsearch">
              <input className="inputsearch2" type="text" name="" id="" placeholder="Search...." />
            </div>
          </div>
          <li className="nav-item">
            <Link /*onClick={refreshPage}*/ className="nav-link2" aria-current="page" to="/">
              HOME
            </Link>
          </li>
          <div className="stick"></div>
          <li className="nav-item">
            <Link /*onClick={refreshPage}*/ className="nav-link2" to="/about">ABOUT US
            </Link>
          </li>
          <div className="stick"></div>
          <li className="nav-item">
            <Link /*onClick={refreshPage}*/ className="nav-link2" to="/CsP">CLIENTS & PARTNERS
            </Link>
          </li>
          <div className="stick"></div>
          <li className="nav-item">
            <Link /*onClick={refreshPage}*/ className="nav-link2" to="/forum">FORUM
            </Link>
          </li>
          <div className="stick"></div>
          <li className="nav-item">
            <Link /*onClick={refreshPage}*/ className="nav-link2" to="/auctions">AUCTION
            </Link>
          </li>
          <div className="stick"></div>
          <li className="nav-item nav-item2">
            <Link /*onClick={refreshPage}*/ className="nav-link2" to="/contact">CONTACT
            </Link>
          </li>
        </>,
      ];
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  ">
      <div className="container-fluid ">
          <Link /*onClick={refreshPage}*/ className="navbar-brand b" to="/">
            <div className="logo"></div>
          </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" ></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">{navigation()}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
