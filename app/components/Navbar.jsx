
"use client";

import projectsEN from "../data/projects";
import projectsDe from "../data/projects-de";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, changeLang } = useLanguage();
  const pathname = usePathname();
  const projects = lang === "de" ? projectsDe : projectsEN;

  return (
    <>  
    <header className="hidden lg:block fixed left-0 top-0 h-screen w-80  px-10 py-10 z-50">
    <Link href="/">
    <h1 className="text-[20px] font-light text-white -mt-5 mb-10 ">Keivan Sabermahani</h1>
    </Link>
      <div className="text-[11px] text-center flex space-x-4 -mt-5 -mb-10 ">
        <button
          onClick={() => changeLang("de")}
          className={`border-1 rounded-full px-2 py-1 cursor-pointer ${lang === "de" ? "bg-white/20 text-white" : ""}`}
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

      <div className="mt-15">
        <ul className="space-y-2  text-[12px]">
        {projects.map((p) => {
          const isActive = pathname === `/projects/${p.id}`;
          return (
            <li key={p.id} className="py-1">
              <Link
                href={`/projects/${p.id}`}
                className={`transition-colors ${isActive ? "text-white" : "text-white/50 hover:text-white"}`}
              >
                {p.name}
              </Link>
            </li>
          );
        })}
        </ul>
      </div>
    </header>
    </>
  );
}