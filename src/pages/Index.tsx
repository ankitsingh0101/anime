import { motion } from "framer-motion";
import { animeList } from "@/data/animeData";
import AnimeCard from "@/components/AnimeCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero header */}
      <header className="pt-16 pb-10 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-gradient mb-4"
        >
          Anime Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-md mx-auto"
        >
          Explore characters from your favorite anime series
        </motion.p>
      </header>

      {/* Anime grid */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {animeList.map((anime, i) => (
            <AnimeCard key={anime.id} anime={anime} index={i} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
