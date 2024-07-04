"use client";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="min-h-screen max-h-screen flex flex-col justify-center items-center overflow-hidden" id="hero">
        <div className="mt-auto flex flex-col justify-center items-center">
          <div className="title text-4xl md:text-8xl text-white font-black tracking-[0.3em] uppercase">Alyvazen</div>
          <div className="subtitle translate-y-6">
            <ul className="flex flex-col md:flex-row justify-center items-center md:space-x-8 text-md md:text-lg font-bold md:translate-x-[-15px]">
              <li>Fullstack Developer</li>
              <li className="md:list-disc">UI/UX Designer</li>
              <li className="md:list-disc">Photographer</li>
            </ul>
          </div>
        </div>
        <div className="mt-auto mb-24">
          <button className="bg-sky-400 text-white px-6 py-4 rounded-lg font-bold">Explore Now</button>
        </div>
      </section>
    </>
  );
};

export { Hero };
