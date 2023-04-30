import React from "react";
import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";
import { motion } from 'framer-motion'

const Documents = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}>
            <NavbarProfile />
            <div className="sectiond">
                <div className="doc">
                    <div className="documents">
                        <h1 style={{ color: "white" }}>My Documents</h1>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="docx2">
                    <div className="doc2">
                        <div className="documents2">
                            <h3 style={{ color: "white" }}>Upload your CV</h3>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="brow2">
                        <div className="documents2">
                            <input type="text" className="inputbr" />
                            <button>Browse</button>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="docx3">
                    <div className="doc3">
                        <div className="documents3">
                            <h3 style={{ color: "white" }}>Upload your documents</h3>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="brow2">
                        <div className="documents2">
                            <input type="text" className="inputbr" />
                            <button>Browse</button>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="docx4">
                    <div className="doc4">
                        <div className="documents4">
                            <h3 style={{ color: "white" }}>Upload your work</h3>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="brow2">
                        <div className="documents2">
                            <input type="text" className="inputbr" />
                            <button>Browse</button>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="docx5">
                    <div className="doc5">
                        <div className="documents5">
                            <h3 style={{ color: "white" }}>Upload your files</h3>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="brow2">
                        <div className="documents2">
                            <input type="text" className="inputbr" />
                            <button>Browse</button>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
};

export default Documents;
