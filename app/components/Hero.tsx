"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-16 pt-28">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#8B5CF6"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="#6366F1"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#A78BFA"
        />
      </div>

      {/* Background grid — fades out before the fold so no hard line */}
      <div className="h-screen w-full bg-[#0d0d1a] bg-grid-white/[0.03] absolute top-0 left-0 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0d0d1a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative mt-16 mb-12 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-5">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs md:text-sm text-gray-300"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
            Backend Engineer · Toronto, ON
          </motion.div>

          <h2 className="uppercase tracking-widest text-xs md:text-sm text-center text-blue-100">
            Backend &amp; Data Engineer
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Backend systems built for production, not just demos"
          />

          <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-xl text-gray-300">
            Hi, I&apos;m <span className="text-white font-semibold">Nutan Nimkar</span> — I build production-grade data pipelines, distributed systems, and backend infrastructure that scales.
          </p>

          {/* Profile pic + CTAs */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-2">
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden relative ring-2 ring-purple-500/40">
              <Image
                src="/pfp.jpeg"
                alt="Nutan Nimkar"
                fill
                sizes="(max-width: 768px) 112px, 160px"
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#about">
                <MagicButton
                  title="View my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
              <a href="/Nutan_Nimkar_Resume.pdf" download="Nutan_Nimkar_Resume.pdf">
                <MagicButton
                  title="Download Resume"
                  icon={<FaDownload />}
                  position="right"
                  otherClasses="!bg-gradient-to-r from-purple-900/80 to-slate-950"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
