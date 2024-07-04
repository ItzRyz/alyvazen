"use client";
import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Dicoding Certificate",
      idcert: "#idcert",
      url: "",
    },
    {
      name: "Dicoding Certificate",
      idcert: "#idcert",
      url: "",
    },
    {
      name: "Dicoding Certificate",
      idcert: "#idcert",
      url: "",
    },
  ];
  return (
    <>
      <section className="min-h-screen max-h-screen flex flex-col justify-center items-center space-y-24" id="certificates">
        <div className="text-6xl flex flex-row space-x-4">
          <div className="text-white">My</div>
          <div className="text-sky-300 font-extrabold">Projects</div>
        </div>
        <div className="grid gap-x-8 gap-y-8 grid-cols-3 max-w-screen-xl w-full">
          <div className="bg-neutral-800/70 flex-initial h-[500px] flex flex-col justify-start items-start relative rounded-[1.2rem]">
            <img className="w-full h-3/4 bg-white rounded-t-[1.2rem]" />
            <div className="flex flex-col px-10 py-8">
              <div className="text-white text-xl font-bold">PMT - Yuzari</div>
              <div className="text-white/70 text-md">Project Management Tools on Yuzari Tech</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Projects };
