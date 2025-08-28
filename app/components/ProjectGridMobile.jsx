"use client";

import projects from "../data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import {translations } from "../data/translations";
import { BsRocket } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";

export default function ProjectGridMobile() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [launch, setLaunch] = useState(false);
  const gridRef = useRef(null);

  const scrollToGrid = () => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
    <p className="text-white/80 text-[10px] leading-relaxed mt-20 ml-10 mr-10 
    whitespace-pre-line">
    {t.welcome}
    <br/><br/>
    <span className="relative  text-[10px] -top-12 ml-23 ">{t.takeoff}</span>
    </p>
           <motion.div
        className="relative inline-block" // keep your positioning intact
        whileHover={{
          rotate: [0, -0.5, 0.5, -0.5, 0.5, 0],
          transition: { duration: 0.6, repeat: Infinity },
        }}
      >
        
        <BsRocket 
        onClick={() => {
          setLaunch(true);
          scrollToGrid();
        }}
        className="relative text-[30px] ml-40 -top-8 cursor-pointer " />

        <AnimatePresence>
          <motion.div
            className="relative ml-41 -top-10.5 " // keep your original fire styles
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 5 }} // downward flame animation
            exit={{ opacity: 0 }}
            transition={{ repeat: Infinity, duration: 0.1  }}
            key="fire"
          >
            🔥
          </motion.div>
        </AnimatePresence>
      </motion.div>
    <div 
    ref={gridRef}
    className="block md:hidden lg:hidden px-12 pt-24 pb-10 space-y-12">
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col gap-3">
          {/* Square Image */}
          <div className="aspect-[4/3] relative overflow-hidden rounded-md group">
            <Link href={`/projects/${project.id}`}>
            <Image
              src={project["cover-image"]}
              alt={project.name}
              fill
              className="object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            </Link>
          </div>

          {/* Title + Date */}
          <div>
            <Link href={`/projects/${project.id}`} >
            <h3 className="text-base font-light text-white">{project.name}</h3>
            </Link>
            <p className="text-xs text-white/50">{project.date}</p>
          </div>

          {/* GitHub & Live Buttons */}
          <div className="flex justify-between items-center">
            <Link
              href={project["github-link"]}
              target="_blank"
              className="text-xl text-white hover:text-white/50 transition-colors "
            >
              <FaGithub />
            </Link>

            <Link href={project["visit-link"]} target="_blank">
              <button className="cursor-pointer text-sm text-white border border-white/20 hover:border-white/50 px-3 py-1 rounded transition-colors">
                {t.livedemo}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
