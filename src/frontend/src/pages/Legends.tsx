import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { CharacterCard } from "../components/CharacterCard";
import { EmberParticles } from "../components/EmberParticles";
import { useAllCharacters } from "../hooks/useQueries";

export function Legends() {
  const { data: characters = [], isLoading } = useAllCharacters();

  return (
    <main
      className="min-h-screen pt-20 pb-16 px-4"
      style={{ background: "oklch(0.08 0.01 265)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative py-8">
          <EmberParticles count={8} />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p
              className="font-display tracking-[0.3em] text-sm mb-2"
              style={{ color: "oklch(0.78 0.15 70)" }}
            >
              CHARACTER ROSTER
            </p>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "oklch(0.95 0.005 265)",
              }}
            >
              GLOBAL LEGENDS
            </h1>
            <p
              className="mt-2 text-sm"
              style={{ color: "oklch(0.70 0.01 265)" }}
            >
              Choose your warrior. Every country has a champion.
            </p>
            <div
              className="mx-auto mt-4 h-px max-w-xs"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.78 0.15 70 / 0.6), transparent)",
              }}
            />
          </motion.div>
        </div>

        {isLoading ? (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            data-ocid="legends.loading_state"
          >
            {["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"].map((sk) => (
              <Skeleton
                key={sk}
                className="h-72 rounded"
                style={{ background: "oklch(0.15 0.01 265)" }}
              />
            ))}
          </div>
        ) : (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            data-ocid="legends.list"
          >
            {characters.map((char, i) => (
              <div key={char.id.toString()} data-ocid={`legends.item.${i + 1}`}>
                <CharacterCard character={char} index={i} />
              </div>
            ))}
          </div>
        )}

        {characters.length === 0 && !isLoading && (
          <div className="text-center py-20" data-ocid="legends.empty_state">
            <p
              className="font-display text-2xl"
              style={{ color: "oklch(0.70 0.01 265)" }}
            >
              NO LEGENDS AVAILABLE
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
