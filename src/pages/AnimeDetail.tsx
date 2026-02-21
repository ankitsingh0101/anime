import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import { getAnimeById } from "@/data/animeData";
import type { Character } from "@/data/animeData";
import CharacterCard from "@/components/CharacterCard";
import CharacterModal from "@/components/CharacterModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AnimeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const anime = getAnimeById(id || "");
  const [search, setSearch] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const filteredCharacters = useMemo(() => {
    if (!anime) return [];
    if (!search.trim()) return anime.characters;
    return anime.characters.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [anime, search]);

  if (!anime) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground text-lg mb-4">Anime not found</p>
          <Button variant="ghost" onClick={() => navigate("/")}>Go Back</Button>
        </div>
      </div>
    );
  }

  const accentColor = anime.color;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-8 pb-6 px-6 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="mb-4 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Gallery
          </Button>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-gradient mb-3"
        >
          {anime.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground max-w-2xl leading-relaxed"
        >
          {anime.description}
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 relative max-w-sm"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search characters..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 glass border-none"
          />
        </motion.div>
      </header>

      {/* Character grid */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredCharacters.map((character, i) => (
            <CharacterCard
              key={character.id}
              character={character}
              index={i}
              accentColor={accentColor}
              onClick={() => setSelectedCharacter(character)}
            />
          ))}
        </div>
        {filteredCharacters.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">No characters found.</p>
        )}
      </main>

      <CharacterModal
        character={selectedCharacter}
        open={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
        accentColor={accentColor}
      />
    </div>
  );
};

export default AnimeDetail;
