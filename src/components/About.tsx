"use client";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <section className="min-h-screen max-h-screen flex flex-col justify-center items-center space-y-6" id="about">
        <img className="w-56 h-56 bg-white rounded-full" />
        <div className="title text-3xl flex flex-row">
          <div className="text-white">Hello, I&#39;m</div>
          <div className="text-sky-300 font-bold">&nbsp;Muhammad Salman Al Farizi</div>
        </div>
        <div className="subtitle text-xl text-white/80 text-center">
          I am a Fullstack Developer with expertise in developing web applications and software.
          <br /> With the ability to work on both front-end and back-end sides, I am capable of handling
          <br /> various aspects of technology project development.
        </div>
        <div className="flex flex-wrap space-x-4">
          <div className="flex flex-row justify-center items-center space-x-2">
            <FaLinkedin />
            <div className="text-white hover:text-white/70">
              <Link href="https://www.linkedin.com/in/muhammad-salman-al-farizi-53083a2a9" target="_blank">
                Muhammad Salman Al Farizi
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-2">
            <FaInstagram />
            <div className="text-white hover:text-white/70">
              <Link href="https://www.instagram.com/salmanaf.ts" target="_blank">
                Salman A.
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-2">
            <FaGithub />
            <div className="text-white hover:text-white/70">
              <Link href="https://github.com/ItzRyz" target="_blank">
                ItzRyz
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-2">
            <FaEnvelope />
            <div className="text-white hover:text-white/70">
              <Link href="mailto:farizsalman14@gmail.com" target="_blank">
                farizsalman14@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="subtitle text-md text-white text-center">
          *Check my&nbsp;
          <Link href="" className="underline hover:text-white/80">
            CV
          </Link>
          &nbsp;for more information about me
        </div>
      </section>
    </>
  );
};

export { About };
