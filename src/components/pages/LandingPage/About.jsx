import React from "react";
import "./About.css";
import { FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
// import { motion, useScroll } from "framer-motion";
// import { fadeIn } from "../variants";
import { DiLinux } from "react-icons/di";
import { IoCodeSlashOutline } from "react-icons/io5";
// import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";

const About = () => {
  // const { scrollYProgress } = useScroll();

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 2,
      speed: 10,
      glare: true,
      "max-glare": 0.2,
    });
  });
  return (
    <section className="p-3">
      <div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="about_main grow_hover tilt border-[1px] border-gray-700 rounded-3xl p-4 mt-10 bg-transparent shadow-lg relative overflow-hidden"
        style={{ "--clr": "#1084bf" }}
      >
        {/* <h1 className="about_heading">About Us</h1> */}
        <h1 className="text-white font-bold xl:text-[54px] lg:text-5xl text-4xl leading-[1.25] h-auto mx-auto mb-2">
          About Us
        </h1>
        <div className="icons_icon justify-center flex items-center">
          <span>
            <IoCodeSlashOutline className="icon icon_box animate-upDown" />
          </span>
          <span>
            <DiLinux className="icon icon_box animate-upDown" />
          </span>
          <img
            className="git_img img_glowing mx-auto"
            src="https://www.copsiitbhu.co.in/static/assets/img/landing/avatar.jpg"
            alt="img"
          />
          <span>
            <DiLinux className="icon icon_box animate-upDown" />
          </span>
          <span>
            <IoCodeSlashOutline className="icon icon_box animate-upDown" />
          </span>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-white font-bold xl:text-[64px] lg:text-6xl text-4xl leading-[1.25] z-20 relative whitespace-nowrap">
            <div className="flex justify-center items-center">
              <code className="gradi-theme-text">&lt;</code>
              <span
                className="inline-block w-full animate-typing overflow-hidden border-r-4 border-white"
                onAnimationEnd={(e) => {
                  e.target.classList.remove("animate-typing");
                }}
              >
                {" "}
                Coders & <span className="gradi-theme-text">
                  Devlopers
                </span>{" "}
                Club{" "}
              </span>
              <code className="gradi-theme-text">/&gt;</code>
            </div>
          </h1>
        </div>
        <div className="icons">
          <div className="li_item hover:text-[#1084bf]">
            <FiGithub className="h-3 w-3" />
          </div>
          <div className="li_item hover:text-[#3b5998]">
            <FaFacebook className="h-3 w-3" />
          </div>
          <div className="li_item hover:text-[#0a66c2]">
            <FaLinkedinIn className="h-3 w-3" />
          </div>
          <div className="li_item hover:text-[#1da1f2]">
            <FaXTwitter className="h-3 w-3" />
          </div>
          <div className=" hover:text-[#dd4b39]">
            <FaGoogle className="h-4 w-4" />
          </div>
        </div>
        <p className="about_para font-sans text-lg leading-relaxed tracking-wide text-justify mx-auto max-w-2xl">
          At Coders and Developers Club MMMUT, our primary goal is to prioritize
          the growth and excellence of our college’s coding culture. Our aim is
          to foster a culture of constant learning and improvement among our
          students, ensuring they are always enhancing their technological
          skills. We organize sessions to create awareness about the
          significance of coding and other tech domains, particularly among new
          students, and encourage consistent participation in contests and
          coding practice to instill a sense of continuity. Collaborating with
          faculty advisors and alumni, we introduce new and industry-demanded
          skills, ensuring our coding community stays ahead of the curve.
          <br />
          We follow practices that maintain our society's active status,
          engaging members in various activities and initiatives consistently.
          This vision encapsulates our commitment to inspiring, educating, and
          building a vibrant community at the forefront of technological
          innovation. Together, we'll write the code of collaboration, compiling
          every byte of our efforts in an unbreakable loop until you reach your
          technical destination
        </p>
      </div>
      <div class="absolute left-[-150px] top-[28rem] w-[24rem] h-[24rem] rounded-full bg-[rgb(84,105,134)] opacity-25 blur-[100px]"></div>
      <div class="absolute right-[-150px] -bottom-[10rem] w-[30rem] h-[24rem] rounded-full bg-[rgb(140,111,193)] opacity-25 blur-[100px]"></div>
      {/* <div class="absolute left-[-150px] top-[28rem] w-[24rem] h-[24rem] rounded-full bg-[rgb(84,105,134)] opacity-25 blur-[100px]"></div> */}
    </section>
  );
};

export default About;
