import { motion } from "framer-motion";
import React, { useState } from "react";

const container = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Box() {
  const [isVisible, setVisible] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <motion.div
        className="bg-black rounded-2xl h-[460px] w-[460px] grid grid-cols-2 grid-rows-2 gap-[20px] p-[20px]"
        variants={container}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {[0, 1, 2].map((key) => {
          return (
            <motion.div
              className="bg-white rounded-full h-[200px] w-[200px]"
              variants={items}
              drag
              dragSnapToOrigin={true}
              key={key}
            ></motion.div>
          );
        })}
      </motion.div>
      <h1>
        implementing drag and animation staggering to the children elements
      </h1>
      <button
        onClick={() => setVisible(!isVisible)}
        className="bg-slate-800 text-white p-4 rounded-xl"
      >
        Click me to toggle the animation
      </button>
    </div>
  );
}
