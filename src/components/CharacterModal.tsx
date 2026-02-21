"use client";
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import type { Character } from "@/data/animeData";

interface CharacterModalProps {
  character: Character | null;
  open: boolean;
  onClose: () => void;
  accentColor: string;
}

// Professional theme mapping
const themeColors: Record<string, { backdrop: string; imgBg: string; accent: string; shadow: string }> = {
  orange: { 
    backdrop: "from-orange-600/20 via-black to-orange-900/30", 
    imgBg: "bg-gradient-to-b from-orange-950/50 to-[#0d111c]",
    accent: "bg-orange-500",
    shadow: "shadow-orange-500/20"
  },
  purple: { 
    backdrop: "from-purple-600/20 via-black to-indigo-900/30", 
    imgBg: "bg-gradient-to-b from-indigo-950/50 to-[#0d111c]",
    accent: "bg-purple-500",
    shadow: "shadow-purple-500/20"
  },
  green: { 
    backdrop: "from-emerald-600/20 via-black to-green-900/30", 
    imgBg: "bg-gradient-to-b from-emerald-950/50 to-[#0d111c]",
    accent: "bg-emerald-500",
    shadow: "shadow-emerald-500/20"
  },
};

const CharacterModal = ({ character, open, onClose, accentColor }: CharacterModalProps) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const theme = themeColors[accentColor] || themeColors.purple;

  if (!character) return null;

  return (
    <AnimatePresence>
      {open && (
        <Dialog open={open} onOpenChange={onClose}>
          <motion.div
            className={`fixed inset-0 bg-gradient-to-br ${theme.backdrop} backdrop-blur-xl flex items-center justify-center z-[999]`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0" onClick={onClose} />

            <motion.div
              layoutId={`card-${character.id}`}
              className={`relative rounded-3xl overflow-hidden bg-[#0d111c] shadow-2xl z-10 border border-white/10 ${theme.shadow}`}
              style={{ width: "95%", maxWidth: 620, transformStyle: "preserve-3d", perspective: "1000px" }}
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
            >
              {/* SHINE EFFECT: A realistic glare that sweeps across on entry */}
              <motion.div 
                className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent"
                initial={{ x: "-100%", skewX: -20 }}
                animate={{ x: "200%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />

              {/* IMAGE AREA - FIXED ASPECT RATIO & BACKGROUND */}
              <div className={`relative h-[400px] w-full ${theme.imgBg} flex items-center justify-center overflow-hidden`}>
                <motion.img
                  layoutId={`img-${character.id}`}
                  src={character.image}
                  alt={character.name}
                  className="max-w-full max-h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setMouse({ 
                        x: (e.clientX - rect.left) / rect.width - 0.5, 
                        y: (e.clientY - rect.top) / rect.height - 0.5 
                    });
                  }}
                  onMouseLeave={() => setMouse({ x: 0, y: 0 })}
                  animate={{ rotateX: mouse.y * -10, rotateY: mouse.x * 10 }}
                />
              </div>

              {/* CONTENT AREA */}
              <motion.div layoutId={`info-${character.id}`} className="p-8 space-y-8 bg-[#0d111c] relative border-t border-white/5">
                <div className="flex justify-between items-start">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
                      {character.name}
                    </h2>
                    <div className={`h-1 w-12 mt-3 ${theme.accent} rounded-full`} />
                  </motion.div>
                  <button onClick={onClose} className="text-white/20 hover:text-white transition-all hover:rotate-90 text-2xl">✕</button>
                </div>

                <div className="grid grid-cols-2 gap-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em] text-white mb-4">Mastered Abilities</h4>
                        <div className="flex flex-wrap gap-2">
                            {character.abilities.map((ability, i) => (
                            <motion.span 
                              key={ability} 
                              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                              className="px-3 py-1.5 rounded-md text-[10px] bg-white/[0.03] border border-white/10 text-gray-300 font-bold uppercase transition-colors"
                            >
                                {ability}
                            </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                        <h4 className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em] text-white mb-4">Power Potential</h4>
                        <div className="relative pt-2">
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                className={`h-full ${theme.accent} shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
                                initial={{ width: 0 }}
                                animate={{ width: `${character.strength * 10}%` }}
                                transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
                                />
                            </div>
                            <span className="absolute right-0 -top-4 text-[10px] font-mono text-white/40 italic">
                                {character.strength * 10}%
                            </span>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.4 }}
                   className="relative group"
                >
                    <div className={`absolute -left-4 top-0 bottom-0 w-1 ${theme.accent} opacity-20 group-hover:opacity-100 transition-opacity`} />
                    <p className="text-lg text-gray-400 font-medium leading-relaxed italic pl-2">
                    "{character.quote}"
                    </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default CharacterModal;