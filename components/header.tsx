"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 right-0 top-0 z-[50] m-4 flex justify-end">
      <motion.div variants={itemVariants}>
        <Link
          href="https://github.com/circulo-ai"
          rel="noopener noreferrer"
          target="_blank">
          <Button
            size="sm"
            variant="secondary"
            className="text-yellow-50 transition-all duration-150 ease-linear md:hover:text-yellow-200">
            <FaGithub className="md:mr-1.5" />
            <span className="hidden md:inline">GitHub</span>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
