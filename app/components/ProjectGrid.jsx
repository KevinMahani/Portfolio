
"use client"

import projects from "../data/projects"; // Adjust the path as needed
import Image from "next/image";
import Link from "next/link";
import { FaGithub} from "react-icons/fa"
import { useLanguage } from "../context/LanguageContext";
import {translations } from "../data/translations";

export default function ProjectGrid() {
  const { lang } = useLanguage();
  const t = translations[lang];

  
  return (
    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">  
    
    {projects.map((project) => (
        <div
          key={project.id}
          className="group bg-[#262323a6] p-6 rounded-lg  hover:shadow-2xl transition-shadow"
        >
          {/* Cover Image */}
          <div className="aspect-[4/3]  mb-5 relative overflow-hidden ">
            <Link href={`/projects/${project.id}`}>
            <Image
              href="/"
              src={project["cover-image"]}
              alt={project.name}
              fill
              className="object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            </Link>
          </div>

          {/* Title */}
          <Link href={`/projects/${project.id}`}>
          <h3 className="text-[15px] font-light cursor-pointer text-white">{project.name}</h3>
          </Link>
          {/* Date */}
          <p className="text-[10px] text-white/50 mt-1">{project.date}</p>

          {/* Links */}
          <div className="mt-2.5 flex gap-4 items-center justify-between">

            <Link
              href={project["github-link"]}
              target="_blank"
              className="text-xl text-white cursor-pointer hover:text-white/50 transition-colors"
            >
              <FaGithub />
            </Link>
              <Link
              href={project["visit-link"]}
              target="_blank"
              // className="text-sm text-blue-400 hover:underline"
            >
              <button className="text-sm cursor-pointer text-white border border-white/20 hover:border-white/50 px-3 py-1 rounded transition-colors">
              {t.livedemo}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

