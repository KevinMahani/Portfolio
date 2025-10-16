
"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { BsRocket } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeSection({ onRocketClick }) {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="hidden lg:flex flex-col items-center text-center p-10 ">
      
      {/* ✅ Text Section centered and responsive */}
      <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
        {t.welcome}
        <br /><br />
        <span className="text-[18px] font-medium">{t.takeoff}</span>
      </p>

      {/* ✅ Rocket + Flame - always centered */}
      <div className="flex justify-center items-center relative mt-12 mb-12">
        <motion.div
          className="relative inline-block"
          whileHover={{
            rotate: [0, -0.5, 0.5, -0.5, 0.5, 0],
            transition: { duration: 0.6, repeat: Infinity },
          }}
        >
          <BsRocket
            onClick={onRocketClick}
            className="text-[50px] cursor-pointer"
          />

          <AnimatePresence>
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 -mt-3"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 5 }}
              exit={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.1 }}
              key="fire"
            >
              🔥
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
