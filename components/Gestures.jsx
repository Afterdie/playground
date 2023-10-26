import React from "react";
import { motion } from "framer-motion";

export default function Gestures() {
  return (
    <>
      <h1>Gestures</h1>
      <motion.div
        className="h-[100px] w-[100px] bg-black rounded-full"
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        drag
        dragSnapToOrigin={true}
        whileDrag={{ scale: 0.2 }}
        whileHover={{ opacity: 0.5 }}
      ></motion.div>
    </>
  );
}
