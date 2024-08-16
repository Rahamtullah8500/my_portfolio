import React from "react";
import { ABOUT_TEXT, ABOUT_TEXT1 } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <h1 className=" my-20 text-center text-4xl">
        About <span className=" text-neutral-500">Me</span>
      </h1>
      <div className=" flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className=" w-full lg:w-1/2 lg:p-8"
        >
          <div className=" flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1554290712-e640351074bd?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About mySelf"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className=" w-full lg:w-1/2 align-middle flex justify-center items-center"
        >
          <div className=" flex justify-center lg:justify-start">
            <p className=" my-2 max-w-xl py-6">
              <span>{ABOUT_TEXT}</span><br/>
              <span className=" mt-4">{ABOUT_TEXT1}</span>

            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;