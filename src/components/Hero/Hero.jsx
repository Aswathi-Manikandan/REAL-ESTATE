import React from 'react';
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">
        
        {/* Left Section */}
        <motion.div 
          className="flexColStart hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Discover <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>

          <motion.div 
            className="flexColStart hero-des"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
          </motion.div>

          <motion.div 
            className="flexCenter search-bar"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Search properties..." />
            <button className="button">Search</button>
          </motion.div>

          <motion.div 
            className="flexCenter stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Award Winning</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="flexCenter hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="image-container">
            <img src="./hero-image.png" alt="Hero" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
