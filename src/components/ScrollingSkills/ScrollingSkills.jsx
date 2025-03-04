import { motion } from "framer-motion";
import "./style/ScrollingSkills.css";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Vite", "Node.js", "Express.js"
];

const ScrollingSkills = () => {
  return (
    <div>
      <div class="wrapper">
        <div class="itemLeft item1"><h2>HTML</h2><p>Lvl.1</p></div>
        <div class="itemLeft item2"><h2>CSS</h2></div>
        <div class="itemLeft item3"><h2>JavaScript</h2></div>
        <div class="itemLeft item4"><h2>Python</h2></div>
        <div class="itemLeft item5"><h2>Go</h2></div>
        <div class="itemLeft item6"><h2>C\C++</h2></div>
        <div class="itemLeft item7"><h2>Dart</h2></div>
        <div class="itemLeft item8"><h2>Java</h2></div>
      </div>
      <div class="wrapper">
        <div class="itemRight item1"><h2>MongoDB</h2></div>
        <div class="itemRight item2"><h2>PostGreSQL</h2></div>
        <div class="itemRight item3"><h2>TensorFlow</h2></div>
        <div class="itemRight item4"><h2>Node.js</h2></div>
        <div class="itemRight item5"><h2>Express</h2></div>
        <div class="itemRight item6"><h2>Flutter</h2></div>
        <div class="itemRight item7"><h2>Firebase</h2></div>
        <div class="itemRight item8"><h2>React</h2></div>
      </div>
    </div>
  );
};

export default ScrollingSkills;
