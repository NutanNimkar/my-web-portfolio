"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/data";

interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

interface SkillCategory {
  key: keyof typeof skillsData;
  title: string;
  color: string;
}

const categories: SkillCategory[] = [
  { key: "languages",       title: "Languages",         color: "from-blue-500 to-cyan-500" },
  { key: "dataEngineering", title: "Data Engineering",  color: "from-cyan-500 to-teal-500" },
  { key: "infrastructure",  title: "Infrastructure",    color: "from-indigo-500 to-blue-500" },
];

const getProficiencyLabel = (p: number) => {
  if (p >= 90) return { label: "Expert",       color: "text-green-400" };
  if (p >= 80) return { label: "Advanced",     color: "text-blue-400" };
  if (p >= 70) return { label: "Intermediate", color: "text-yellow-400" };
  return              { label: "Familiar",     color: "text-orange-400" };
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const { label, color } = getProficiencyLabel(skill.proficiency);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 border border-gray-700 hover:border-purple-500 transition-colors duration-300"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-6 h-6 object-contain"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = "none";
              const fallback = img.nextElementSibling as HTMLElement;
              if (fallback) fallback.classList.remove("hidden");
            }}
          />
          <span className="text-lg font-bold text-purple-400 hidden">
            {skill.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-white text-sm group-hover:text-purple-400 transition-colors duration-300">
            {skill.name}
          </h3>
          <p className={`text-xs ${color}`}>{label}</p>
        </div>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-1.5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 0.8, delay: index * 0.06 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

const Skills = () => {
  const [active, setActive] = useState<string>("all");

  const allSkills = categories.flatMap((c) => skillsData[c.key]);
  const displayed =
    active === "all"
      ? allSkills
      : skillsData[active as keyof typeof skillsData] ?? [];

  return (
    <div className="py-20 w-full" id="skills">
      <h1 className="heading text-white mb-12">
        My <span className="text-purple">Skills</span>
      </h1>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActive("all")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            active === "all"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          All
        </motion.button>
        {categories.map((cat) => (
          <motion.button
            key={cat.key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActive(cat.key)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              active === cat.key
                ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {cat.title}
          </motion.button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {displayed.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
