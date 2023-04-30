import React from 'react'
import {motion} from 'framer-motion'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Auctions = () => {
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
                <h1 className="pagesa">Welcome To Auctions Page</h1>
            </div>
        </section>
        <Footer />
        </motion.div>
    )
}

export default Auctions;