import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { motion } from 'framer-motion';
import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";
const Profile = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}>
            <NavbarProfile />
            <div className="sectionp">
                <div className="pro">
                    <div>
                        <img className="logop" src={require("../style/profile-icon-png-908.png")} alt="img" />
                    </div>
                    <div className="user">
                        <h1 style={{ color: "white" }}>Profile:</h1>
                        <div>
                            <h5 style={{ color: "white" }}>First Name </h5>
                            <h5 style={{ color: "white" }}>Last Name </h5>
                            <h5 style={{ color: "white" }}>Phone Number </h5>
                            <h5 style={{ color: "white" }}>Email </h5>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
};

export default Profile;
