import React from "react";
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Forum = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}>
            <div>
      <Navbar />
    </div>
            <div className="sectionf">
            <div className="for">
                    <div className="documents">
                        <h1 style={{ color: "white" }}>Forum</h1>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="for1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. t, totam provident quos animi? Sin</div>
                <div className="for1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. t, totam provident quos animi? Sin</div>
                <div className="for1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. t, totam provident quos animi? Sin</div>
                <div className="for1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. t, totam provident quos animi? Sin</div>
                <div className="for1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. t, totam provident quos animi? Sin</div>
                <div className="for1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. t, totam provident quos animi? Sin</div>
            </div>
            <Footer />
        </motion.div>
    );
};

export default Forum;
