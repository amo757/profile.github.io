import React from 'react'
import { motion } from 'framer-motion';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Main = () => {
    return (
       <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}>

        <div>
      <Navbar />
    </div>

        <section className='sectionh'>
            <div className="box1">
                <div className="bwmain">
                    <h2 className="bw">BORDERLESS</h2>
                    <h2 className="world">WORLD</h2>
                </div>
                <h5 className="waa">We Are Artist</h5>

            </div>
            <div>
                <div className='box3'>
                    <div className='box2'>

                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src='https://i.pinimg.com/564x/1d/07/5f/1d075fd3602746fb8dee96ccd4def881.jpg' className="picture" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src='https://i.pinimg.com/564x/b5/cd/86/b5cd86135869d726aa2806180406374e.jpg' className="picture" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src='https://i.pinimg.com/564x/0c/a2/5d/0ca25d3af857acd2ad35605c6156124e.jpg' className="picture" alt="..." />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='box2'>

                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src='https://i.pinimg.com/564x/1d/07/5f/1d075fd3602746fb8dee96ccd4def881.jpg' className="picture" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src='https://i.pinimg.com/564x/b5/cd/86/b5cd86135869d726aa2806180406374e.jpg' className="picture" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src='https://i.pinimg.com/564x/0c/a2/5d/0ca25d3af857acd2ad35605c6156124e.jpg' className="picture" alt="..." />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='box2'>

                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src='https://i.pinimg.com/564x/1d/07/5f/1d075fd3602746fb8dee96ccd4def881.jpg' className="picture" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src='https://i.pinimg.com/564x/b5/cd/86/b5cd86135869d726aa2806180406374e.jpg' className="picture" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src='https://i.pinimg.com/564x/0c/a2/5d/0ca25d3af857acd2ad35605c6156124e.jpg' className="picture" alt="..." />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='box2'>

                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src='https://i.pinimg.com/564x/1d/07/5f/1d075fd3602746fb8dee96ccd4def881.jpg' className="picture" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src='https://i.pinimg.com/564x/b5/cd/86/b5cd86135869d726aa2806180406374e.jpg' className="picture" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src='https://i.pinimg.com/564x/0c/a2/5d/0ca25d3af857acd2ad35605c6156124e.jpg' className="picture" alt="..." />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='box2'>

                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src='https://i.pinimg.com/564x/1d/07/5f/1d075fd3602746fb8dee96ccd4def881.jpg' className="picture" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src='https://i.pinimg.com/564x/b5/cd/86/b5cd86135869d726aa2806180406374e.jpg' className="picture" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src='https://i.pinimg.com/564x/0c/a2/5d/0ca25d3af857acd2ad35605c6156124e.jpg' className="picture" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </motion.div>

    );

};

export default Main;