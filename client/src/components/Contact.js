import React from 'react'
import { motion } from 'framer-motion'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.7 }}>
<div>
      <Navbar />
    </div>
            <section className='sectionc'>
                <h1 className="pagesc">Welcome To Contact Page</h1>
                <div className='maincontact'>

                    <motion.div className='map'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.7 }}>

                        <iframe width="700" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Tbilisi+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>
                    </motion.div>
                    <div className='contact'>
                        <h3 className="phone">Phone: +123456789</h3>
                        <h3 className="email">Email: info@bw.com</h3>
                        <h3 className="phone">Phone: +123456789</h3>
                    </div>
                </div>
            </section>
            <Footer />
        </motion.div>
    )
}

export default Contact;