"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { BsRocket } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeSectionMobile({ onRocketClick }) {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="flex flex-col items-center text-center px-8 py-12 lg:hidden">
      
      {/* ✅ Text Section - responsive and centered */}
      <p className="text-white/80 text-[12px] sm:text-sm leading-relaxed max-w-xl mx-auto whitespace-pre-line mt-10">
        {t.welcome}
        
        <span className="text-[14px] sm:text-[16px] font-medium block mt-5">{t.takeoff}</span>
      </p>

      {/* ✅ Rocket + Flame - always centered */}
      <div className="flex justify-center items-center relative mt-15 mb-20">
        <motion.div
          className="relative inline-block"
          whileHover={{
            rotate: [0, -0.5, 0.5, -0.5, 0.5, 0],
            transition: { duration: 0.6, repeat: Infinity },
          }}
        >
          <BsRocket
            onClick={onRocketClick}
            className="text-[40px] sm:text-[45px] cursor-pointer"
          />

          <AnimatePresence>
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 -mt-2 text-[12px] sm:text-[14px]"
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
