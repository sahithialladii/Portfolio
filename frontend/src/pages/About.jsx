import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/img/profile.JPG";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* 🔹 Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">

          {/* Profile Image */}
          <motion.img
            src={profile}
            alt="Profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-64 h-64 object-cover rounded-full shadow-xl border-4 border-white"
          />

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4 border-b-4 border-indigo-600 inline-block pb-2">
              About Me
            </h1>

            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              Hi, I'm{" "}
              <span className="text-indigo-800 font-semibold">
                Sahithi Alladi
              </span>
              , a Computer Science graduate passionate about building
              scalable web applications and AI-driven solutions.
            </p>

            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              I specialize in{" "}
              <span className="font-semibold">
                React and Tailwind CSS
              </span>{" "}
              for frontend development, and I work with{" "}
              <span className="font-semibold">
                Flask and Node.js
              </span>{" "}
              for backend development.
            </p>

            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              I have hands-on experience integrating AI models like{" "}
              <span className="font-semibold">
                Gemini and Groq (LLaMA3)
              </span>{" "}
              to build intelligent systems.
            </p>

            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              My key project, an{" "}
              <span className="font-semibold">
                AI-based Adaptive Assessment System
              </span>
              , generates personalized assignments based on student performance,
              combining AI with real-world problem solving.
            </p>

            {/* 🔥 Highlight Box */}
            <div className="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-600 rounded-lg">
              <p className="text-gray-800 font-medium">
                🚀 Currently building AI-powered applications using React, Flask,
                and LLM integrations.
              </p>
            </div>

            {/* 🔹 Quick Tech Tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              {["React", "Flask", "AI/ML", "MySQL", "Node.js"].map(
                (item, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* 🔹 Skills Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b-4 border-indigo-600 inline-block">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* Frontend */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 mb-3">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(
                (skill, i) => (
                  <SkillCard key={i} skill={skill} />
                )
              )}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 mb-3">
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Flask", "Node.js"].map((skill, i) => (
                <SkillCard key={i} skill={skill} />
              ))}
            </div>
          </div>

          {/* AI/ML */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 mb-3">
              AI / ML
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Machine Learning", "CNN", "Gemini API", "Groq (LLaMA3)"].map(
                (skill, i) => (
                  <SkillCard key={i} skill={skill} />
                )
              )}
            </div>
          </div>

          {/* Database */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 mb-3">
              Database
            </h3>
            <div className="flex flex-wrap gap-3">
              {["MySQL", "DBMS"].map((skill, i) => (
                <SkillCard key={i} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 Tools Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b-4 border-indigo-600 inline-block">
          Tools I Use
        </h2>

        <div className="flex flex-wrap gap-3">
          {["VS Code", "GitHub", "Excel", "Canva", "ChatGPT"].map(
            (tool, i) => (
              <SkillCard key={i} skill={tool} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

/* 🔹 Reusable Skill Card */
const SkillCard = ({ skill }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5 }}
    className="bg-white shadow-md rounded-lg px-4 py-2 text-gray-800 text-sm font-medium cursor-pointer"
  >
    {skill}
  </motion.div>
);

export default About;