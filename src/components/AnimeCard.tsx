import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Anime } from "@/data/animeData";

const colorMap: Record<string, string> = {
  orange: "from-orange-500/20 to-orange-600/5 hover:shadow-orange-500/20",
  purple: "from-purple-500/20 to-purple-600/5 hover:shadow-purple-500/20",
  green: "from-emerald-500/20 to-emerald-600/5 hover:shadow-emerald-500/20",
};

const accentMap: Record<string, string> = {
  orange: "bg-orange-500",
  purple: "bg-purple-500",
  green: "bg-emerald-500",
};

interface AnimeCardProps {
  anime: Anime;
  index: number;
}

const AnimeCard = ({ anime, index }: AnimeCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={() => navigate(`/anime/${anime.id}`)}
      className={`group glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl flex flex-col h-full ${colorMap[anime.color] || ""}`}
    >
      {/* Top Gradient accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r shrink-0 z-30 ${
        anime.color === "orange" ? "from-orange-400 to-orange-600" : 
        anime.color === "purple" ? "from-purple-400 to-purple-600" : 
        "from-emerald-400 to-emerald-600"
      }`} />

      {/* Image Container */}
      <div className="relative w-full h-[320px] overflow-hidden flex items-center justify-center bg-zinc-950">
        
        {/* 1. THE BACKGROUND BLUR LAYER */}
        {/* We use 'object-cover' here - this is what removes the black spaces */}
        <img 
          src={anime.image} 
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-40 brightness-50 z-0"
          aria-hidden="true"
        />

        {/* 2. THE MAIN POSTER LAYER */}
        {/* 'object-contain' keeps your image full-size and uncropped */}
        <img 
          src={anime.image} 
          alt={anime.title}
          className="relative z-10 h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_0_25px_rgba(0,0,0,0.9)]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x600?text=Image+Not+Found";
          }}
        />
        
        {/* Character Count Badge */}
        <div className={`absolute bottom-3 right-3 ${accentMap[anime.color]} text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg z-20`}>
          {anime.characters.length} Characters
        </div>
      </div>

      {/* Info Section */}
      <div className="p-5 flex flex-col flex-grow relative z-20">
        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {anime.title}
        </h2>
        <p className="text-zinc-400 text-sm line-clamp-2 mb-4 flex-grow">
          {anime.description}
        </p>
        <div className="flex gap-3 text-[11px] font-medium text-zinc-500 mt-auto">
          <span className="glass px-2 py-1 rounded-md border border-white/5">{anime.episodes} Episodes</span>
          <span className="glass px-2 py-1 rounded-md border border-white/5">{anime.seasons} Seasons</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimeCard;