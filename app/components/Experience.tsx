"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workExperience } from "@/data";

const Experience = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="py-16 w-full" id="experience">
      <h1 className="heading text-white mb-12">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent" />

        <div className="flex flex-col gap-10">
          {workExperience.map((card, index) => (
            <div key={card.id} className="relative pl-16">
              {/* Timeline dot */}
              <div
                className={`absolute left-[18px] top-5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  activeId === card.id
                    ? "bg-purple-500 border-purple-300 scale-125"
                    : "bg-gray-900 border-purple-500"
                }`}
              />

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveId(card.id)}
                onMouseLeave={() => setActiveId(null)}
                className="cursor-pointer rounded-2xl border border-white/10 hover:border-purple-500 bg-[#13132a] transition-colors duration-300 overflow-hidden"
              >
                {/* Always-visible header */}
                <div className="flex items-center gap-4 p-5">
                  <img
                    src={card.thumbnail}
                    alt={card.company}
                    className="w-10 h-10 object-contain shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h2 className="text-white font-bold text-base md:text-lg leading-tight">
                        {card.title}
                      </h2>
                      <span className="text-gray-400 text-xs sm:text-sm shrink-0">
                        {card.period}
                      </span>
                    </div>
                    <p className="text-purple-400 font-medium text-sm mt-0.5">
                      {card.company}
                    </p>
                  </div>
                </div>

                {/* Hover-reveal body */}
                <AnimatePresence>
                  {activeId === card.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-white/10 pt-4 flex flex-col gap-3">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {card.desc}
                        </p>
                        <p className="text-xs text-gray-500">
                          <span className="text-gray-300 font-medium">Tech: </span>
                          {card.tech}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
