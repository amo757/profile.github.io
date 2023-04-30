import React from 'react'
import {motion} from 'framer-motion'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CsP = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}>
            <div>
      <Navbar />
    </div>
            <section className='sectiona'>
                <div className="hero2">
                    <h1 className="pagescp">Welcome To Clients & Partners Page</h1>
                </div>
            </section>
            <Footer />
        </motion.div>
    )
}

export default CsP;