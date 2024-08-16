import React from "react";
import { HERO_CONTENT } from "./../constants/index";
import { motion } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className=" border-b border-neutral-900 pb-4 lg:mb-35">
      <div className=" flex flex-wrap">
        <div className=" w-full lg:w-1/2">
          <div className=" flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className=" pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Abdul
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent "
            >
              FrontEnd Developer
            </motion.span>
            <motion.p
              variants={container(0.9)}
              initial="hidden"
              animate="visible"
              className=" my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              <span className=" text-xl me-3">Welcome to my portfolio!</span> {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(0.9)}
              initial="hidden"
              animate="visible"
            >
              {/* Click to Download */}
              <a href=" ../../public/resume.pdf" download>
                <button className=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Resume
                  </span>
                </button>
              </a>
            </motion.div>
          </div>
        </div>
        <div className=" w-full lg:w-1/2">
          <div className=" flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1 }}
              src="https://images.unsplash.com/photo-1596949469909-5217f8b68f23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
