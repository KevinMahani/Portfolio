"use client";

import projects from "../data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import {translations } from "../data/translations";

export default function ProjectGridMobile() {
  const { lang } = useLanguage();
  const t = translations[lang];
  return (
    <div className="block md:hidden lg:hidden px-12 pt-24 pb-10 space-y-12">
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
  );
}
