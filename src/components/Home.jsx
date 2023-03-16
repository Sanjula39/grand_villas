
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import {textVariant } from "../utils/motion";

const Home = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
       <div
        className={`absolute inset-0 top-[10px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-1 sm:h-80 h-40 gold-bg' />
          <div className='w-5 h-5 rounded-full bg-[#b4975a]' />
          
        </div>
        <motion.div variants={textVariant()}>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#000000]`}>
          Escape to <span className='text-[#b4975a]'>Paradise</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black`}>
            Discover Our Luxurious Villas and Experience the Ultimate Getaway.
          </p>
          
          
        </div>
        </motion.div>
      </div> 

      

      
    </section>
  );
};


export default SectionWrapper(Home, "home");