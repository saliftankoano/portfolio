"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  label: string;
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.2 }}
      className="will-change-transform hover:cursor-pointer"
    >
      <Badge role="listitem" className="transition-transform duration-200">
        {label}
      </Badge>
    </motion.div>
  );
}


