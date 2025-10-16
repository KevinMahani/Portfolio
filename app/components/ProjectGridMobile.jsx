"use client";

import projects from "../data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import {translations } from "../data/translations";
import { useState } from "react";
import { useRef } from "react";
import WelcomeSectionMobile from "./WelcomeSectionMobile";
import { iconMap } from "../data/iconMap";


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

    const handleRocketClick = () => {
    setLaunch(true);
    scrollToGrid();
  };

  return (
    <>
      < WelcomeSectionMobile  onRocketClick={handleRocketClick} />
      <div 
      ref={gridRef}
      className="block md:hidden lg:hidden px-12 pt-24 pb-10 space-y-12">
        {projects.map((project) => {
          const icons = Array.isArray(project.langIcons) ? project.langIcons : []
          return (
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
          <div className="flex flex-col gap-2 md:hidden">
            {/* Title and Icons Row */}
            <div className="flex items-center justify-between text-white text-lg">
              <Link href={`/projects/${project.id}`}>
                <h3 className="text-base font-light text-white">{project.name}</h3>
              </Link>

              {/* Tech / Language Icons */}
              <div className="flex items-center gap-2">
                {icons.map((name) => (
                  <span key={name}>{iconMap[name] || name}</span>
                ))}
              </div>
            </div>
          </div>
            <p className="text-xs text-white/50">{project.date}</p>

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
          )
        })}
      </div>
    </>
  );
}
