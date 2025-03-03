import { motion } from "framer-motion";
import "../App.css";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Vite", "Node.js", "Express.js"
];

const ScrollingSkills = () => {
  return (
    <div className="skills-container">
      <motion.div
        className="skills-wrapper"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingSkills;
