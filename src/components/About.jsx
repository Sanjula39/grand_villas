import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { teams } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const VillaCards = ({
  index,
  name,
  description,
 
  image,
  
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt className='xs:w-[250px] w-full'
        options={{
          max: 20,
          scale: 1,
          speed: 150,
        }}
        
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='team_image'
            className='w-full h-full object-cover rounded-2xl'
          />

            
        </div>

        <div className='mt-5'>
          <h3 className='text-black font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-black text-[14px]'>{description}</p>
        </div>

        
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center `}>Who we are</p>
        <h2 className={`${styles.sectionHeadText} text-center`}><span className='text-[#b4975a]'>About</span> Us</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] w-full text-center leading-[30px]'
        >
          At Grand Villas, we are dedicated to providing our guests with the ultimate luxury villa experience. We believe that every moment of your stay should be an unforgettable one, from the moment you arrive until the moment you depart. Our team of dedicated professionals is committed to ensuring that every detail of your stay is taken care of, from arranging personalized activities to providing the finest cuisine. Our villas have been designed with your comfort in mind, offering top-of-the-line amenities, stunning views, and the ultimate in privacy and relaxation. We invite you to escape to your own piece of paradise and experience the ultimate in luxury living.</motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {teams.map((teams, index) => (
          <VillaCards key={`teams-${index}`} index={index} {...teams} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");