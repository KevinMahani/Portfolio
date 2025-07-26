

// export default function Footer() {
//     return (
//         <footer className="bg-[#222] text-[13px] text-white text-center pb-4 mt-10">
//             <p>
//                 &copy; {new Date().getFullYear()}{" "}
//                 <a
//                     href="https://www.linkedin.com/in/keivan-mahani-b5b70576/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-400"
//                 >
//                     Keivan Mahani
//                 </a>
//                 . All rights reserved.
//             </p>
//         </footer>
//     )
// }
// .............................................................
"use client"

import { useLanguage } from "../context/LanguageContext";
import {translations } from "../data/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

    return (
        <footer className="bg-[#222] text-[13px] text-white text-center pb-4 mt-10">
            <p>
                &copy; {new Date().getFullYear()}{" "}
                <a
                    href="https://www.linkedin.com/in/keivan-mahani-b5b70576/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                >
                    Keivan Mahani
                </a>
                . {t.copyright}
            </p>
        </footer>
    )
}