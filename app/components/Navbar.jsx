


// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import projectsEN from "../data/projects";
// import projectsDe from "../data/projects-de";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useLanguage } from "../context/LanguageContext";
// import { MdKeyboardDoubleArrowDown } from "react-icons/md";
// import { useRef } from "react"

// export default function Navbar() {
//   const { lang, changeLang } = useLanguage();
//   const pathname = usePathname();
//   const projects = lang === "de" ? projectsDe : projectsEN;

//   const [showFrontEnd, setShowFrontEnd] = useState(false);
//   const [showHint, setShowHint] = useState(true);

//   const gridRef = useRef(null);

//   const handleArrowClick = () => {
//   if (gridRef.current) {
//         gridRef.current.scrollTo({
//       top: gridRef.current.scrollHeight,
//       behavior: "smooth",
//     });
//   }
// };

//   const handleToggle = () => {
//     setShowFrontEnd(!showFrontEnd);
//     if (!showFrontEnd) {
//       setShowHint(true);
//       setTimeout(() => setShowHint(false), 6000); // disappears after 3s
//     }
//   };


//   const [showResumeOptions, setShowResumeOptions] = useState(false);
  
//   return (
//     <header className="hidden lg:block fixed left-0 top-0 h-screen w-70 px-10 py-10 z-50 
//     border-r-2 border-white/20 ">
//       <Link href="/">
//         <h1 className="text-[20px] font-light text-white -mt-5 mb-10">
//           Keivan Sabermahani
//         </h1>
//       </Link>

//       {/* Language toggle */}
//       <div className="text-[11px] text-center flex space-x-4 -mt-5 -mb-10">
//         <button
//           onClick={() => changeLang("de")}
//           className={`border rounded-full px-2 py-1 cursor-pointer ${
//             lang === "de" ? "bg-white/20 text-white" : "text-white/50"
//           }`}
//         >
//           DE
//         </button>
//         <button
//           onClick={() => changeLang("en")}
//           className={`border rounded-full px-2 py-1 cursor-pointer ${
//             lang === "en" ? "bg-white/20 text-white" : "text-white/50"
//           }`}
//         >
//           EN
//         </button>
//       </div>

//       {/* Resume + Projects */}
//       <div className="relative mt-20 ">
//       <div className="relative mb-2 flex items-center space-x-3">
//       <span
//           className="text-white/50 hover:text-white cursor-pointer"
//           onClick={() => setShowResumeOptions(!showResumeOptions)}
//         >
//           {lang === "de" ? "Lebenslauf" : "Resume"}
//       </span>

//           <AnimatePresence>
//             {showResumeOptions && (
//               <motion.div
//                 className="flex items-center space-x-3 "
//                 initial={{ opacity: 0, x: -5 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -5 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Link
//                   href="/r-eng.pdf"
//                   target="_blank"
//                   className="text-white/80 hover:text-white text-[10px]
//                    border rounded-full px-2 py-0.5"
//                 >
//                   English
//                 </Link>
//                 <Link
//                   href="/r-de.pdf"
//                   target="_blank"
//                   className="text-white/80 hover:text-white text-[10px]
//                   border rounded-full px-2 py-0.5"
//                 >
//                   Deutsch
//                 </Link>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>


//         {/* Front-End Toggle */}
//         <button
//             onClick={handleToggle}
//             className="mt-5 pt-2 flex items-center gap-2 rounded cursor-pointer 
//             transition-colors"
//           >
//             {/* Only this span gets hover effect */}
//             <span
//               className={`transition-colors ${
//                 showFrontEnd ? "text-white" : "text-white/50"
//               } hover:text-white`}
//             >
//               {lang === "de" ? "Front-End Projekte" : "Front-End Projects"}
//             </span>
//           </button>
          
//           {/* Arrow is always white */}
//           {showFrontEnd && showHint && (
//             <motion.div
//               initial={{ opacity: 1, y: 10 }}
//               animate={{ opacity: 1, y: [0, 10, 0] }}
//               exit={{ opacity: 0 }}
//               transition={{ repeat: Infinity }}
//               onClick = {handleArrowClick}
//               className="absolute left-1/2 ml-25  top-132 -translate-x-1/2 
//               cursor-pointer inline-block z-50"
//             >
//               <MdKeyboardDoubleArrowDown size={28} className="!text-white " />
//             </motion.div>
//           )}
        

