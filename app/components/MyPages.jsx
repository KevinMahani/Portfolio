// import Image from "next/image";
// import Link from "next/link";
// import { FaGithub } from "react-icons/fa";


// export default function MyPages({project}) {
//     return (
//         <div className="px-10 py-10 max-w-5xl mx-auto text-white">
//       <Link href="/" className="text-white hover:text-white/50">← Back to home</Link>

//       <h1 className="text-2xl pb-5 font-semibold mt-4">{project.name}</h1>

//       {/* ✅ Desktop Design (only if exists) */}
//       {project["desktop-images"]?.length > 0 && (
//         <div className="space-y-2 mb-6">
//           {project["desktop-design"] && (
//             <p className="text-center py-10">{project["desktop-design"]}</p>
//           )}
//           {project["desktop-images"].map((img, index) => (
//             <div key={index} className="relative w-full aspect-[16/7] mx-auto">
//               <Image
//                 src={img}
//                 alt={`${project.name} ${index + 1}`}
//                 fill
//                 className="object-cover rounded"
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ✅ Mobile Design (only if exists) */}
//       {project["mobile-images"]?.length > 0 && (
//         <div >
//           {project["mobile-design"] && (
//             <p className="text-center pt-8">{project["mobile-design"]}</p>
//           )}
//           <div className="flex gap-8 justify-center">
//             {project["mobile-images"].map((img, index) => (
//               <div
//                 key={index}
//                 className="relative w-full aspect-[9/18] max-w-[400px] mx-auto"
//               >
//                 <Image
//                   src={img}
//                   alt={`${project.name} mobile ${index + 1}`}
//                   fill
//                   className="object-cover rounded"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="whitespace-pre-line text-sm leading-relaxed mb-6">
//         {project.description}
//       </div>

//       <div className="flex gap-8 items-center">
//         {project["visit-link"] && (
//           <Link
//             href={project["visit-link"]}
//             target="_blank"
//             className="text-white border px-4 py-1 rounded hover:border-white/50 border-white/20"
//           >
//             Live Demo
//           </Link>
//         )}
//         {project["github-link"] && (
//           <Link
//             href={project["github-link"]}
//             target="_blank"
//             className="text-[35px] text-white hover:text-white/50 transition-colors duration-300"
//           >
//             <FaGithub className="cursor-pointer" />
//           </Link>
//         )}
//       </div>
//     </div>
//     )
// }
// .........................................................................
"use client"

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";


export default function MyPages({project}) {
    const { lang } = useLanguage();
    const t = translations[lang];
    return (
        <div className="px-10 py-10 max-w-5xl mx-auto text-white">
      <Link href="/" className="text-white hover:text-white/50">{t.backToHome}</Link>

      <h1 className="text-2xl pb-5 font-semibold mt-4">{project.name}</h1>

      {/* ✅ Desktop Design (only if exists) */}
      {project["desktop-images"]?.length > 0 && (
        <div className="space-y-2 mb-6">
          {project["desktop-design"] && (
            <p className="text-center py-10">{project["desktop-design"]}</p>
          )}
          {project["desktop-images"].map((img, index) => (
            <div key={index} className="relative w-full aspect-[16/7] mx-auto">
              <Image
                src={img}
                alt={`${project.name} ${index + 1}`}
                fill
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>
      )}

      {/* ✅ Mobile Design (only if exists) */}
      {project["mobile-images"]?.length > 0 && (
        <div >
          {project["mobile-design"] && (
            <p className="text-center pt-8">{project["mobile-design"]}</p>
          )}
          <div className="flex gap-8 justify-center">
            {project["mobile-images"].map((img, index) => (
              <div
                key={index}
                className="relative w-full aspect-[9/18] max-w-[400px] mx-auto"
              >
                <Image
                  src={img}
                  alt={`${project.name} mobile ${index + 1}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="whitespace-pre-line text-sm leading-relaxed mb-6">
        {project.description}
      </div>

      <div className="flex gap-8 items-center">
        {project["visit-link"] && (
          <Link
            href={project["visit-link"]}
            target="_blank"
            className="text-white border px-4 py-1 rounded hover:border-white/50 border-white/20"
          >
            {t.livedemo}
          </Link>
        )}
        {project["github-link"] && (
          <Link
            href={project["github-link"]}
            target="_blank"
            className="text-[35px] text-white hover:text-white/50 transition-colors duration-300"
          >
            <FaGithub className="cursor-pointer" />
          </Link>
        )}
      </div>
    </div>
    )
}