"use client";
import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/data";

interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

const categoryMeta: { key: keyof typeof skillsData; label: string; accent: string }[] = [
  { key: "aiAndLlms",       label: "AI & LLMs",        accent: "#f59e0b" },
  { key: "languages",       label: "Languages",        accent: "#818cf8" },
  { key: "dataEngineering", label: "Data Engineering", accent: "#a78bfa" },
  { key: "infrastructure",  label: "Infrastructure",   accent: "#c084fc" },
];

const proficiencyLabel = (p: number): { label: string; color: string } => {
  if (p >= 90) return { label: "Expert",       color: "#34d399" };
  if (p >= 80) return { label: "Advanced",     color: "#818cf8" };
  if (p >= 70) return { label: "Intermediate", color: "#a78bfa" };
  return              { label: "Familiar",     color: "#f472b6" };
};

const SkillCard = ({
  skill,
  accent,
  index,
}: {
  skill: Skill;
  accent: string;
  index: number;
}) => {
  const { label, color } = proficiencyLabel(skill.proficiency);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group"
      style={{ perspective: "800px" }}
    >
      {/* Flip container */}
      <div
        className="relative h-36 w-full transition-transform duration-500 ease-in-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 rounded-xl border border-white/[0.08] flex flex-col items-center justify-center gap-3 px-3 group-hover:[transform:rotateY(180deg)] transition-transform duration-500"
          style={{
            backfaceVisibility: "hidden",
            background: "#13132a",
            willChange: "transform",
          }}
        >
          {/* Coloured top bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl" style={{ background: accent }} />

          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center"
            style={{ background: `${accent}20`, border: `1px solid ${accent}40` }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-6 h-6 object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.display = "none";
                const span = img.nextElementSibling as HTMLElement;
                if (span) span.classList.remove("hidden");
              }}
            />
            <span className="text-base font-bold hidden" style={{ color: accent }}>
              {skill.name.charAt(0)}
            </span>
          </div>

          <p className="text-xs font-semibold text-white text-center leading-tight">
            {skill.name}
          </p>

          {/* Flip hint */}
          <p className="text-[10px] text-gray-600 absolute bottom-2">hover to see level</p>
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 rounded-xl border flex flex-col items-center justify-center gap-2.5 px-4 [transform:rotateY(180deg)] group-hover:[transform:rotateY(360deg)] transition-transform duration-500"
          style={{
            backfaceVisibility: "hidden",
            background: "#1a1a35",
            borderColor: `${accent}50`,
            willChange: "transform",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl" style={{ background: accent }} />

          <p className="text-sm font-bold text-white text-center">{skill.name}</p>

          <p className="text-xs font-semibold" style={{ color }}>
            {label}
          </p>

          {/* Proficiency bar */}
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 delay-200"
              style={{
                width: `${skill.proficiency}%`,
                background: `linear-gradient(to right, ${accent}, ${color})`,
              }}
            />
          </div>

          <p className="text-[11px] font-mono" style={{ color: accent }}>
            {skill.proficiency}%
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="py-16 w-full" id="skills">
      <h1 className="heading text-white mb-12">
        My <span className="text-purple">Skills</span>
      </h1>

      <div className="flex flex-col gap-10 max-w-5xl mx-auto">
        {categoryMeta.map(({ key, label, accent }) => (
          <div key={key}>
            {/* Category header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full" style={{ background: accent }} />
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                {label}
              </h3>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            {/* Skills row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skillsData[key].map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} accent={accent} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
