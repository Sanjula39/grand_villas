import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { resorts } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const VillaCards = ({
  index,
  name,
  description,
  
  image,
  price,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 20,
          scale: 1,
          speed: 150,
        }}
        className='bg-[#b4975a] p-5 rounded-2xl sm:w-[360px] w-full sm:h-[500px] h-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

            
        </div>

        <div className='mt-5'>
          <h3 className='text-black font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-black text-[14px]'>{description}</p>
          <p className='mt-2 text-black font-bold text-[15px]'>{price}</p>
          
        </div>

        
      </Tilt>
    </motion.div>
  );
};

const Resorts = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Our Resorts</p>
        <h2 className={`${styles.sectionHeadText} text-center`}><span className='text-[#b4975a]'>Luxury</span> Resorts</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] w-full text-center leading-[30px]'
        >
         Escape to our luxurious villa resort, where comfort and style meet. Indulge in our beautifully designed villas, complete with private pools and lush gardens. Our world-class staff is dedicated to making your stay unforgettable. Relax, explore, and create memories that will last a lifetime.
         </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {resorts.map((resorts, index) => (
          <VillaCards key={`resorts-${index}`} index={index} {...resorts} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Resorts, "resorts");