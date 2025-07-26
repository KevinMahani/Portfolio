"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import projectsEN from "../data/projects";
import projectsDe from "../data/projects-de";
import { useLanguage } from "../context/LanguageContext";

export default function MobileNavbar() {
  const { lang, changeLang } = useLanguage();
  const projects = lang === "de" ? projectsDe : projectsEN;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
       {/* Mobile Top Bar */}
      <div className="lg:hidden fixed bg-[#222] top-0 left-0 border-b border-[#3c3535] pr-12 right-0 px-4 py-4 flex justify-around items-center z-50">
        <Link href="/">
        <h1 className="text-white text-[20px] font-light">Keivan Sabermahani</h1>
        </Link>
      <div className="flex space-x-4 mr-20 text-[11px] ">
        <button
          onClick={() => changeLang("de")}
          className={`border-2 rounded-full px-2 cursor-pointer ${lang === "de" ? "bg-white/20 text-white" : ""}`}
        >
          DE
        </button>
        <button
          onClick={() => changeLang("en")}
          className={`border-2 rounded-full px-2 cursor-pointer ${lang === "en" ? "bg-white/20 text-white" : ""}`}
        >
          EN
        </button>
      </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white cursor-pointer text-2xl">
          {isOpen ? <IoMdClose /> : <FiMenu />}
        </button>
      </div>

      {/* Slide-down menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 bg-[#222] z-40 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen py-20 px-10" : "max-h-0 py-0 px-10"
        }`}
      >
        <ul className="space-y-4 text-center  text-[14px]">
          {projects.map((p) => {
            const isActive = pathname === `/projects/${p.id}`;            
            return(
            <li key={p.id}>
              <Link
                href={`/projects/${p.id}`}
                onClick={() => setIsOpen(false)} // close on click
                className={`block ${isActive? "text-white" : "text-white/50 hover:text-white" } `}
              >
                {p.name}
              </Link>
            </li>
          )})}
        </ul>
      </div>
    </>
  );
}