//         {/* Collapsible Projects List */}
//         <AnimatePresence>
//           {showFrontEnd && (
//             <motion.ul
//               ref={gridRef}
//               key="frontend-projects"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//               className="absolute top-0 left-10 mt-25 w-full max-h-120
//                overflow-y-auto pr-2 space-y-1 text-[12px] custom-scrollbar"
//             >
//               {projects.map((p) => {
//                 const isActive = pathname === `/projects/${p.id}`;
//                 return (
//                   <li key={p.id} className="py-1">
//                     <Link
//                       href={`/projects/${p.id}`}
//                       className={`transition-colors ${
//                         isActive
//                           ? "text-white"
//                           : "text-white/50 hover:text-white"
//                       }`}
//                     >
//                       {p.name}
//                     </Link>
                    
//                   </li>
//                 );
//               })}
//             </motion.ul>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   );
// }
// ..................................................




"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsEN from "../data/projects";
import projectsDe from "../data/projects-de";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useRef } from "react"

export default function Navbar() {
  const { lang, changeLang } = useLanguage();
  const pathname = usePathname();
  const projects = lang === "de" ? projectsDe : projectsEN;

  const [showFrontEnd, setShowFrontEnd] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const gridRef = useRef(null);

  const handleArrowClick = () => {
  if (gridRef.current) {
        gridRef.current.scrollTo({
      top: gridRef.current.scrollHeight,
      behavior: "smooth",
    });
  }
};

  const handleToggle = () => {
    setShowFrontEnd(!showFrontEnd);
    if (!showFrontEnd) {
      setShowHint(true);
      setTimeout(() => setShowHint(false), 6000); // disappears after 3s
    }
  };


  const [showResumeOptions, setShowResumeOptions] = useState(false);
  
  return (
    <header className="hidden lg:block fixed left-0 top-0 h-screen w-70 px-10 py-10 z-50 
    border-r-2 border-white/20 ">
      <Link href="/">
        <img
          src="/Logo/Logo3.png"
          alt="Logo"
          className="w-32 mb-12 cursor-pointer"
        />
      </Link>

      {/* Language toggle */}
      <div className="text-[11px] text-center flex space-x-4 -mt-5 -mb-10">
        <button
          onClick={() => changeLang("de")}
          className={`border rounded-full px-2 py-1 cursor-pointer ${
            lang === "de" ? "bg-white/20 text-white" : "text-white/50"
          }`}
        >
          DE
        </button>
        <button
          onClick={() => changeLang("en")}
          className={`border rounded-full px-2 py-1 cursor-pointer ${
            lang === "en" ? "bg-white/20 text-white" : "text-white/50"
          }`}
        >
          EN
        </button>
      </div>

      {/* Resume + Projects */}
      <div className="relative mt-20 ">
      <div className="relative mb-2 flex items-center space-x-3">
      <span
          className="text-white/50 hover:text-white cursor-pointer"
          onClick={() => setShowResumeOptions(!showResumeOptions)}
        >
          {lang === "de" ? "Lebenslauf" : "Resume"}
      </span>

          <AnimatePresence>
            {showResumeOptions && (
              <motion.div
                className="flex items-center space-x-3 "
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href="/r-eng.pdf"
                  target="_blank"
                  className="text-white/80 hover:text-white text-[10px]
                   border rounded-full px-2 py-0.5"
                >
                  English
                </Link>
                <Link
                  href="/r-de.pdf"
                  target="_blank"
                  className="text-white/80 hover:text-white text-[10px]
                  border rounded-full px-2 py-0.5"
                >
                  Deutsch
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


        {/* Front-End Toggle */}
        <button
            onClick={handleToggle}
            className="mt-5 pt-2 flex items-center gap-2 rounded cursor-pointer 
            transition-colors"
          >
            {/* Only this span gets hover effect */}
            <span
              className={`transition-colors ${
                showFrontEnd ? "text-white" : "text-white/50"
              } hover:text-white`}
            >
              {lang === "de" ? "Front-End Projekte" : "Front-End Projects"}
            </span>
          </button>
          
          {/* Arrow is always white */}
          {showFrontEnd && showHint && (
            <motion.div
              initial={{ opacity: 1, y: 10 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              exit={{ opacity: 0 }}
              transition={{ repeat: Infinity }}
              onClick = {handleArrowClick}
              className="absolute left-1/2 ml-25  top-132 -translate-x-1/2 
              cursor-pointer inline-block z-50"
            >
              <MdKeyboardDoubleArrowDown size={28} className="!text-white " />
            </motion.div>
          )}
        

        {/* Collapsible Projects List */}
        <AnimatePresence>
          {showFrontEnd && (
            <motion.ul
              ref={gridRef}
              key="frontend-projects"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-10 mt-25 w-full max-h-120
               overflow-y-auto pr-2 space-y-1 text-[12px] custom-scrollbar"
            >
              {projects.map((p) => {
                const isActive = pathname === `/projects/${p.id}`;
                return (
                  <li key={p.id} className="py-1">
                    <Link
                      href={`/projects/${p.id}`}
                      className={`transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      {p.name}
                    </Link>
                    
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}





