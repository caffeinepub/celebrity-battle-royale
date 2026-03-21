import { Skeleton } from "@/components/ui/skeleton";
import { Crown, Medal, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { EmberParticles } from "../components/EmberParticles";
import { useAllCharacters, useLeaderboard } from "../hooks/useQueries";

const RANK_CONFIG = [
  {
    icon: Crown,
    color: "oklch(0.85 0.18 80)",
    label: "CHAMPION",
    glow: "oklch(0.85 0.18 80 / 0.4)",
  },
  {
    icon: Trophy,
    color: "oklch(0.78 0.05 260)",
    label: "RUNNER-UP",
    glow: "oklch(0.78 0.05 260 / 0.3)",
  },
  {
    icon: Medal,
    color: "oklch(0.68 0.12 55)",
    label: "THIRD PLACE",
    glow: "oklch(0.68 0.12 55 / 0.3)",
  },
];

export function Leaderboard() {
  const { data: rankings = [], isLoading } = useLeaderboard();
  const { data: characters = [] } = useAllCharacters();

  const getCharacter = (charId: bigint) =>
    characters.find((c) => c.id === charId);

  const topThree = rankings.slice(0, 3);
  const rest = rankings.slice(3);

  return (
    <main
      className="min-h-screen pt-20 pb-16 px-4"
      style={{ background: "oklch(0.08 0.01 265)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative py-10">
          <EmberParticles count={8} />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2"
          >
            <p
              className="font-display tracking-[0.3em] text-sm"
              style={{ color: "oklch(0.78 0.15 70)" }}
            >
              SEASON 1
            </p>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "oklch(0.95 0.005 265)",
              }}
            >
              GLOBAL RANKINGS
            </h1>
            <p className="text-sm" style={{ color: "oklch(0.70 0.01 265)" }}>
              The island's most feared warriors. Fear the name at #1.
            </p>
          </motion.div>
        </div>

        {isLoading ? (
          <div className="space-y-3" data-ocid="leaderboard.loading_state">
            {["s1", "s2", "s3", "s4", "s5", "s6"].map((sk) => (
              <Skeleton
                key={sk}
                className="h-16 rounded"
                style={{ background: "oklch(0.15 0.01 265)" }}
              />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {topThree.map((player, i) => {
                const cfg = RANK_CONFIG[i];
                const char = getCharacter(player.characterId);
                const Icon = cfg.icon;
                return (
                  <motion.div
                    key={player.rank.toString()}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`hud-bracket rounded p-4 text-center ${i === 0 ? "sm:-mt-4" : ""}`}
                    style={{
                      background:
                        "linear-gradient(160deg, oklch(0.14 0.02 50) 0%, oklch(0.11 0.01 265) 100%)",
                      border: `1px solid ${cfg.color.replace(")", " / 0.5)")}`,
                      boxShadow: `0 0 20px ${cfg.glow}`,
                    }}
                    data-ocid={`leaderboard.item.${i + 1}`}
                  >
                    <Icon
                      className="w-6 h-6 mx-auto mb-2"
                      style={{ color: cfg.color }}
                    />
                    <p
                      className="font-display text-xs tracking-widest"
                      style={{ color: cfg.color }}
                    >
                      {cfg.label}
                    </p>
                    <p
                      className="font-display text-lg mt-1 truncate"
                      style={{ color: "oklch(0.95 0.005 265)" }}
                    >
                      {player.playerName}
                    </p>
                    {char && (
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "oklch(0.78 0.15 70)" }}
                      >
                        {char.countryFlag} {char.name}
                      </p>
                    )}
                    <div
                      className="mt-3 pt-3"
                      style={{
                        borderTop: "1px solid oklch(0.78 0.15 70 / 0.15)",
                      }}
                    >
                      <div className="grid grid-cols-3 gap-1 text-center">
                        {[
                          { label: "KILLS", val: player.kills },
                          { label: "WINS", val: player.wins },
                          { label: "GAMES", val: player.gamesPlayed },
                        ].map((stat) => (
                          <div key={stat.label}>
                            <p
                              className="font-display text-base"
                              style={{ color: "oklch(0.95 0.005 265)" }}
                            >
                              {stat.val.toString()}
                            </p>
                            <p
                              className="text-[10px] tracking-wider"
                              style={{ color: "oklch(0.50 0.01 265)" }}
                            >
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div
              className="rounded overflow-hidden"
              style={{ border: "1px solid oklch(0.78 0.15 70 / 0.15)" }}
              data-ocid="leaderboard.table"
            >
              <div
                className="grid grid-cols-12 gap-2 px-4 py-3 text-xs font-display tracking-widest"
                style={{
                  background: "oklch(0.12 0.015 40)",
                  borderBottom: "1px solid oklch(0.78 0.15 70 / 0.2)",
                  color: "oklch(0.78 0.15 70)",
                }}
              >
                <span className="col-span-1">#</span>
                <span className="col-span-4">PLAYER</span>
                <span className="col-span-3">CHARACTER</span>
                <span className="col-span-1 text-right">KILLS</span>
                <span className="col-span-1 text-right">WINS</span>
                <span className="col-span-2 text-right">GAMES</span>
              </div>

              {rest.map((player, i) => {
                const char = getCharacter(player.characterId);
                return (
                  <motion.div
                    key={player.rank.toString()}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="grid grid-cols-12 gap-2 px-4 py-3 text-sm"
                    style={{
                      background:
                        i % 2 === 0
                          ? "oklch(0.10 0.01 265)"
                          : "oklch(0.12 0.012 265)",
                      borderBottom: "1px solid oklch(0.78 0.15 70 / 0.07)",
                    }}
                    data-ocid="leaderboard.row"
                  >
                    <span
                      className="col-span-1 font-display text-lg"
                      style={{ color: "oklch(0.60 0.01 265)" }}
                    >
                      {player.rank.toString()}
                    </span>
                    <span
                      className="col-span-4 font-bold truncate"
                      style={{ color: "oklch(0.90 0.005 265)" }}
                    >
                      {player.playerName}
                    </span>
                    <span
                      className="col-span-3 text-xs"
                      style={{ color: "oklch(0.78 0.15 70)" }}
                    >
                      {char ? `${char.countryFlag} ${char.name}` : "Unknown"}
                    </span>
                    <span
                      className="col-span-1 text-right"
                      style={{ color: "oklch(0.90 0.005 265)" }}
                    >
                      {player.kills.toString()}
                    </span>
                    <span
                      className="col-span-1 text-right"
                      style={{ color: "oklch(0.78 0.15 70)" }}
                    >
                      {player.wins.toString()}
                    </span>
                    <span
                      className="col-span-2 text-right"
                      style={{ color: "oklch(0.60 0.01 265)" }}
                    >
                      {player.gamesPlayed.toString()}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
