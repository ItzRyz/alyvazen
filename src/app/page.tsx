import Image from "next/image";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Certificates } from "@/components/Certificates";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Certificates />
      <Projects />
    </>
  );
}
