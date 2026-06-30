"use client";

import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { FaLock, FaCodeBranch } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";

type Project = (typeof projects)[number] & { status?: string };

const StatusBadge = ({ status }: { status?: string }) => {
  if (status === "private")
    return (
      <span className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
        <FaLock size={10} /> Internal / Private
      </span>
    );
  if (status === "in-progress")
    return (
      <span className="flex items-center gap-1.5 text-xs text-blue-400 font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        In Development
      </span>
    );
  return null;
};

const RecentProjects = () => {
  return (
    <div className="py-16" id="projects">
      <h1 className="heading text-white">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {(projects as Project[]).slice(0, 3).map(({ title, id, des, img, iconLists, link, status }) => (
          <div
            className="h-[26rem] sm:h-[28rem] flex items-center justify-center sm:w-[340px] w-[80vw]"
            key={id}
          >
            <PinContainer
              title={status === "private" ? "Internal project" : status === "in-progress" ? "In development" : link}
              href={link || undefined}
            >
              {/* Image area */}
              <div className="relative flex items-center justify-center w-[80vw] h-[160px] sm:w-[340px] sm:h-[200px] overflow-hidden mb-4">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={img} alt="cover" className="z-10 absolute" />
              </div>

              <h1 className="text-white font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-4 mb-3">
                {/* Tech icons */}
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <img
                        src={icon}
                        alt="tech icon"
                        className="p-2"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    </div>
                  ))}
                </div>

                {/* Link or status badge */}
                {status ? (
                  <StatusBadge status={status} />
                ) : (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple text-sm font-medium hover:underline"
                  >
                    View repo <FaLocationArrow size={12} />
                  </a>
                )}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
