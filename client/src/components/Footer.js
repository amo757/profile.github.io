import React from 'react';
import "../style/App.css";
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}>
        <div>
            <div className="main-footer">
                <div className="container1">
                <div className="fbox1">
                    
                </div>
                    <div className="fbox2">
                        <p className="rights">
                            &copy;{new Date().getFullYear()}
                        </p>

                        <p className="rights2">
                            Borderless World All Rights Reserves
                        </p>
                        <p className="rights3">
                            All Content Protected
                        </p>
                    </div>

                    <div className="fbox3">
                        <div className="icon-footer">
                            <a href="http://www.facebook.com"><div className="icons1"></div></a>
                            <a href="http://www.instagram.com"><div className="icons2"></div></a>
                            <a href="http://www.youtube.com"><div className="icons3"></div></a>
                            <a href="http://www.pinterest.com"><div className="icons4"></div></a>
                            <a href="http://www.twitter.com"><div className="icons5"></div></a>
                            <a href="http://www.whatsapp.com"><div className="icons6"></div></a>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
        </motion.div>
    );
};

export default Footer