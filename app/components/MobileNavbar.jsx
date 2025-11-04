

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { FiMenu } from "react-icons/fi";
// import { IoMdClose } from "react-icons/io";
// import { usePathname } from "next/navigation";
// import projectsEN from "../data/projects";
// import projectsDe from "../data/projects-de";
// import { useLanguage } from "../context/LanguageContext";
// import { motion, AnimatePresence } from "framer-motion";
// import { MdKeyboardDoubleArrowDown } from "react-icons/md";
// import { useRef } from "react";
// import { useEffect } from "react";


// export default function MobileNavbar() {
//   const { lang, changeLang } = useLanguage();
//   const projects = lang === "de" ? projectsDe : projectsEN;
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);

//     useEffect(() => {
//         if (isOpen) {
//           // lock scroll
//           document.body.style.overflow = "hidden";
//         } else {
//           // restore scroll
//           document.body.style.overflow = "";
//         }
//         return () => {
//           document.body.style.overflow = "";
//         };
//       }, [isOpen]);

//   const [showResumeOptions, setShowResumeOptions] = useState(false);


//     const [showFrontEnd, setShowFrontEnd] = useState(false);
//     const [showHint, setShowHint] = useState(true);
  
//     const gridRef = useRef(null);
  
//     const handleArrowClick = () => {
//     if (gridRef.current) {
//           gridRef.current.scrollTo({
//         top: gridRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   };
  
//     const handleToggle = () => {
//       setShowFrontEnd(!showFrontEnd);
//       if (!showFrontEnd) {
//         setShowHint(true);
//         setTimeout(() => setShowHint(false), 6000); // disappears after 3s
//       }
//     };

//   return (
//     <>
//        {/* Mobile Top Bar */}
//       <div className="lg:hidden fixed bg-[#222] z-70 top-0 left-0 border-b border-[#3c3535] pr-12 right-0 px-4 py-4 flex justify-around items-center ">
//       <Link href="/">
//         <img
//           src="/Logo/Logo3.png"
//           alt="Logo"
//           className="w-28 sm:w-32 cursor-pointer"
//         />
//       </Link>
//       <div className="flex space-x-1 mr-8 text-[11px] text-center ">
//         <button
//           onClick={() => changeLang("de")}
//           className={`border-2 text-center rounded-full px-2 py-1 cursor-pointer ${lang === "de" ? "bg-white/20 text-white" : ""}`}
//         >
//           DE
//         </button>
//         <button
//           onClick={() => changeLang("en")}
//           className={`border-2 rounded-full px-2 cursor-pointer ${lang === "en" ? "bg-white/20 text-white" : ""}`}
//         >
//           EN
//         </button>
//       </div>
//         <button onClick={() => setIsOpen(!isOpen)} 
//         className="text-white cursor-pointer text-2xl">
//           {isOpen ? <IoMdClose /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Slide-down menu */}
//         <div
//           className={`lg:hidden fixed top-0 left-0 right-0 bg-[#222] z-60
//             transition-all duration-300 ease-in-out overflow-y-auto px-10 py-20
//             ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
//           style={{ height: "100dvh" }}
//         >
//         {/* resume */}
//       <div className="relative flex-col items-center 
//       justify-center mb-15 mt-8 text-center">
//       <span
//           className="text-white/50 hover:text-white cursor-pointer"
//           onClick={() => setShowResumeOptions(!showResumeOptions)}
//         >
//           {lang === "de" ? "Lebenslauf" : "Resume"}
//       </span>

//           <AnimatePresence>
//             {showResumeOptions && (
//               <motion.div
//                 className="absolute top-full left-1/2 -translate-x-1/2 flex text-center 
//                 items-center space-x-3 justify-center mt-3 px-4 "
//                 initial={{ opacity: 0, y: -5 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -5 }}
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
//           <div className="flex justify-center mt-5">
//             <button
//               onClick={handleToggle}
//               className="flex justify-center mt-2 items-center 
//               cursor-pointer text-center "
//             >
//               <span
//                 className={`transition-colors ${
//                   showFrontEnd ? "text-white" : "text-white/50"
//                 } hover:text-white`}
//               >
//                 {lang === "de" ? "Front-End Projekte" : "Front-End Projects"}
//               </span>
//             </button>
//           </div>
          
//           {/* Arrow is always white */}
//           {showFrontEnd && showHint && (
//             <motion.div
//               initial={{ opacity: 1, y: 10 }}
//               animate={{ opacity: 1, y: [0, 10, 0] }}
//               exit={{ opacity: 0 }}
//               transition={{ repeat: Infinity }}
//               onClick = {handleArrowClick}
//               className="absolute left-1/2 ml-25  top-150 -translate-x-1/2 
//               cursor-pointer inline-block z-50"
//             >
//               <MdKeyboardDoubleArrowDown size={28} className="!text-white " />
//             </motion.div>
//           )}
        

