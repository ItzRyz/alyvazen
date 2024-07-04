"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Certificates = () => {
  const router = useRouter();
  const certificates = [
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
          <div className="text-sky-300 font-extrabold">Certificates</div>
        </div>
        <div className="grid gap-x-8 gap-y-8 grid-cols-2 max-w-screen-xl w-full">
          {certificates.map((c) => (
            <div className="bg-neutral-800/70 flex-initial h-[200px] px-16 flex flex-col justify-center items-start relative" key={c.idcert}>
              <div className="text-white font-bold text-2xl">{c.name}</div>
              <div className="text-white text-lg">{c.idcert}</div>
              <div className="absolute bottom-0 right-0 bg-sky-300 hover:bg-sky-400 text-black font-bold text-xl px-8 py-4 cursor-pointer" onClick={() => router.push(c.url)}>
                See more
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export { Certificates };
