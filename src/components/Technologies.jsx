import React from "react";
import { FaGit, FaGithub } from "react-icons/fa";
import {
  RiBootstrapLine,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import { SiMui, SiRedux, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [6, -6],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  const additionalSkills = [
    "Node.js",
    "Express.js",
    "Supabase",
    "MongoDb",
    "SqLite",
  ];

  return (
    <div className=" border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl"
      >
        Skills
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className=" text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptLine className=" text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className=" text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiCss3Line className=" text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMui className=" text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRedux className=" text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGit className=" text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className=" text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssLine className=" text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiBootstrapLine className=" text-7xl text-purple-500" />
        </motion.div>
      </motion.div>
      <motion.div className=" text-center flex justify-center gap-3 flex-wrap mt-4">
        {additionalSkills.map((eachItem, i) => {
          return (
            <span
              key={i}
              className=" mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-600"
            >
              {eachItem}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Technologies;
