// import { motion } from "framer-motion";
import "./style/ScrollingSkills.css";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Vite", "Node.js", "Express.js"
];

const ScrollingSkills = () => {
  return (
    <div>
      <div class="wrapper">
        <div class="itemLeft item1"><h2>HTML</h2><p>LVL-03</p></div>
        <div class="itemLeft item2"><h2>CSS</h2><p>LVL-02</p></div>
        <div class="itemLeft item3"><h2>JavaScript</h2><p>LVL-01</p></div>
        <div class="itemLeft item4"><h2>Python</h2><p>LVL-02</p></div>
        <div class="itemLeft item5"><h2>Go</h2><p>LVL-01</p></div>
        <div class="itemLeft item6"><h2>C\C++</h2><p>LVL-03</p></div>
        <div class="itemLeft item7"><h2>Dart</h2><p>LVL-03</p></div>
        <div class="itemLeft item8"><h2>Java</h2><p>LVL-02</p></div>
      </div>
      <div class="wrapper">
        <div class="itemRight item1"><h2>MongoDB</h2><p>LVL-01</p></div>
        <div class="itemRight item2"><h2>PostGreSQL</h2><p>LVL-02</p></div>
        <div class="itemRight item3"><h2>TensorFlow</h2><p>LVL-02</p></div>
        <div class="itemRight item4"><h2>Node.js</h2><p>LVL-01</p></div>
        <div class="itemRight item5"><h2>Express.js</h2><p>LVL-01</p></div>
        <div class="itemRight item6"><h2>Flutter</h2><p>LVL-02</p></div>
        <div class="itemRight item7"><h2>Firebase</h2><p>LVL-01</p></div>
        <div class="itemRight item8"><h2>React</h2><p>LVL-02</p></div>
      </div>
    </div>
  );
};

export default ScrollingSkills;