//         {/* Collapsible Projects List */}
//         <AnimatePresence>
//           {showFrontEnd && (
//           <motion.ul
//           ref={gridRef}
//           key="frontend-projects"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.2 }}
//           className="relative grid grid-cols-1 gap-4 mt-4 w-full 
//           max-h-[480px] overflow-y-auto text-[12px] 
//           text-center custom-scrollbar"
//         >
//           {projects.map((p) => {
//             const isActive = pathname === `/projects/${p.id}`;
//             return (
//               <li key={p.id} className="py-2">
//                 <Link
//                   href={`/projects/${p.id}`}
//                   onClick={() => {
//                     setIsOpen(false);
//                     setShowFrontEnd(false);
//                   }}
//                   className={`block transition-colors ${
//                     isActive ? "text-white" : "text-white/50 hover:text-white"
//                   }`}
//                 >
//                   {p.name}
//                 </Link>
//               </li>
//             );
//           })}
//         </motion.ul>
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// }
// ................................................................



"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import projectsEN from "../data/projects";
import projectsDe from "../data/projects-de";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useRef } from "react";
import { useEffect } from "react";
import NavbarLogo from "./NavbarLogo";


export default function MobileNavbar() {
  const { lang, changeLang } = useLanguage();
  const projects = lang === "de" ? projectsDe : projectsEN;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
          // lock scroll
          document.body.style.overflow = "hidden";
        } else {
          // restore scroll
          document.body.style.overflow = "";
        }
        return () => {
          document.body.style.overflow = "";
        };
      }, [isOpen]);

  const [showResumeOptions, setShowResumeOptions] = useState(false);


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

  return (
    <>
       {/* Mobile Top Bar */}
      <div className="lg:hidden fixed bg-[#222] z-70 top-0 left-0 border-b border-[#3c3535] pr-12 right-0 px-4 py-4 flex justify-around items-center ">
      
      <NavbarLogo />

      <div className="flex space-x-1 mr-8 text-[11px] text-center ">
        <button
          onClick={() => changeLang("de")}
          className={`border-2 text-center rounded-full px-2 py-1 cursor-pointer ${lang === "de" ? "bg-white/20 text-white" : ""}`}
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
        <button onClick={() => setIsOpen(!isOpen)} 
        className="text-white cursor-pointer text-2xl">
          {isOpen ? <IoMdClose /> : <FiMenu />}
        </button>
      </div>

      {/* Slide-down menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 right-0 bg-[#222] z-60
            transition-all duration-300 ease-in-out overflow-y-auto px-10 py-20
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          style={{ height: "100dvh" }}
        >
        {/* resume */}
      <div className="relative flex-col items-center 
      justify-center mb-15 mt-8 text-center">
      <span
          className="text-white/50 hover:text-white cursor-pointer"
          onClick={() => setShowResumeOptions(!showResumeOptions)}
        >
          {lang === "de" ? "Lebenslauf" : "Resume"}
      </span>

          <AnimatePresence>
            {showResumeOptions && (
              <motion.div
                className="absolute top-full left-1/2 -translate-x-1/2 flex text-center 
                items-center space-x-3 justify-center mt-3 px-4 "
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
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
          <div className="flex justify-center mt-5">
            <button
              onClick={handleToggle}
              className="flex justify-center mt-2 items-center 
              cursor-pointer text-center "
            >
              <span
                className={`transition-colors ${
                  showFrontEnd ? "text-white" : "text-white/50"
                } hover:text-white`}
              >
                {lang === "de" ? "Front-End Projekte" : "Front-End Projects"}
              </span>
            </button>
          </div>
          
          {/* Arrow is always white */}
          {showFrontEnd && showHint && (
            <motion.div
              initial={{ opacity: 1, y: 10 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              exit={{ opacity: 0 }}
              transition={{ repeat: Infinity }}
              onClick = {handleArrowClick}
              className="absolute left-1/2 ml-25  top-150 -translate-x-1/2 
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
          className="relative grid grid-cols-1 gap-4 mt-4 w-full 
          max-h-[480px] overflow-y-auto text-[12px] 
          text-center custom-scrollbar"
        >
          {projects.map((p) => {
            const isActive = pathname === `/projects/${p.id}`;
            return (
              <li key={p.id} className="py-2">
                <Link
                  href={`/projects/${p.id}`}
                  onClick={() => {
                    setIsOpen(false);
                    setShowFrontEnd(false);
                  }}
                  className={`block transition-colors ${
                    isActive ? "text-white" : "text-white/50 hover:text-white"
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
    </>
  );
}

