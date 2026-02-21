"use client";
import { motion } from "framer-motion";
import type { Character } from "@/data/animeData";

interface CharacterCardProps {
  character: Character;
  index: number;
  accentColor: string;
  onClick: () => void;
}

const borderHover: Record<string, string> = {
  orange: "hover:border-orange-400",
  purple: "hover:border-purple-400",
  green: "hover:border-emerald-400",
};

const CharacterCard = ({ character, index, accentColor, onClick }: CharacterCardProps) => {
  return (
    <motion.div
      layoutId={`card-${character.id}`}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 25, delay: index * 0.02 }}
      whileHover={{ scale: 1.05 }}
      className={`rounded-xl overflow-hidden cursor-pointer bg-[#0b0f19] border-2 border-transparent ${borderHover[accentColor]}`}
    >
      <div className="relative h-64 w-full bg-[#161b22]">
        <motion.img
          layoutId={`img-${character.id}`}
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div layoutId={`info-${character.id}`} className="p-3 text-center bg-[#0b0f19]">
        <p className="text-sm font-semibold truncate text-white">{character.name}</p>
        <p className="text-xs opacity-60 text-gray-400">Strength: {character.strength}/10</p>
      </motion.div>
    </motion.div>
  );
};

export default CharacterCard;