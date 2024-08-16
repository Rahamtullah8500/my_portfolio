import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import myResume from '../../public/resume.pdf'

const Navbar = () => {
  return (
    <nav className=" mb-10 flex items-center justify-between py-6">
      <div className=" flex flex-shrink-0 items-center">AR</div>
      <div className=" my-3 flex items-center justify-center gap-4 text-2xl">
     
        <a
          href="https://github.com/Rahamtullah8500?tab=repositories"
          target="blank"
        >
          <FaGithub className=" cursor-pointer" />
        </a>
        <a
          href="http://www.linkedin.com/in/abdul-rahamtullah-shaik-a27075220"
          target="blank"
        >
          <FaLinkedin className=" cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
