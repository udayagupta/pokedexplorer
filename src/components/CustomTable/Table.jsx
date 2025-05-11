import React from "react";
import { tableAnimation } from "../../utils/animation.js";
import { motion } from "framer-motion"
import "../../styles/PokemonInfo.css";


export const Table = ({ children, ...props }) => {
  return (
    <motion.table
      initial={tableAnimation.initial}
      animate={tableAnimation.animate}
      transition={{ delay: 0.5 }}
      className={`custom-table table-auto w-full border border-slate-700 rounded-lg overflow-hidden ${props.className}`}
    >
      <tbody>
        {children}
      </tbody>
    </motion.table>
  );
};
